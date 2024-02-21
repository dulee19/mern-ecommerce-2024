import ProductCarousel from "../pages/Products/ProductCarousel";
import SmallProduct from "../pages/Products/SmallProduct";
import { useGetTopProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";

const Header = () => {
  const { data: products, isLoading, isError } = useGetTopProductsQuery();

  if (isLoading) return <Loader />;
  if (isError) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <>
      <div className="flex justify-around">
        <div className="xl:block lg:hidden md:hidden sm:hidden">
          <div className="grid grid-cols-2">
            {products.map(product => (
              <div key={product._id}>
                <SmallProduct product={product} />
              </div>
            ))}
          </div>
        </div>

        <ProductCarousel />
      </div>
    </>
  );
};

export default Header;
