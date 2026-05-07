import { ReactNode } from "react";
import Slider, { CustomArrowProps } from "react-slick";
import tw from "tailwind-styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const NextArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => {
  return (
    <div {...props}>
      <FaAngleRight
        className="NextArrow dark:fill-white"
        size="30px"
        color="black"
      />
    </div>
  );
};

const PrevArrow = ({
  currentSlide,
  slideCount,
  ...props
}: CustomArrowProps) => {
  return (
    <div {...props}>
      <FaAngleLeft
        className="PrevArrow dark:fill-white ml-[-10px]"
        size="30px"
        color="black"
        style={{ marginRight: "30px" }}
      />
    </div>
  );
};

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 425,
        settings: {
          arrows: false,
        },
      },
    ],
    appendDots: (dots: ReactNode) => (
      <div
        style={{
          width: "100%",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };

  return (
    <SliderWrapper className="SliderContainer">
      <Slider
        {...settings}
        className="
          Slider
          mx-auto
          mb-5
          h-ImgBoxH
          w-fit
          items-center
          sm:h-[100px]
          sm:w-full
          md:h-auto
          md:w-full
          lg:h-[200px]
          lg:w-[250px]
          lgtoxl:w-10/12
          mtoxl:mx-4
        "
      >
        {children}
      </Slider>
    </SliderWrapper>
  );
};

export default Carousel;

const SliderWrapper = tw.div`
  mx-6 my-3 flex justify-center
  sm:mx-0 w-full
  lgtoxl:w-[55%]
`;