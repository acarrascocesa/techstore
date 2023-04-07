//  useParams Hook.
import { useParams } from "react-router-dom";
// useFetch Hook.
import useFetch from "../hooks/useFetch";
// Import Components.
import RelatedProducts from "../components/RelatedProducts";
// Import CartContext.
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductDetails = () => {
  const {addToCart} = useContext(CartContext)

  const { id } = useParams();
  // Get product data by id.
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);
  if (!data) {
    return <div className="container mx-auto">Loading...</div>;
  }

  // Category Title.
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;
  
  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* Text */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            <img
              src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`}
              alt="product"
              className="w-full max-w-[65%] rounded-lg"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/*Category Title */}
            <div className="uppercase text-accent text-lg font-bold mb-2">
              {data[0].attributes.categories.data[0].attributes.title}
            </div>
            {/* Title */}
            <h2 className="h2 mb-4">{data[0].attributes.title}</h2>
            {/* Description */}
            <p className="mb-12">{data[0].attributes.description}</p>
            {/* Price and BTN */}
            <div className="flex items-center gap-x-8">
              {/* Price */}
              <div className="text-3xl text-accent">
                ${data[0].attributes.price} US
              </div>
              <button onClick={() => addToCart(data, id)} className="btn btn-accent">Add to cart</button>
            </div>
          </div>
        </div>
        {/* Related Products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
