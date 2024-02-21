import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);
  console.log(favorites);

  return (
    <div className="ml-[10rem]">
      <h1 className="text-lg font-bold ml-[3rem] mt-[3rem]">
        Favorite Products
      </h1>

      <div className="flex flex-wrap">
        {favorites.length ? (
          favorites.map(product => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <h3 className="text-lg font-bold ml-[3rem] mt-[3rem]">
            Your wish list is empty
          </h3>
        )}
      </div>
    </div>
  );
};

export default Favorites;
