export const checkIsProductInWishlist = (WishListArr, id) => {
  return WishListArr.find((wishListProduct) => wishListProduct._id === id);
};
