import { fetchAPI } from "../strapi";

export async function getProducts(params = {}) {
  return fetchAPI({
    path: "/products",
    urlParams: {
      populate: "*",
      ...params,
    },
  });
}

export async function getProduct(slug: string) {
  return fetchAPI({
    path: `/products/${slug}`,
    urlParams: {
      populate: "*",
    },
  });
}
