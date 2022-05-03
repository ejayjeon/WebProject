import { React } from "react";
import Style from "./style.module.css";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Mousewheel, Pagination, Navigation]);

// cityzenship 으로 바뀜
const Home = ({ language }) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        resizeObserver={true}
        mousewheel={true}
        pagination={{ clickable: true }}
        className={Style["mySwiper"]}
      >
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["cityzenship-swiper-text"]}>
            <div className={Style["grap1"]}></div>
            <div className={Style["cityzenship-content-text"]}>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-01"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-02"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-02-2"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-03"],}}></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["cityzenship-swiper-text"]}>
            <div className={Style["img1"]}></div>
            <div className={Style["cityzenship-content-text"]}>
              <p className={Style["title"]} dangerouslySetInnerHTML={{__html: language["grade-01"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-04"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-05"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-05-2"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-06"],}}></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["cityzenship-swiper-text"]}>
            <div className={Style["img2"]}></div>
            <div className={Style["cityzenship-content-text"]}>
              <p className={Style["title"]} dangerouslySetInnerHTML={{__html: language["grade-02"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-07"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-07-1"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-07-2"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-08"],}}></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["cityzenship-swiper-text"]}>
            <div className={Style["img3"]}></div>
            <div className={Style["cityzenship-content-text"]}>
              <p className={Style["title"]} dangerouslySetInnerHTML={{__html: language["grade-03"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-09"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-10"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-11"],}}></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["cityzenship-swiper-text"]}>
            <div className={Style["img4"]}></div>
            <div className={Style["cityzenship-content-text"]}>
              <p className={Style["title"]} dangerouslySetInnerHTML={{__html: language["grade-04"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-12"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-13"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-13-2"],}}></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["cityzenship-swiper-text"]}>
            <div className={Style["img5"]}></div>
            <div className={Style["cityzenship-content-text"]}>
              <p className={Style["title"]} dangerouslySetInnerHTML={{__html: language["grade-05"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-14"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-15"],}}></p>
              <p dangerouslySetInnerHTML={{__html: language["citizenship-mean-16"],}}></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["cityzenship-swiper-text"]}>
            <div className={Style["grap2"]}></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
