import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css/bundle";

import data from "../../data.json";

const MainSlider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="MainSlider"
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, i) => {
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
