import { useSelector } from "react-redux";

const CartCount = () => {
  const products = useSelector(state => state.cart);

  const productsLength = products.cartItems.length;

  return (
    <div className="absolute left-2 top-8">
      {productsLength > 0 && (
        <span className="px-2 py-0 text-sm text-white bg-pink-500 rounded-full">
          {products.cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}
        </span>
      )}
    </div>
  );
};

export default CartCount;
