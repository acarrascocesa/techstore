// useFetch hook.
import ProductSlider from "../components/ProductSlider";
import useFetch from "../hooks/useFetch";

const LatestProducts = () => {
    // Get the newest produtcs
    const { data } = useFetch("/products?populate=*&filters[isNew]=true");
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Newest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
