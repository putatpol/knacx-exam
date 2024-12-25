import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ButtonCart = () => {
  return (
    <button className="flex items-center rounded-lg border px-4 py-2 text-sm">
      <div className="size-4 mr-1">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
      <span>(0)</span>
    </button>
  );
};

export default ButtonCart;
