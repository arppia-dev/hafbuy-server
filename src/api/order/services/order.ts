/**
 * order service
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreService(
  'api::order.order',
  ({ strapi }) => ({
    async create(ctx: any) {
      const { data } = ctx

      // order
      const order = await strapi.entityService.create('api::order.order', {
        data: {
          order: `${Date.now()}`,
          status: 'pending',
          date: new Date(Date.now()).toISOString(),
        },
      })

      // billing
      if (data._billing) {
        await strapi.entityService.create('api::order-billing.order-billing', {
          data: {
            order: order.id,
            ...data._billing,
          },
        })
      }

      // products
      let subtotal: number = 0
      let itbms: number = 0
      let total: number = 0

      if (data._products && data._products.length) {
        for (const product of data._products) {
          await strapi.entityService.create(
            'api::order-product.order-product',
            {
              data: {
                order: order.id,
                qty: product.qty,
                price: product.price,
                product: product.id,
                variant: product.variant
                  ? Object.entries(product.variant.variant)
                      .map(([clave, valor], index, array) => {
                        const separador = index === array.length - 1 ? '' : ', '
                        return `${clave}: ${valor}${separador}`
                      })
                      .join('')
                  : null,
              },
            }
          )

          // TODO: modificar el precio desde el backend
          product.subtotal = (product.qty * product.price).toFixed(2)

          subtotal += product.qty * product.price
          itbms += product.qty * product.price * 0.07
        }

        total = subtotal + itbms

        data._totals = {
          subtotal: subtotal.toFixed(2),
          itbms: itbms.toFixed(2),
          total: total.toFixed(2),
        }
      }

      // payment
      if (data._payment) {
        await strapi.entityService.create('api::order-payment.order-payment', {
          data: {
            order: order.id,
            ...data._payment,
          },
        })
      }

      try {
        await strapi
          .plugin('email-designer')
          .service('email')
          .sendTemplatedEmail(
            {
              to: data._billing.email,
              cco: 'alexis.sniffer@gmail.com',
              from: 'no-reply@hafbuy.net',
              replyTo: 'no-reply@hafbuy.net',
              attachments: [],
            },
            {
              templateReferenceId: 1,
            },
            {
              ...data,
              ...order,
            }
          )
      } catch (err) {
        strapi.log.debug('📺: ', err)
      }

      return order
    },
  })
)
