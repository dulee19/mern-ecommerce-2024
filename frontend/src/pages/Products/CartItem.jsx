import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import CartCount from "./CartCount";

const FavoriteItem = () => {
  return (
    <Link
      to="/cart"
      className="flex items-center transition-transform transform hover:translate-x-2"
    >
      <FaShoppingCart className="mr-2 mt-[3rem]" size={32} />
      <span className="hidden nav-item-name mt-[3rem]">Cart</span>
      <CartCount />
    </Link>
  );
};

export default FavoriteItem;
