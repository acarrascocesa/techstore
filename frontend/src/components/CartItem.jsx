import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "./Qty";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className="flex gap-x-8">
      <Link to={`product/${item.id}`} className="w-[70px] h-[70px]">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          alt="item"
          className="rounded-xl"
        />
      </Link>
      <div className="flex-1">
        {/* Title and Remove Icon */}
        <div className="flex gap-x-4 mb-3">
          <Link to={`product/${item.id}`}>{item.attributes.title}</Link>
          <div className="cursor-pointer text-[24px] hover:text-accent-hover transition-all">
            <IoClose onClick={() => removeFromCart(item.id)} />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          {/* Quantity*/}
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className="text-accent text-xl">
            $ {item.attributes.price * item.amount}
          </div>
        </div>
        {/* Price */}
        <div>
          <span className="text-accent">${item.attributes.price} unit</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
