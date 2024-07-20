import type { Schema, Attribute } from '@strapi/strapi'

export interface BlocksLink extends Schema.Component {
  collectionName: 'components_blocks_links'
  info: {
    displayName: 'link'
    description: ''
  }
  attributes: {
    href: Attribute.String & Attribute.Required
    label: Attribute.String & Attribute.Required
    target: Attribute.Enumeration<['_blank']>
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>
  }
}

export interface BlocksSlide extends Schema.Component {
  collectionName: 'components_blocks_slides'
  info: {
    displayName: 'slide'
    description: ''
  }
  attributes: {
    image: Attribute.Media & Attribute.Required
    alternativeText: Attribute.String
    link: Attribute.Component<'blocks.link'>
  }
}

export interface GlobalCarousel extends Schema.Component {
  collectionName: 'components_global_carousels'
  info: {
    displayName: 'carousel'
    description: ''
  }
  attributes: {
    sliders: Attribute.Component<'blocks.slide', true>
  }
}

export interface VariantsVariants extends Schema.Component {
  collectionName: 'components_variants_variants'
  info: {
    displayName: 'variants'
    description: ''
  }
  attributes: {
    images: Attribute.Media
    price: Attribute.Decimal & Attribute.Required
    discount: Attribute.Decimal
    isDiscount: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>
    until: Attribute.DateTime
    stock: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0
      }> &
      Attribute.DefaultTo<0>
    variant: Attribute.Component<'variants.variation', true>
  }
}

export interface VariantsVariation extends Schema.Component {
  collectionName: 'components_variants_variations'
  info: {
    displayName: 'variation'
    description: ''
  }
  attributes: {
    value: Attribute.String & Attribute.Required
    type: Attribute.Relation<
      'variants.variation',
      'oneToOne',
      'api::variant-type.variant-type'
    >
  }
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.link': BlocksLink
      'blocks.slide': BlocksSlide
      'global.carousel': GlobalCarousel
      'variants.variants': VariantsVariants
      'variants.variation': VariantsVariation
    }
  }
}
