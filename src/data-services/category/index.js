// Data Flow: Step 2

import { productService } from "data-services/product";
import { apiMainCategory } from "data-source/category";
import { apiDetailMainCategoryById } from "data-source/category";
import { apiDetailCategoryBySlug } from "data-source/category";
import { apiListCategory } from "data-source/category";
import { apiDetailCategoryById } from "data-source/category";

// transform data to fit with UI;
export const categoryService = {
  listCategory: function (params) {
    return apiListCategory(params).then((response) => {
      response.data = response.data.map((category) => {
        return filterFieldCategory(category);
      });
      return response;
    });
  },

  listFullCategory: function (params) {
    return apiMainCategory(params).then((response) => {
      response.data = response.data.map((mainCategory) => {
        return {
          id: mainCategory.id,
          title: mainCategory.name,
          url: "/danh-muc/" + mainCategory.slug,
          url_image: mainCategory.url_image,
          type: mainCategory.slug,
          desc: mainCategory.description,
          childs: mainCategory.list_sub_categories.map((subCategory) => {
            return {
              id: subCategory.id,
              title: subCategory.name,
              url: "/danh-muc/" + subCategory.slug,
              desc: mainCategory.description,
              type: subCategory.slug,
              childs: [],
            };
          }),
        };
      });
      return response;
    });
  },

  detailCategoryById: function (id) {
    return apiDetailCategoryById(id).then((response) => {
      response.data = filterFieldCategory(response.data);
      return response;
    });
  },

  detailMainCategoryById: function (id) {
    return apiDetailMainCategoryById(id).then((response) => {
      response.data = filterFieldCategory(response.data);
      return response;
    });
  },

  detailCategoryBySlug: function (slug) {
    return apiDetailCategoryBySlug(slug).then((response) => {
      response.data = filterFieldCategory(response.data);
      return response;
    });
  },

  listCategoryWithProduct: async function (paramsCategory, paramsProduct) {
    let listCategoryWithProduct = await this.listCategory(paramsCategory);
    let count = 0;
    for (let i = 0; i < listCategoryWithProduct.data.length; i++) {
      if (count == 4) break; // limit 4 category at home page
      const listProduct = await productService.listProductByCategoryId(
        listCategoryWithProduct.data[i].id,
        paramsProduct
      );
      if (listProduct.data.length > 0) {
        count++;
        listCategoryWithProduct.data[i] = {
          ...listCategoryWithProduct.data[i],
          listProduct: listProduct.data,
        };
      }
    }
    return listCategoryWithProduct;
  },
};

export const filterFieldCategory = (category) => {
  return {
    id: category.id,
    name: category.name,
    slug: category.slug,
  };
};
