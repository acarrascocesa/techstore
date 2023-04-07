// Import Icons.
import { IoClose, IoArrowForward, IoCartOutline } from "react-icons/io5";
// Import CartContext.
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
// Import Components.
import CartItem from "./CartItem";
// Stripe.
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51MuNU3HWiAWNrHPC60TjqmD4u7eApVF5nsCATa9PYz8qapu9KGXopfEUJOAyKVOBfvqRXNSodAgLoUJyAJM8XQI500ZRZG2ag7"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        {/* Close Icon */}
        <div
          onClick={() => setIsOpen(false)}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
      {/* Subtotal and Total*/}
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          {/* Subtotal */}
          <div className="flex justify-between text-lg">
            <div>Subtotal:</div>
            <div>$ {total}</div>
          </div>
          {/* Total */}
          <div className="flex justify-between text-2xl">
            <div>Total:</div>
            <div>$ {total} US</div>
          </div>
        </div>
      )}
      {/* Buttons */}
      <div>
        {
          <div>
            {cart.length >= 1 ? (
              <div className="flex justify-between gap-x-4">
                <button
                  onClick={clearCart}
                  className="btn btn-accent bg-red-600 text-white"
                >
                  Clear cart
                </button>
                <button onClick={handlePayment} className="btn btn-accent hover:bg-accent-hover flex-1 px-2 gap-x-2">
                  Checkout
                  <IoArrowForward className="text-2xl" />
                </button>
              </div>
            ) : (
              <div className="uppercase h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white">
                <div className="text-2xl">Your cart is empty</div>
                <div className="text-6xl">
                  <IoCartOutline />
                </div>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default Cart;
