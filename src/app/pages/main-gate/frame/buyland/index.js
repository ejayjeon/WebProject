import { React, useEffect } from "react";
import Style from "./style.module.css";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination, Navigation]);

const BuyLand = ({ language }) => {
  const history = useHistory();
  return (
    <>
      {/* <div 
            className={Style['buyland-btn']}
            onClick={
                () => {
                    history.push('/land-state')
                }
            }
            >
                land-state버튼
            </div>  */}

      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        resizeObserver={true}
        pagination={{ clickable: true }}
        className={Style["mySwiper"]}
      >
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["buyland-box"]}>
            <div className={Style["img1"]}></div>
            <div className={Style["buyland-content-text"]}>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-01"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-02"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-03"],
                  }}
                ></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["buyland-box"]}>
            <div className={Style["img2"]}></div>
            <div className={Style["buyland-content-text"]}>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-04"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-05"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-06"],
                  }}
                ></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["buyland-box"]}>
            <div className={Style["img3"]}></div>
            <div className={Style["buyland-content-text"]}>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-07"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-08"],
                  }}
                ></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["buyland-box"]}>
            <div className={Style["img4"]}></div>
            <div className={Style["buyland-content-text"]}>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-09"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-10"],
                  }}
                ></p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["buyland-box"]}>
            <div className={Style["img5"]}></div>
            <div className={Style["buyland-content-text"]}>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-11"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-12"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-13"],
                  }}
                ></p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: language["buyland-mean-13-2"],
                  }}
                ></p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 6페이지 */}
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["buyland-box"]}>
            <div className={Style["img6"]}></div>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              slidesPerView={1}
              spaceBetween={30}
              observer={true}
              observeParents={true}
              className={`${Style.mySwiper} ${Style.swiperBuyland}`}
            >
              <SwiperSlide
                className={`${Style.swiper_slide} ${Style.swiperland}`}
              >
                <div className={Style["buyland-swiper-text"]}>
                  <div className={Style["buyland-swiper-text-first"]}>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: language["buyland-mean-14"],
                      }}
                    ></p>

                    <div className={Style["grap1"]} />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className={Style["swiper-slide"]}>
                <div
                  className={`${Style.buylandSwiperText} ${Style.buylandHight}`}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: language["buyland-mean-15"],
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: language["buyland-mean-16"],
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: language["buyland-mean-17"],
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: language["buyland-mean-18"],
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: language["buyland-mean-19"],
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: language["buyland-mean-20"],
                    }}
                  ></p>
                </div>
              </SwiperSlide>

              <SwiperSlide className={Style["swiper-slide"]}>
                <div
                  className={`${Style.buylandSwiperText} ${Style.buylandHight}`}
                >
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: language["buyland-mean-21"],
                      }}
                    ></p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: language["buyland-mean-22"],
                      }}
                    ></p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </SwiperSlide>

        {/* 7페이지 */}
        <SwiperSlide className={Style["swiper-slide"]}>
          <div className={Style["buyland-box"]}>
            <div className={Style["img7"]}></div>
            <Swiper
              cssMode={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              slidesPerView={1}
              spaceBetween={30}
              observer={true}
              observeParents={true}
              className={`${Style.mySwiper} ${Style.swiperBuyland}`}
            >
              <SwiperSlide className={Style["swiper-slide"]}>
                <div className={Style["buyland-swiper-text"]}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: language["buyland-mean-27"],
                    }}
                  ></p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: language["buyland-mean-28"],
                    }}
                  ></p>
                  <div className={Style["grap2"]}></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BuyLand;
