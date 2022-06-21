import React from "react";
import { Filters, Loader, SignleProduct } from "../../components";
import "./product.css";
import { useStateContext } from "../../context/DataContextProvider";
import { useDocumentTitle } from "../../hooks";
const Products = () => {
  useDocumentTitle("Men's Shop");
  const {
    data: { product, isDataLoading },
    filterState: {
      inStock,
      fastDelivery,
      byRating,
      sort,
      priceRange,
      filterByCategories,
      searchBy,
    },
  } = useStateContext();

  const filterPorducts = () => {
    let sortedNewProduct = product;
    if (sort) {
      sortedNewProduct = sortedNewProduct.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byRating) {
      sortedNewProduct = sortedNewProduct.filter(
        (product) => product.rating === byRating
      );
    }
    if (fastDelivery) {
      sortedNewProduct = sortedNewProduct.filter(
        (product) => product.fastDelivery
      );
    }
    if (inStock) {
      sortedNewProduct = sortedNewProduct.filter((product) => product.inStock);
    }
    if (priceRange) {
      sortedNewProduct = sortedNewProduct.filter(
        (product) => product.price >= priceRange
      );
    }
    if (filterByCategories.length !== 0) {
      sortedNewProduct = sortedNewProduct.filter((product) =>
        filterByCategories.includes(product.categoryName)
      );
    }
    if (searchBy) {
      sortedNewProduct = sortedNewProduct.filter((product) =>
        product.name.toLowerCase().includes(searchBy.toLowerCase())
      );
    }
    return sortedNewProduct;
  };

  if (isDataLoading && filterPorducts().length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="main-container">
      <Filters />
      <div className="product-grid">
        {filterPorducts()?.length !== 0 ? (
          filterPorducts().map((product) => {
            return <SignleProduct product={product} key={product._id} />;
          })
        ) : (
          <p>No Products Founds In Selected Category</p>
        )}
      </div>
    </div>
  );
};

export default Products;
