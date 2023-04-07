import { useEffect, useState } from "react";
// useParams hook.
import { useParams } from "react-router-dom";
// useFetch hook.
import useFetch from "../hooks/useFetch";
// Import Components.
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Products = () => {
  const { id } = useParams();
  // Get ptoducts by category id.
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );

  const [title, setTitle] = useState("");

  // Set the title when the data is fetched.
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  });

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[60px]">
          <CategoryNav />
          <main>
            {/* Title */}
            <div className="uppercase py-3 text-xl text-center lg:text-left">{title}</div>
            {/* Product Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product, index) => (
                <Product key={index} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
