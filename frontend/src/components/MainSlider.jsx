// Import Swiper components.
import { Swiper, SwiperSlide } from "swiper/react";
// Import swiper styles.
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import required modules.
import { Pagination } from "swiper";
// Import Image.
import tablet from "../image/tablet.png";
// Import Slider css.
import "../slider.css";

// Data.
const slideData = [
  {
    img: tablet,
    pretitle: "Special offer",
    titlePart1: "Save 25%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: tablet,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: tablet,
    pretitle: "Special offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
];

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row md:p-[40px] xl:mt-11 p-[20px]">
              {/* Text */}
              <div className="uppercase w-full lg:flex-1">
                <div className="text-center lg:text-left">{slide.pretitle}</div>
                <div className="text-xl md:text-[46px] font-semibold text-center lg:text-left mb-8 lg:mb-2">
                  {slide.titlePart1} <br />
                  {slide.titlePart2} <br />
                  {slide.titlePart3}
                </div>
                <button className="btn btn-accent mx-auto lg:mx-0">Shop Now</button>
              </div>
              {/* Image */}
              <div className="flex-1">
                <img
                  className="xl:absolute xl:max-w-[340px] xl:right-16 xl:-mt-20"
                  src={slide.img}
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default MainSlider;
