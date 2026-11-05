import style from './SlideShow.module.css'
import MovieCard from "../MovieCard/MovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Swiper: the main slider container.
    // SwiperSlide: an individual slide.
    // Navigation: adds previous and next arrow controls.
    // swiper/css: loads the base slider styles.
    // swiper/css/navigation: loads navigation styles.

const SlideShow = ({ title, movies }) => {
  return (
    <div>
      <h2 className={style.title}>{title}</h2>
      <div className={style.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={4}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SlideShow;
