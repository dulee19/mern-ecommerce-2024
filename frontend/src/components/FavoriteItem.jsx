import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import FavoritesCount from "../pages/Products/FavoritesCount";

const FavoriteItem = () => {
  return (
    <Link
      to="/favorite"
      className="flex items-center transition-transform transform hover:translate-x-2"
    >
      <FaHeart className="mr-2 mt-[3rem]" size={32} />
      <span className="hidden nav-item-name mt-[3rem]">Favorites</span>
      <FavoritesCount />
    </Link>
  );
};

export default FavoriteItem;
