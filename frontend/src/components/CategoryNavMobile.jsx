// Import Icons.
import { FiX } from "react-icons/fi";
// Import Link.
import { Link } from "react-router-dom";
// useFetch Hook.
import useFetch from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  // Get categories.
  const {data} = useFetch("/categories");

  return (
    <div className="w-full h-full bg-primary p-8">
      {/* Close Icon */}
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col uppercase gap-y-8 font-medium">
        {
          data?.map((category, index) => (
            <Link to={`products/${category.id}`} key={index}>{category.attributes.title}</Link>
          ))
        }
      </div>
    </div>
  );
};

export default CategoryNavMobile;
