import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const ProductCart = () => {
  return (
    <div className="flex items-center border-b border-gray-200 p-4">
      <div className="h-16 w-16 flex-shrink-0">
        <Image
          src="/photo.png"
          alt="Product Image"
          width={64}
          height={64}
          className="rounded-md object-cover"
        />
      </div>

      <div className="ml-4 flex-1">
        <h3 className="text-sm font-semibold">Product Name</h3>
        <p className="text-sm text-gray-500">$99.99</p>
      </div>

      <div className="ml-4 flex items-center">
        <FontAwesomeIcon icon={faX} className="size-2" />
        <span className="pl-2 text-sm font-medium">1</span>
      </div>
    </div>
  );
};

export default ProductCart;
