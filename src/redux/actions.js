import C from "./constants";

export const addError = (message) => ({
  type: C.ADD_ERROR,
  payload: message,
});

export function addProduct(ProductName, ProductImg, category) {
  return {
    type: C.ADD_PRODUCT_TO_WISHLIST,
    payload: { ProductName, ProductImg, category },
  };
}
