// Import Link.
import { Link } from "react-router-dom";

const Product = ({ product }) => {

  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {/* New Badge */}
        {product.attributes.isNew ? (
          <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            New
          </div>
        ) : (
          ""
        )}
        {/* Image of the product */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <img
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt="product"
            className="w-[180px] h-[180px] rounded-lg group-hover:scale-90 transition-all"
          />
        </div>
        {/* Text */}
        <div className="px-6 pb-8 flex flex-col">
          {/* Category Title */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* Title */}
          <div className="text-[15px] mb-4 lg:mb-9">{product.attributes.title}</div>
          {/* Price */}
          <div className="text-lg text-accent">{product.attributes.price} US</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
