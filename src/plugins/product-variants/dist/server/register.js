"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    strapi.customFields.register({
        name: 'variants',
        plugin: 'product-variants',
        type: 'string',
        inputSize: {
            default: 4,
            isResizable: true,
        },
    });
};
