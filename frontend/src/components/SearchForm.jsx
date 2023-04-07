import { useEffect, useState } from "react";
// Import Icons.
import { FiSearch } from "react-icons/fi";
// useNavigate Hook.
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  const handlerSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector("input").value = "";
      setSearchTerm("");
    } else {
      // If input is empty set animation to true.
      setIsAnimating(true);
    }
  };

  return (
    <form
      onSubmit={handlerSubmit}
      onChange={handlerSearchInput}
      className={`${
        isAnimating ? "animate-shake" : "animate-none"
      } w-full relative`}
    >
      <input className="input" type="text" placeholder="Search...." />
      <button className="btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
