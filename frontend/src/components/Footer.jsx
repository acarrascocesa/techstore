import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 mb-6 font-semibold">Get the newest products</h2>
        </div>
        {/* Form */}
        <form className="max-w-full  flex flex-col md:flex-row gap-5 my-14">
          <input type="text" placeholder="Your email here" className="input" />
          <button className="btn btn-accent min-w-[150px]">Join</button>
        </form>
        {/* Links */}
        <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9">
          <a href="/" className="hover: text-white transition-all">
            Returns Policy
          </a>
          <a href="/" className="hover: text-white transition-all">
            Track Your Order
          </a>
          <a href="/" className="hover: text-white transition-all">
            Shipping & Delivery
          </a>
        </div>
        {/* Social Media */}
        <div className="flex gap-x-6 max-w-max mx-auto text-3xl mb-16">
          <a
            className="hover:text-white transition-all"
            href="https://www.linkedin.com/in/angel-carrasco24/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-white transition-all"
            href="https://github.com/acarrascocesa/"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-white transition-all"
            href="https://www.instagram.com/josecesa25/"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      {/* Copyrights */}
      <div className="py-10 border-t-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Copyright &copy; AC Tech Store 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
