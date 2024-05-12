"use strict";
/**
 * order service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const { data } = ctx;
        // order
        const order = await strapi.entityService.create('api::order.order', {
            data: {
                order: `${Date.now()}`,
                status: 'pending',
                date: new Date(Date.now()).toISOString(),
            },
        });
        // billing
        if (data._billing) {
            await strapi.entityService.create('api::order-billing.order-billing', {
                data: {
                    order: order.id,
                    ...data._billing,
                },
            });
        }
        // products
        if (data._products && data._products.length) {
            for (const product of data._products) {
                await strapi.entityService.create('api::order-product.order-product', {
                    data: {
                        order: order.id,
                        qty: product.qty,
                        price: product.price,
                        product: product.id,
                        variant: product.variant
                            ? Object.entries(product.variant.variant)
                                .map(([clave, valor], index, array) => {
                                const separador = index === array.length - 1 ? '' : ', ';
                                return `${clave}: ${valor}${separador}`;
                            })
                                .join('')
                            : null,
                    },
                });
                product.subtotal = product.qty * product.price;
            }
        }
        // payment
        if (data._payment) {
            await strapi.entityService.create('api::order-payment.order-payment', {
                data: {
                    order: order.id,
                    ...data._payment,
                },
            });
        }
        console.log(data._products);
        try {
            await strapi
                .plugin('email-designer')
                .service('email')
                .sendTemplatedEmail({
                to: data._billing.email,
                cco: 'alexis.sniffer@gmail.com',
                from: 'no-reply@hafbuy.net',
                replyTo: 'no-reply@hafbuy.net',
                attachments: [],
            }, {
                templateReferenceId: 1,
            }, {
                ...data,
                ...order,
            });
        }
        catch (err) {
            strapi.log.debug('📺: ', err);
        }
        return order;
    },
}));
