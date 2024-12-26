import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ProductCart from "../product/ProductCart";

const IconCart = () => {
  return (
    <>
      <div className="flex items-center rounded-lg border px-4 py-2 text-sm">
        <div className="mr-1 size-4">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <span>(0)</span>
      </div>
    </>
  );
};

const ButtonCart = () => {
  return (
    <Menu>
      <MenuButton>
        <IconCart />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        className="itemCart mt-2 rounded-lg border shadow-md"
      >
        <MenuItem>
          <ProductCart />
        </MenuItem>
        <MenuItem>
          <ProductCart />
        </MenuItem>
        <MenuItem>
          <ProductCart />
        </MenuItem>
        <div className="py-2 px-5 *:flex *:justify-between *:items-center">
          <div>
            <small>จำนวนสินค้า</small>
            <small>3</small>
          </div>
          <div>
            <small>ราคารวม</small>
            <p className="text-rose-500">$ 1000</p>
          </div>
        </div>
      </MenuItems>
    </Menu>
  );
};
export default ButtonCart;
