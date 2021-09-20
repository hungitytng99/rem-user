import { apiListProductByMainCategorySlug } from "data-source/product";

export const galleryService = {
    listImgByMainCategorySlug: function (slug, params) {
        return apiListProductByMainCategorySlug(slug, params).then(response => {
            response.data = response.data.map(product => {
                return {
                    src: product.list_product_images[0],
                    // width: 2,
                    // height: 1,
                    alt: product.name,
                    key: product.slug
                }
            })
            return response;
        });
    }
}