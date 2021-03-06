import React from "react";
import classNames from "classnames";
import Style from "./home.module.css";
// import { useHistory } from "react-router";
//import 'react-responsive-carousel/lib/styles/carousel.css'
//import { Carousel } from 'react-responsive-carousel'
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const HomePage = ({ menubar, footer }) => {
  // const history = useHistory()
  const images = [1, 2].map((number) => ({
    src: `/images/main_0${number}.jpeg`,
  }));

  return (
    <div className={classNames(Style["background"])}>
      {menubar}
      <div className={classNames(Style["main-image"])}>
        {/*
                <Image>
                    <div className={classNames(Style['image-inner-box'])}>
                    <MButton text={'Get Started'} onClick={() => {history.push('/map')}} />
                    </div>
                </Image>
                
                <video autoPlay muted loop>
                    <source src="/video/main.mp4" type="video/mp4"></source>
                </video>
                */}
        {/*
                <Carousel showArrows={true} onChange={() => { }} onClickItem={() => { }} onClickThumb={() => { }} width={'100%'} autoPlay={true} interval={2000} infiniteLoop={true}>
                    <div>
                        <img src="/images/main_01.png" />
                    </div>
                    <div>
                        <img src="/images/main_02.png" />
                    </div>
                    <div>
                        <img src="/images/main_03.png" />
                    </div>
                    <div>
                        <img src="/images/main_04.png" />
                    </div>
                    <div>
                        <img src="/images/main_05.png" />
                    </div>
                    <div>
                        <img src="/images/main_06.png" />
                    </div>
                </Carousel>
                */}
        {/*
                <div className={classNames(Style['image-inner-box'])}>
                    <MButton text={'GET STARTED'} onClick={() => { history.push('/map') }} />
                </div>
                */}
        <Carousel
          images={images}
          style={{ height: 512, width: "100%" }}
          isLoop={true}
          isAutoPlaying={true}
          hasThumbnails={false}
          canAutoPlay={true}
          autoPlayInterval={3000}
          pauseIcon={<div></div>}
          maxIcon={<div></div>}
          hasIndexBoard={false}
          hasSizeButton={false}
          rightIcon={
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(255,255,255,1)",
                borderRadius: "25px",
                marginRight: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <AiFillCaretRight fontSize={"40px"} />
            </div>
          }
          leftIcon={
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(255,255,255,1)",
                borderRadius: "25px",
                marginLeft: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "10px",
              }}
            >
              <AiFillCaretLeft fontSize={"40px"} />
            </div>
          }
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "1244px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                font: "Noto Sans KR",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              ?????? ??????????????? ?????? ????????? ??????
            </div>
          </div>
          <div style={{ width: "100%", height: "40px" }}></div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "3px",
            }}
          >
            <div
              style={{
                font: "Noto Sans KR",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ???????????? ????????? '????????? ??????'??? ??????????????? ?????? ????????? ????????????
              ?????? ?????? ???????????? ????????????.
            </div>
            <div
              style={{
                font: "Noto Sans KR",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ????????? ??????, ?????? ?????????, SNS?????? ????????? ????????? ???????????????.
            </div>
            <div
              style={{
                font: "Noto Sans KR",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              ????????? ?????? ??? ????????? ?????? ?????? ??? ?????? ?????? '????????? ??????'???
              ???????????????.
            </div>
          </div>
          <div style={{ width: "100%", height: "80px" }}></div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div style={{ width: "450px", height: "450px" }}>
              <img
                src="/images/main_desc_02.jpeg"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div
              style={{
                width: "calc(100% - 450px)",
                height: "450px",
                paddingLeft: "54px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                ????????? ????????? ???????????? ??????????????? 4?????? ????????? ????????? ????????????.
              </div>
              <div
                style={{
                  width: "100%",
                  height: "250px",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "800px",
                    height: "200px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "25%",
                      height: "100%",
                      border: "1px solid #707070",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "25%",
                        fontFamily: "arial",
                        fontSize: "48px",
                        fontWeight: "bold",
                      }}
                    >
                      1
                    </div>
                    <div style={{ width: "100%", height: "15px" }}></div>
                    <div style={{ width: "100%" }}>
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "27px",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {`????????? ??????
????????? ??? ?????? ?????? 
??????????????? ?????????`}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "25%",
                      height: "100%",
                      border: "1px solid #707070",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "25%",
                        fontFamily: "arial",
                        fontSize: "48px",
                        fontWeight: "bold",
                      }}
                    >
                      2
                    </div>
                    <div style={{ width: "100%", height: "15px" }}></div>
                    <div style={{ width: "100%" }}>
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "27px",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {`??????????????? 
???????????? 
???????????? ?????? 
???????????? ?????????`}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "25%",
                      height: "100%",
                      border: "1px solid #707070",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "25%",
                        fontFamily: "arial",
                        fontSize: "48px",
                        fontWeight: "bold",
                      }}
                    >
                      3
                    </div>
                    <div style={{ width: "100%", height: "15px" }}></div>
                    <div style={{ width: "100%" }}>
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "27px",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {`?????? ????????? 
???????????? ????????? 
????????????.`}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "25%",
                      height: "100%",
                      border: "1px solid #707070",
                      padding: "15px",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "25%",
                        fontFamily: "arial",
                        fontSize: "48px",
                        fontWeight: "bold",
                      }}
                    >
                      4
                    </div>
                    <div style={{ width: "100%", height: "15px" }}></div>
                    <div style={{ width: "100%" }}>
                      <p
                        style={{
                          fontSize: "16px",
                          lineHeight: "27px",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {`???????????? ???????????? 
?????? ???????????? 
?????? ???????????? 
????????? ??????.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <p
                  style={{ fontSize: "16px", whiteSpace: "pre-wrap" }}
                >{`??????????????? ???????????? ??????????????? ????????????, ????????? ??????????????? '??????????????? ?????? ????????? ??????'???
?????? ?????????????????? ???????????? ?????? ???????????? ?????? ???????????? ????????? ???????????????.`}</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: "80px" }}></div>
          <div style={{ width: "100%" }}>
            <video
              src="/video/result.mp4"
              style={{ width: "100%" }}
              controls
              loop
              muted
              autoPlay
            />
          </div>
          <div style={{ width: "100%", height: "80px" }}></div>
          <div style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                height: "610px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "540px",
                  height: "610px",
                  backgroundColor: "#000000",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "70px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#ffffff",
                  }}
                >
                  {"ERUGO WORLD COIN && RUGO TOKEN"}
                </div>
                <div style={{ width: "500px", height: "500px" }}>
                  <img
                    src="/images/main_desc_01.jpeg"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: "40px" }}></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "916px",
                  height: "250px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "400px",
                    height: "100%",
                    border: "1px solid #707070",
                  }}
                >
                  <div
                    style={{
                      fontSize: "100px",
                      color: "rgba(219,219,219,0.37)",
                      width: "400px",
                      height: "150px",
                      textAlign: "center",
                    }}
                  >
                    EWC
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        position: "relative",
                        top: "-90px",
                      }}
                    >
                      ?????????????????????(EWC)
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontSize: "16px" }}>
                      ???????????? ??? ?????????, ??????, ??????, ?????????
                    </div>
                    <div style={{ fontSize: "16px" }}>
                      ?????? ????????? ??? ?????? ?????? ???????????????.
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "400px",
                    height: "100%",
                    border: "1px solid #707070",
                  }}
                >
                  <div
                    style={{
                      fontSize: "100px",
                      color: "rgba(219,219,219,0.37)",
                      width: "400px",
                      height: "150px",
                      textAlign: "center",
                    }}
                  >
                    RUGO
                    <div
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        position: "relative",
                        top: "-90px",
                      }}
                    >
                      ??????(RUGO)
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontSize: "16px" }}>
                      ?????? ??????????????? ????????? ???????????? ????????????
                    </div>
                    <div style={{ fontSize: "16px" }}>
                      EWC??? ???????????? ????????? ???????????????.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: "40px" }}></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "916px",
                  height: "120px",
                  border: "1px solid #707070",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "16px" }}>
                  ???????????? ????????? ????????? ????????? ????????? ????????? ????????? ???????????? ???
                  ????????? ???????????? EWC???
                </div>
                <div style={{ fontSize: "16px" }}>
                  ??????????????? ?????? ????????? ?????? ????????? ??? ?????????, EWC???
                  ?????????????????? ???????????? ???????????????.
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: "40px" }}></div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "916px",
                  height: "120px",
                  border: "1px solid #707070",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ fontSize: "16px" }}>
                  ??????????????? ????????? ?????? ????????? ?????? ?????????, ?????????, ?????? ??????
                  ?????? ?????? ????????? ????????????
                </div>
                <div style={{ fontSize: "16px" }}>
                  ?????????????????? ?????? ???????????? ??????????????? ?????????.
                </div>
              </div>
            </div>
            <div style={{ width: "100%", height: "40px" }}></div>
          </div>
        </div>
      </div>
      {footer}
    </div>
  );
};

export default HomePage;
