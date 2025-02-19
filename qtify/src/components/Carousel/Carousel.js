import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import LeftNavigationButton from "./LeftNavigationButton";
import RightNavigationButton from "./RightNavigationButton";

const Carousel = ({ items, renderItem }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      navigation={{
        prevEl: ".left",
        nextEl: ".right",
      }}
      modules={[Navigation]}
    >
      <LeftNavigationButton />
      <RightNavigationButton />
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;