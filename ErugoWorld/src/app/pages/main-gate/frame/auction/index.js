import { React, useEffect, useRef } from "react";
import Style from "./style.module.css";
import { useHistory } from "react-router-dom";

// swiper bundle styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Mousewheel, Pagination, Navigation]);

const Auction = ({ language }) => {
  const history = useHistory();

  return (
    <>
      <div
        className={Style["pointer"]}
        onClick={() => {
          history.push("/auction");
        }}
      >
        {/* 맵분양이동 */}
      </div>
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
          <h2
            className={Style["auction-title"]}
            dangerouslySetInnerHTML={{ __html: language["auction-mean-01"] }}
          ></h2>
          <div className={Style["auctionBox"]}>
            <div className={Style["img1"]}></div>
            <div className={Style["auction-content-text"]}>
              <h3
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-02"],
                }}
              ></h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-03"],
                }}
              ></p>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-03_1"],
                }}
              ></p>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-03_2"],
                }}
              ></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <h2
            className={Style["auction-title"]}
            dangerouslySetInnerHTML={{ __html: language["auction-mean-01"] }}
          ></h2>
          <div className={Style["auctionBox"]}>
            <div className={Style["img2"]}></div>
            <div className={Style["auction-content-text"]}>
              <h3
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-04"],
                }}
              ></h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-05"],
                }}
              ></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <h2
            className={Style["auction-title"]}
            dangerouslySetInnerHTML={{ __html: language["auction-mean-01"] }}
          ></h2>
          <div className={Style["auctionBox"]}>
            <div className={Style["img3"]}></div>
            <div className={Style["auction-content-text"]}>
              <h3>{language["auction-mean-06"]}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-07"],
                }}
              ></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <h2 className={Style["auction-title"]}>
            {language["auction-mean-01"]}
          </h2>
          <div className={`${Style.auctionBox} ${Style.auctionImgbox}`}>
            <div className={Style["auction-img"]}>
              <div className={Style["img5"]}></div>
              <div className={Style["auction-img-text"]}>
                {language["auction-mean-08"]}
              </div>
            </div>
            <div className={Style["auction-img"]}>
              <div className={Style["img6"]}></div>
              <div className={Style["auction-img-text"]}>
                {language["auction-mean-09"]}
              </div>
            </div>
            <div className={Style["auction-img"]}>
              <div className={Style["img8"]}></div>
              <div className={Style["auction-img-text"]}>
                {language["auction-mean-11"]}
              </div>
            </div>
            <div className={Style["auction-img"]}>
              <div className={Style["img7"]}></div>
              <div className={Style["auction-img-text"]}>
                {language["auction-mean-10"]}
              </div>
            </div>
            <div className={Style["auction-img"]}>
              <div className={Style["img9-2"]}></div>
              <div className={Style["auction-img-text"]}>
                {language["auction-mean-12-2"]}
              </div>
            </div>
            <div className={Style["auction-img"]}>
              <div className={Style["img9"]}></div>
              <div className={Style["auction-img-text"]}>
                {language["auction-mean-12"]}
              </div>
            </div>
            <div className={Style["map-content"]}>
              {language["auction-mean-13"]}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={Style["swiper-slide"]}>
          <h2 className={Style["auction-title"]}>
            {language["auction-mean-01"]}
          </h2>
          <div className={Style["auctionBox"]}>
            <div className={Style["img4"]}></div>
            <div className={Style["auction-content-text"]}>
              <h3>{language["auction-mean-14"]}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-15"],
                }}
              ></p>

              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-16"],
                }}
              ></p>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-17"],
                }}
              ></p>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-18"],
                }}
              ></p>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-19"],
                }}
              ></p>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-20"],
                }}
              ></p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className={Style["swiper-slide"]}>
          <h2 className={Style["auction-title"]}>
            {language["auction-mean-01"]}
          </h2>
          <div className={Style["auctionBox"]}>
            <div className={Style["img10"]}></div>
            <div className={Style["auction-content-text"]}>
              <h3>{language["auction-mean-21"]}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-22"],
                }}
              ></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Style["swiper-slide"]}>
          <h2 className={Style["auction-title"]}>
            {language["auction-mean-01"]}
          </h2>
          <div className={Style["auctionBox"]}>
            <div className={Style["auction-howto-content"]}>
              <h4>{language["auction-mean-23"]}</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: language["auction-mean-24"],
                }}
              ></p>

              <div>
                <h4>{language["auction-mean-25"]}</h4>
                <ul>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: language["auction-mean-26"],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: language["auction-mean-27"],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: language["auction-mean-28"],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: language["auction-mean-29"],
                    }}
                  ></li>
                  <li
                    dangerouslySetInnerHTML={{
                      __html: language["auction-mean-30"],
                    }}
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Auction;
