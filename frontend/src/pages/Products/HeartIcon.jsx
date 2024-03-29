import { useEffect } from "react";
import { FaHeart, FaRegHeart, FaVaadin } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
  setFavorites
} from "../../redux/features/favorites/favoriteSlice";
import { toast } from "react-toastify";

import {
  addFavoriteToLocalStorage,
  removeFavoriteFromLocalStorage,
  getFavoritesFromLocalStorage
} from "../../utils/storage";

const HeartIcon = ({ product }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites) || [];
  const isFavorite = favorites.some(p => p._id === product._id);

  useEffect(() => {
    const favoritesFromLocalStorage = getFavoritesFromLocalStorage();
    dispatch(setFavorites(favoritesFromLocalStorage));
  }, []);

  const toggleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product));

      // Remove the product from the localStorage
      removeFavoriteFromLocalStorage(product._id);

      toast.success("Removed from the favorites");
    } else {
      dispatch(addToFavorites(product));

      // Add the product to the localStorage
      addFavoriteToLocalStorage(product);

      toast.success("Added to the favorites");
    }
  };

  return (
    <div
      onClick={toggleFavorites}
      className="absolute top-2 right-5 cursor-pointer"
    >
      {isFavorite ? (
        <FaHeart className="text-pink-500" />
      ) : (
        <FaRegHeart className="text-white" />
      )}
    </div>
  );
};

export default HeartIcon;
