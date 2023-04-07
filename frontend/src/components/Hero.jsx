// Import Components.
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";

// Import Images.
import PromoImg1 from "../image/promo_img1.png";
import PromoImg2 from "../image/promo_img2.png";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* Sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* Main Slider */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* Promo Images */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {/* Promo Image 1 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* Text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 20% all Consoles
                </div>
                <a href="#" className="uppercase text-accent" >Shop Now</a>
              </div>
              {/* Image */}
              <img
                className="absolute  z-20 -top-2 xl:top-6 xl:max-w-[350px] -right-28 xl:-right-20 "
                src={PromoImg2}
                alt=""
              />
            </div>

            {/* Promo Image 2 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* Text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 30% all Smartwatches
                </div>
                <a href="#" className="uppercase text-accent" >Shop Now</a>
              </div>
              {/* Image */}
              <img
                className="absolute xl:max-w-[150px] max-w-[250px] z-20 -top-4 xl:top-10 -right-1"
                src={PromoImg1}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
