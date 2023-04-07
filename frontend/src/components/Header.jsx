import { useContext, useState } from "react";
// Import Logo.
import logo from "../image/logo.png";
// Import Icons.
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
// Import Link.
import { Link } from "react-router-dom";
// Import Components.
import SearchForm from "./SearchForm";
import CategoryNavMobile from "./CategoryNavMobile";
import Cart from "./Cart";
// Cart Context.
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className="bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 lg:items-center justify-between mb-4 xlg:mb-0">
          {/* Menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer"
          >
            <FiMenu />
          </div>
          {/* Category navigation mobile. */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* Logo */}
          <Link to={"/"}>
            <img className="max-w-[50px] rounded-lg" src={logo} alt="logo" />
          </Link>
          {/* Search Form Desktop */}
          <div className="hidden w-full xl:flex xl:max-w-[734px]">
            <SearchForm />
          </div>
          {/* Phone and Cart */}
          <div className="flex items-center gap-[10px]">
            {/* Cart */}
            <div
              className={`
        ${isOpen ? "right-0" : "-right-full"}
        bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
          {/* Search Form Mobile */}
          <div className="xl:hidden w-full pt-10">
            <SearchForm />
          </div>
          {/* Cart Icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer"
          >
            <SlBag className="text-2xl" />
            {/* Amount */}
            <div className="bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
              {itemsAmount}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
