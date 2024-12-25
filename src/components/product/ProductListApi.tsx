"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { ProductApi, ProductsApiResponse } from "@/interface/productsApi.dto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "./ProductItem";

const ProductListApi = () => {
  const [dataProduct, setDataProduct] = useState<ProductApi[]>([]);
  const [totalProduct, setTotalProduct] = useState<number>(0);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    const itemAmount = 8;
    const url = `https://dummyjson.com/products?limit=${itemAmount}&skip=${skip}`;
    if (!hasMore) return;

    try {
      setLoading(true);
      const response = await axios.get<ProductsApiResponse>(url, {
        timeout: 10000,
      });
      const newProducts = response.data.products;

      // update dataProduct
      setDataProduct((prev) => [...prev, ...newProducts]);

      // check loader
      if (newProducts.length < itemAmount) {
        setHasMore(false);
      }

      // update skip
      setSkip((prev) => prev + itemAmount);
      setTotalProduct(response.data.total);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log(skip);
  // console.log(dataProduct);
  // console.log(totalProduct);

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="mr-3 text-rose-600">Product API</h2>
        <p className="text-xs">({totalProduct} items)</p>
      </div>
      <h5>รายการสินค้าจาก api</h5>
      <ProductItem dataProduct={dataProduct} />
      <div className="mt-10 text-center">
        {loading ? (
          <FontAwesomeIcon icon={faSpinner} />
        ) : hasMore ? (
          <button onClick={fetchProducts}>Load More</button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default ProductListApi;
