"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@strapi/utils");
const { ApplicationError } = utils_1.errors;
const errorMessage = {
    es: 'No es posible agregar más de 3 niveles de categorías.',
    en: 'It is not possible to add more than 3 levels of categories.',
};
module.exports = {
    async afterCreate(event) {
        const { result } = event;
        await validate(result);
    },
    async afterUpdate(event) {
        const { result } = event;
        await validate(result);
    },
};
// TODO: realizar 2 validaciones -> 1. root con 3 niveles, sub con 3 niveles
async function validate(result) {
    let dataUpdate = {};
    let error = false;
    const parents = await findParent(result.id);
    if (result.category && result.category.count >= 1) {
        const rootParents = await findParent(parents.tree.category.id);
        if (rootParents.nivel >= 3) {
            dataUpdate.category = [];
            error = true;
        }
    }
    if (result.subcategories && result.subcategories.count >= 1) {
        if (parents.nivel >= 3) {
            dataUpdate.subcategories = [];
            error = true;
        }
    }
    if (error) {
        await updateCategory(result.id, dataUpdate);
        throw new ApplicationError(errorMessage[result.locale]);
    }
}
async function findParent(id) {
    let nivel = 1;
    const tree = (await strapi.entityService.findOne('api::category.category', id, {
        fields: ['name'],
        populate: {
            category: {
                fields: ['name'],
                populate: {
                    category: {
                        fields: ['name'],
                    },
                },
            },
        },
    }));
    if (tree.category) {
        nivel++;
        if (tree.category.category) {
            nivel++;
        }
    }
    return {
        tree,
        nivel,
    };
}
async function updateCategory(id, data) {
    await strapi.entityService.update('api::category.category', id, {
        data,
    });
}
