/*import { CCarousel, CCarouselItem } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./SliderElements.css"; */

import ProductCard from "../Styles/ProductCard-UI";
import CardOne from "../Styles/Glassmorphin/card/One";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      centerMode={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <ProductCard />
      <CardOne />
      <div>Item 3</div>
    </Carousel>
  );
  /* return (
    <CCarousel controls indicators className="carousel">
      <CCarouselItem>
        <ProductCard className="d-block w-100" />
      </CCarouselItem>
      <CCarouselItem>
        <ProductCard className="d-block w-100" />
      </CCarouselItem>
    </CCarousel>
  );*/
};

export default Slider;
