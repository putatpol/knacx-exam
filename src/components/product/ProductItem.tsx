import { ProductApi } from "@/interface/productsApi.dto";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addProductCart } from "@/redux/slices/productCartSlice";

type Props = {
  dataProduct: ProductApi[];
};

const ProductItem = ({ dataProduct }: Props) => {
  const dispatch = useDispatch();

  const handleAddProduct = (
    id: number,
    title: string,
    price: number,
    images: string[],
  ) => {
    const totalPrice = price * 1;
    dispatch(
      addProductCart({
        products: { id, title, price, images },
        quantity: 1,
        totalPrice,
      }),
    );
  };

  return (
    <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
      {dataProduct.map((product, index) => (
        <div
          key={index}
          className="group rounded-lg border p-6 ring-rose-400 hover:ring-1"
        >
          <Image
            src={product.images[0]}
            width={300}
            height={300}
            alt={product.title}
            className="h-60 scale-95 object-contain duration-100 ease-in group-hover:scale-100"
            onError={(e) => {
              e.currentTarget.src = "/photo.png";
            }}
          />
          <p className="line-clamp-1">{product.title}</p>
          <p className="text-sm">$ {product.price}</p>
          <button
            className="mt-4 flex w-full items-center justify-center space-x-4 rounded-lg border border-rose-500 py-1 text-rose-500 hover:bg-rose-500 hover:text-white active:bg-rose-900"
            onClick={() =>

              handleAddProduct(
                product.id,
                product.title,
                product.price,
                product.images,
              )
            }
          >
            <FontAwesomeIcon icon={faPlus} />
            <span>Add to cart</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductItem;
