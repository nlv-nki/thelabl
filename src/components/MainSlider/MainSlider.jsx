import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
//import "swiper/scss/bundle";
import "swiper/scss";
import "swiper/scss/navigation";
// Import data
import data from "./../../data/data.json";

const MainSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="MainSlider"
      spaceBetween={50}
      loop={true}
      slidesPerView={1}

      // navigation={{
      //   prevEl: ".swiper-button-prev",
      //   nextEl: ".swiper-button-next",
      // }}
    >
      {data.MainSlider.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={item.imageUrl} alt={item.title} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainSlider;
