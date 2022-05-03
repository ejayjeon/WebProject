import React, { useEffect, useRef, useState } from "react";
import Style from "./style.module.css";
import Bounce from "./bounce.module.css";
import FrameCSS from "./frame.module.scss";
import About from "./frame/about";
import Home from "./frame/home";
import Auction from "./frame/auction";
import BuyLand from "./frame/buyland";
import LogIn from "./frame/login";
import MyPage from "./frame/mypage";
import SignUp from "./frame/signup";
import Market from "./frame/market";
import { useHistory } from "react-router-dom";
import { readInfo } from "../../api";
import Message from "./frame/message";
import Information from "./frame/information";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
const Popup = ({ setPopup, popup }) => {
  const fontSize = 0.8;
  return (
    <>
      {popup.show ? (
        <div
          style={{
            width: `${popup.width}vw`,
            height: `${popup.height + fontSize * 4}vw`,
            top: `${popup.topPosition}vw`,
            left: `${popup.leftPosition}vw`,
            position: "absolute",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "100%",
              height: `${popup.height}vw`,
              backgroundImage: `url(${window.hostAPI}/popup/download-image)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: `${fontSize * 4}vw`,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              fontSize: `${fontSize}vw`,
              paddingRight: "10px",
              borderTop: "1px solid gray",
              gap: "10px",
            }}
          >
            <input
              className="pointer"
              style={{
                width: `${fontSize * 1.5}vw`,
                height: `${fontSize * 1.5}vw`,
              }}
              type={"checkbox"}
              onChange={() => {
                setTimeout(() => {
                  localStorage.setItem(
                    "popup-close-time",
                    new Date().getTime()
                  );
                  setPopup({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    show: false,
                  });
                }, 200);
              }}
            />
            오늘하루 그만 보기
            <button
              className="pointer"
              style={{ fontSize: `${fontSize}vw`, padding: "0 4px" }}
              onClick={() => {
                setPopup({
                  width: 0,
                  height: 0,
                  top: 0,
                  left: 0,
                  show: false,
                });
              }}
            >
              종료
            </button>
          </div>
        </div>
      ) : undefined}
    </>
  );
};
const animationOrderList = [
  "frame-1st",
  "frame-2nd",
  "frame-3rd",
  "frame-4th",
  "frame-5th",
  "frame-6th",
  "frame-7th",
  "frame-8th",
];
const stopOrderList = [
  "frame-style-1st-stop",
  "frame-style-2nd-stop",
  "frame-style-3rd-stop",
  "frame-style-4th-stop",
  "frame-style-5th-stop",
  "frame-style-6th-stop",
  "frame-style-7th-stop",
  "frame-style-8th-stop",
];
const TopMenu = ({
  isLogin,
  onClick,
  languageCode,
  setLanguageCode,
  setUserUUID,
  currentFrame,
}) => {
  const history = useHistory();
  const [openImg, setOpenImg] = useState(false);
  const openPopup = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // true : 값만 변경 / !openImg : toggleClass 적용
    setOpenImg(!openImg);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* {checkWidth < 965 ? ( */}
      <div className={Style["largeHeader"]}>
        <div
          className={Style["top-menu-background"]}
          style={{ backgroundImage: "url(/images/frame/top-menu.png)" }}
        >
          <div
            className={Style["logo"]}
            style={{ backgroundImage: "url(/images/frame/logo.png)" }}
            onClick={() => {
              setOpenImg(false);
              history.push("/main-entrance");
            }}
          ></div>
          <div className={Style["top-menu-button-wrapper"]}>
            <div
              style={{
                backgroundImage: "url(/images/frame/top-button/about.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["about-button"]} pointer`}
              onClick={() => {
                setOpenImg(false);
                onClick("about");
              }}
            ></div>
            <div
              style={{
                backgroundImage:
                  "url(/images/frame/top-button/citizenship.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["home-button"]} pointer`}
              onClick={() => {
                setOpenImg(false);
                onClick("home");
              }}
            ></div>
            <div
              style={{
                backgroundImage: "url(/images/frame/top-button/auction.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["auction-button"]} pointer`}
              onClick={() => {
                //history.push("/auction");
                setOpenImg(false);
                onClick("auction");
              }}
            ></div>

            <div
              style={{
                backgroundImage: "url(/images/frame/top-button/buy-land.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["buy-land-button"]} pointer`}
              onClick={() => {
                setOpenImg(openImg);
                onClick("buyland");
              }}
            ></div>

            <div
              style={{
                backgroundImage: "url(/images/frame/top-button/market.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["market-button"]} pointer`}
              onClick={() => {
                setOpenImg(false);
                onClick("market");
              }}
            ></div>
            <div
              style={{
                backgroundImage: "url(/images/frame/top-button/my-page.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["my-page-button"]} pointer`}
              onClick={() => {
                if (!isLogin) {
                  setOpenImg(false);
                  onClick("login");
                  return;
                }
                setOpenImg(false);
                onClick("mypage");
              }}
            ></div>
            <div
              style={{
                backgroundImage: "url(/images/frame/top-button/message.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["message-button"]} pointer`}
              onClick={() => {
                if (!isLogin) {
                  setOpenImg(false);
                  onClick("login");
                  return;
                }
                setOpenImg(false);
                onClick("message");
              }}
            ></div>

            {/* userUUID가 있으면 ? log-in 버튼 : log-out 버튼*/}
            {sessionStorage.getItem("userUUID") ? (
              <div
                style={{
                  backgroundImage: "url(/images/frame/top-button/log-out.png)",
                }}
                className={`${Style["top-menu-button"]} ${Style["log-in-button"]} pointer`}
                onClick={(e) => {
                  // onClick("logout")
                  // setUserUUID(undefined);
                  setOpenImg(false);
                  e.preventDefault();
                  e.stopPropagation();
                  let answer = window.confirm("로그아웃 하시겠습니까?");
                  if (answer) {
                    sessionStorage.removeItem("userUUID");
                    sessionStorage.removeItem("wallet");
                    window.location.reload();
                    alert("로그아웃 되었습니다");
                  } else {
                    return;
                  }
                }}
              ></div>
            ) : (
              <div
                style={{
                  backgroundImage: "url(/images/frame/top-button/log-in.png)",
                }}
                className={`${Style["top-menu-button"]} ${Style["log-in-button"]} pointer`}
                onClick={() => {
                  setOpenImg(false);
                  onClick("login");
                  //history.push("/login");
                  // if (!isLogin) {
                  //   onClick("login");
                  //   return;
                  // }
                  // onClick("message");
                }}
              ></div>
            )}

            {/* Language code가 ? KR이면 KR : ENG  */}
            {languageCode === "ko" ? (
              <div
                style={{
                  color: "transparent",
                  backgroundImage: "url(/images/frame/top-button/kr.png)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={`${Style["lang-button"]} pointer`}
                onClick={() => {
                  if (languageCode === "ko") {
                    setLanguageCode("eng");
                  } else {
                    setLanguageCode("ko");
                  }
                }}
              >
                {languageCode}
              </div>
            ) : (
              <div
                style={{
                  color: "transparent",
                  backgroundImage: "url(/images/frame/top-button/eng.png)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className={`${Style["lang-button"]} pointer`}
                onClick={() => {
                  if (languageCode === "eng") {
                    setLanguageCode("ko");
                  } else {
                    setLanguageCode("eng");
                  }
                }}
              >
                {languageCode}
              </div>
            )}

            {/* 인포메이션 */}
            <div
              style={{
                backgroundImage:
                  "url(/images/frame/top-button/info-button.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["info-button"]} pointer`}
              onClick={openPopup}
            >
              {openImg && (
                <Information openPopup={openPopup} openImg={openImg} />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ) : null} */}
      <Navbar expand={false} bg="light" className={Style["smallHeader"]}>
        <Container fluid className={Style["smallTopBar"]}>
          <Navbar.Brand
            className={Style["SmallLogo"]}
            style={{ backgroundImage: "url(/images/frame/logo2.png)" }}
            onClick={() => {
              setOpenImg(false);
              history.push("/main-entrance");
              window.location.reload();
            }}
          ></Navbar.Brand>
          <Button
            variant="outline-light"
            onClick={handleShow}
            className="me-2"
            size="lg"
          >
            〓
          </Button>
          <Offcanvas
            show={show}
            onHide={handleClose}
            style={{ backgroundColor: "rgba(255,255,255,0.85)", width: "75vw" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                style={{ fontSize: "1.5rem", fontWeight: "bold" }}
              >
                <img
                  src="images/frame/logo2.png"
                  style={{ width: "13%" }}
                ></img>
                ERUGOWORLD
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 pe-3"
                style={{
                  cursor: "pointer",
                  fontSize: "18px",
                  lineHeight: "2",
                }}
              >
                {[
                  { name: "About", frame: "about" },
                  { name: "Citizenship", frame: "home" },
                  { name: "Auction", frame: "auction" },
                  { name: "Buy land", frame: "buyland" },
                  { name: "Market", frame: "market" },
                ].map((menu, i) => (
                  <Nav
                    onClick={() => {
                      setOpenImg(false);
                      onClick(menu.frame);
                      setShow(!show);
                    }}
                  >
                    {menu.name}

                    <NavDropdown.Divider />
                  </Nav>
                ))}
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    lineHeight: "2",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenImg(false);
                    setShow(!show);

                    if (!isLogin) {
                      onClick("login");
                    } else {
                      onClick("message");
                    }
                  }}
                >
                  Message
                  <NavDropdown.Divider />
                </Nav>
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    lineHeight: "2",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenImg(false);
                    setShow(!show);

                    if (!isLogin) {
                      onClick("login");
                    } else {
                      onClick("mypage");
                    }
                  }}
                >
                  MyPage
                  <NavDropdown.Divider />
                </Nav>
                {sessionStorage.getItem("userUUID") ? (
                  <Nav
                    className="justify-content-end flex-grow-1 pe-3"
                    style={{
                      cursor: "pointer",
                      fontSize: "18px",
                      lineHeight: "2",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenImg(false);
                      setShow(!show);
                      let answer = window.confirm("로그아웃 하시겠습니까?");
                      if (answer) {
                        sessionStorage.removeItem("userUUID");
                        sessionStorage.removeItem("wallet");
                        window.location.reload();

                        alert("로그아웃 되었습니다");
                      }
                    }}
                  >
                    Log out
                  </Nav>
                ) : (
                  <Nav
                    className="justify-content-end flex-grow-1 pe-3"
                    style={{
                      cursor: "pointer",
                      fontSize: "18px",
                      lineHeight: "2",
                    }}
                    onClick={(e) => {
                      setOpenImg(false);
                      e.preventDefault();
                      e.stopPropagation();
                      setShow(!show);
                      onClick("login");
                    }}
                  >
                    Log In
                  </Nav>
                )}
                <NavDropdown.Divider />
                {!sessionStorage.getItem("userUUID") ? (
                  <Nav
                    className="justify-content-end flex-grow-1 pe-3"
                    style={{
                      cursor: "pointer",
                      fontSize: "18px",
                      lineHeight: "2",
                    }}
                    onClick={() => {
                      setOpenImg(false);
                      history.push("/sign-up");
                      setShow(!show);
                    }}
                  >
                    Sign Up
                    <NavDropdown.Divider />
                  </Nav>
                ) : null}
                <Nav
                  className="justify-content-end flex-grow-1 pe-3"
                  style={{
                    cursor: "pointer",
                    fontSize: "18px",
                    lineHeight: "2",
                  }}
                  onClick={() => {
                    setOpenImg(false);
                    history.push("/reset-password");
                    setShow(!show);
                  }}
                >
                  Reset PassWord
                </Nav>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </Navbar>
      {/* </div> */}
    </>
  );
};

const Frame = ({
  onCloseBunttonClick,
  onClick,
  frameName,
  frameIdx,
  frameOrder,
  detailFrameState,
  frameShowIdx,
  frameHideIdx,
  frameEle,
  children,
  first = true,
}) => {
  const [isFirst, setIsFirst] = useState(first);
  useEffect(() => {
    setTimeout(() => {
      setIsFirst(false);
    }, 2500);
  }, []);
  return (
    <div
      //className={`${FrameCSS[`${frameName}-frame`]} ${FrameCSS[frameOrder]} pointer`}
      className={`${
        isFirst ? FrameCSS[`init-${frameIdx + 1}`] : FrameCSS[frameOrder]
      } ${FrameCSS[`${frameName}-frame`]} pointer`}
      style={{ backgroundImage: `url(/images/frame/frame/${frameName}.png)` }}
      onClick={(e) => {
        if (onClick && typeof onClick === "function") {
          onClick();
        }
      }}
      ref={frameEle}
    >
      {/* detail view frame  start*/}
      {/*<div
        className={`${detailFrameState === frameShowIdx
          ? FrameCSS[`${frameName}-detail-frame-show`]
          : detailFrameState === frameHideIdx
            ? FrameCSS[`${frameName}-detail-frame-hide`]
            : FrameCSS[`${frameName}-detail-frame`]
          }`}
        style={{
          backgroundImage: `url(/images/detail-frame/${frameName}.png)`,
        }}
      >*/}
      <div
        className={`${
          detailFrameState === frameShowIdx
            ? FrameCSS[`${frameName}-detail-frame-show`]
            : FrameCSS[`${frameName}-detail-frame`]
        }`}
        style={{
          marginTop: "20px",
          backgroundImage: `url(/images/detail-frame/${frameName}.png)`,
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {/*  어떤 클래스를 적용할지 선택하는 방식 비교 연산 (비교) ? (참) : (거짓) */}
        {/* close button wrapper start*/}
        <div
          style={{
            width: "100%",
            height: "5%",
            marginTop: "0.8%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "1%",
          }}
        >
          {/* close button start*/}
          <div
            className="pointer"
            style={{ width: "1.5%", height: "60%", borderRadius: "50%" }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (
                onCloseBunttonClick &&
                typeof onCloseBunttonClick === "function"
              ) {
                onCloseBunttonClick();
              }
            }}
          ></div>
          {/* close button end*/}
        </div>
        {/* close button wrapper end*/}
        <div style={{ width: "100%", height: "95%", padding: "5%" }}>
          <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
            {children}
          </div>
        </div>
      </div>
      {/* detail view frame  end*/}
    </div>
  );
};
const MainGate = ({
  currentFrame,
  setCurrentFrame,
  setUserUUID,
  setLoading,
  setWallet,
  setPoints,
  menubar,
  footer,
  points,
  userUUID,
  walletAddress,
  email,
  name,
  phone,
  ether,
  coin,
  exchangeRate,
  ewc,
  swId,
  setEmail,
  setName,
  setPhone,
  setCoin,
  setEWC,
  setEther,
  setSwId,
  setExchangeRate,
  setTempCoin,
  setTempPoint,
  tempCoin,
  tempPoint,
  language,
  setLanguage,
  languageCode,
  setLanguageCode,

  fees,
  setFees,

  isLogin,
  setIsLogin,

  setPopup,
  popup,

  temporaryData,
  setLoadingMsg,

  smsRequestShow,
  setSMSRequestShow,

  setConfirm,
  alert,
  setAlert,
}) => {
  const aboutFrame = useRef(undefined);

  const [frameOrder, setFrameOrderList] = useState(animationOrderList);
  const [detailFrameState, setDetailFrameState] = useState(undefined);
  const [wrapperSlide, setWrapperSlide] = useState(-10);
  const [leftButtonDown, setLeftButtonDown] = useState(false);
  const [buttonDownStartPoint, setButtonDownStartPoint] = useState({
    startPoint: undefined,
  });

  // let vw = window.innerWidth * 0.01;
  // let screenWidth = window.outerWidth; // 570 - int
  // document.documentElement.style.setProperty(`${--screenWidth}`, `100%`);
  // document.documentElement.style.setProperty("--vw", `${vw}px`);

  useEffect(() => {
    setTimeout(() => {
      if (currentFrame === "about") {
        setWrapperSlide(0);
        setDetailFrameState(0);
        setTimeout(() => {
          setFrameOrderList([
            stopOrderList[0],
            stopOrderList[1],
            stopOrderList[2],
            stopOrderList[3],
            stopOrderList[4],
            stopOrderList[5],
            stopOrderList[6],
            stopOrderList[7],
          ]);
        }, 50);
      } else if (currentFrame === "home") {
        setWrapperSlide(0);
        setDetailFrameState(2);
        setTimeout(() => {
          setFrameOrderList([
            stopOrderList[7],
            stopOrderList[0],
            stopOrderList[1],
            stopOrderList[2],
            stopOrderList[3],
            stopOrderList[4],
            stopOrderList[5],
            stopOrderList[6],
          ]);
        }, 50);
      } else if (currentFrame === "auction") {
        setWrapperSlide(0);
        setDetailFrameState(4);
        setTimeout(() => {
          setFrameOrderList([
            stopOrderList[6],
            stopOrderList[7],
            stopOrderList[0],
            stopOrderList[1],
            stopOrderList[2],
            stopOrderList[3],
            stopOrderList[4],
            stopOrderList[5],
          ]);
        }, 50);
      } else if (currentFrame === "buyland") {
        setWrapperSlide(0);
        setDetailFrameState(6);
        setTimeout(() => {
          setFrameOrderList([
            stopOrderList[5],
            stopOrderList[6],
            stopOrderList[7],
            stopOrderList[0],
            stopOrderList[1],
            stopOrderList[2],
            stopOrderList[3],
            stopOrderList[4],
          ]);
        }, 50);
      } else if (currentFrame === "login") {
        setWrapperSlide(0);
        setDetailFrameState(8);
        setTimeout(() => {
          setFrameOrderList([
            stopOrderList[4],
            stopOrderList[5],
            stopOrderList[6],
            stopOrderList[7],
            stopOrderList[0],
            stopOrderList[1],
            stopOrderList[2],
            stopOrderList[3],
          ]);
        }, 50);
      } else if (currentFrame === "mypage") {
        setWrapperSlide(0);
        setDetailFrameState(10);
        setTimeout(() => {
          setFrameOrderList([
            stopOrderList[3],
            stopOrderList[4],
            stopOrderList[5],
            stopOrderList[6],
            stopOrderList[7],
            stopOrderList[0],
            stopOrderList[1],
            stopOrderList[2],
          ]);
        }, 50);
      } else if (currentFrame === "message") {
        setWrapperSlide(0);
        setDetailFrameState(12);
        setTimeout(() => {
          setFrameOrderList([
            stopOrderList[2],
            stopOrderList[3],
            stopOrderList[4],
            stopOrderList[5],
            stopOrderList[6],
            stopOrderList[7],
            stopOrderList[0],
            stopOrderList[1],
          ]);
        }, 50);
      } else if (currentFrame === "market") {
        setWrapperSlide(0);
        setDetailFrameState(14);
        setTimeout(() => {
          setFrameOrderList([
            stopOrderList[1],
            stopOrderList[2],
            stopOrderList[3],
            stopOrderList[4],
            stopOrderList[5],
            stopOrderList[6],
            stopOrderList[7],
            stopOrderList[0],
          ]);
        }, 50);
      } else if (currentFrame === "information") {
        setWrapperSlide(0);
        setDetailFrameState(16);
        // setTimeout(() => {
        //   setFrameOrderList([
        //     stopOrderList[1],
        //     stopOrderList[2],
        //     stopOrderList[3],
        //     stopOrderList[4],
        //     stopOrderList[5],
        //     stopOrderList[6],
        //     stopOrderList[7],
        //     stopOrderList[0],
        //   ]);
        // }, 50);
      }
      setCurrentFrame(undefined);
    }, 200);
  }, []);

  return (
    <div className={Style["page-background"]}>
      <div
        className={`${Style["plant"]} ${Bounce["bounce-plant"]}`}
        style={{ backgroundImage: "url(/images/frame/plant.png)" }}
      ></div>
      <div
        className={`${Style["drone"]} ${Bounce["bounce-drone"]}`}
        style={{ backgroundImage: "url(/images/frame/drone.png)" }}
      ></div>
      <div
        className={
          wrapperSlide === -10
            ? Style["main-wrapper"]
            : Style["main-wrapper-dark"]
        }
      >
        <TopMenu
          isLogin={isLogin}
          languageCode={languageCode}
          setLanguageCode={setLanguageCode}
          onClick={(frame) => {
            if (frame === "about") {
              setWrapperSlide(0);
              setDetailFrameState(0);
              setTimeout(() => {
                setFrameOrderList([
                  stopOrderList[0],
                  stopOrderList[1],
                  stopOrderList[2],
                  stopOrderList[3],
                  stopOrderList[4],
                  stopOrderList[5],
                  stopOrderList[6],
                  stopOrderList[7],
                ]);
              }, 50);
            } else if (frame === "home") {
              setWrapperSlide(0);
              setDetailFrameState(2);
              setTimeout(() => {
                setFrameOrderList([
                  stopOrderList[7],
                  stopOrderList[0],
                  stopOrderList[1],
                  stopOrderList[2],
                  stopOrderList[3],
                  stopOrderList[4],
                  stopOrderList[5],
                  stopOrderList[6],
                ]);
              }, 50);
            } else if (frame === "auction") {
              setWrapperSlide(0);
              setDetailFrameState(4);
              setTimeout(() => {
                setFrameOrderList([
                  stopOrderList[6],
                  stopOrderList[7],
                  stopOrderList[0],
                  stopOrderList[1],
                  stopOrderList[2],
                  stopOrderList[3],
                  stopOrderList[4],
                  stopOrderList[5],
                ]);
              }, 50);
            } else if (frame === "buyland") {
              setWrapperSlide(0);
              setDetailFrameState(6);
              setTimeout(() => {
                setFrameOrderList([
                  stopOrderList[5],
                  stopOrderList[6],
                  stopOrderList[7],
                  stopOrderList[0],
                  stopOrderList[1],
                  stopOrderList[2],
                  stopOrderList[3],
                  stopOrderList[4],
                ]);
              }, 50);
            } else if (frame === "login") {
              setWrapperSlide(0);
              setDetailFrameState(8);
              setTimeout(() => {
                setFrameOrderList([
                  stopOrderList[4],
                  stopOrderList[5],
                  stopOrderList[6],
                  stopOrderList[7],
                  stopOrderList[0],
                  stopOrderList[1],
                  stopOrderList[2],
                  stopOrderList[3],
                ]);
              }, 50);
            } else if (frame === "mypage") {
              readInfo({
                uuid: userUUID,
                callback: (err, user) => {
                  if (err) {
                    console.log(err);
                  } else {
                    if (user.result === "success") {
                      console.log(user);
                      let coin = user.userInfo.coin;
                      let ether = user.userInfo.ethAmount;
                      let ewc = user.userInfo.ewc;
                      let phone = user.userInfo.phone;
                      let name = user.userInfo.name;
                      let email = user.userInfo.email;
                      let swId = user.userInfo.swId;
                      let point = user.userInfo.point;
                      let fees = user.userInfo.fees;
                      let exchangeRate = user.userInfo.exchangeRate;
                      setCoin(coin);
                      setEther(ether);
                      setEWC(ewc);
                      setPhone(phone);
                      setName(name);
                      setEmail(email);
                      setSwId(swId);
                      setPoints(point);
                      setFees(fees);
                      setExchangeRate(exchangeRate);
                      setWrapperSlide(0);
                      setDetailFrameState(10);
                      setTimeout(() => {
                        setFrameOrderList([
                          stopOrderList[3],
                          stopOrderList[4],
                          stopOrderList[5],
                          stopOrderList[6],
                          stopOrderList[7],
                          stopOrderList[0],
                          stopOrderList[1],
                          stopOrderList[2],
                        ]);
                      }, 50);
                    }
                  }
                },
              });
            } else if (frame === "message") {
              setWrapperSlide(0);
              setDetailFrameState(12);
              setTimeout(() => {
                setFrameOrderList([
                  stopOrderList[2],
                  stopOrderList[3],
                  stopOrderList[4],
                  stopOrderList[5],
                  stopOrderList[6],
                  stopOrderList[7],
                  stopOrderList[0],
                  stopOrderList[1],
                ]);
              }, 50);
            } else if (frame === "market") {
              setWrapperSlide(0);
              setDetailFrameState(14);
              setTimeout(() => {
                setFrameOrderList([
                  stopOrderList[1],
                  stopOrderList[2],
                  stopOrderList[3],
                  stopOrderList[4],
                  stopOrderList[5],
                  stopOrderList[6],
                  stopOrderList[7],
                  stopOrderList[0],
                ]);
              }, 50);
            }
          }}
        />
        <div className={Style["main-contents"]}>
          <div
            className={
              wrapperSlide === -10 ? Style["wrapper-10"] : Style["wrapper-0"]
            }
          >
            <Frame
              first={currentFrame ? false : true}
              frameEle={aboutFrame}
              frameName={"about"}
              frameIdx={0}
              frameOrder={frameOrder[0]}
              detailFrameState={detailFrameState}
              onClick={() => {
                setWrapperSlide(0);
                setDetailFrameState(0);
                setTimeout(() => {
                  setFrameOrderList([
                    stopOrderList[0],
                    stopOrderList[1],
                    stopOrderList[2],
                    stopOrderList[3],
                    stopOrderList[4],
                    stopOrderList[5],
                    stopOrderList[6],
                    stopOrderList[7],
                  ]);
                }, 50);
              }}
              onCloseBunttonClick={() => {
                setDetailFrameState(1);
                setWrapperSlide(-10);
                setFrameOrderList([
                  animationOrderList[0],
                  animationOrderList[1],
                  animationOrderList[2],
                  animationOrderList[3],
                  animationOrderList[4],
                  animationOrderList[5],
                  animationOrderList[6],
                  animationOrderList[7],
                ]);
              }}
              frameShowIdx={0}
              frameHideIdx={1}
            >
              <About language={language[languageCode] || {}} />
            </Frame>
            <Frame
              first={currentFrame ? false : true}
              frameName={"home"}
              frameIdx={1}
              frameOrder={frameOrder[1]}
              detailFrameState={detailFrameState}
              onClick={() => {
                setWrapperSlide(0);
                setDetailFrameState(2);
                setTimeout(() => {
                  setFrameOrderList([
                    stopOrderList[7],
                    stopOrderList[0],
                    stopOrderList[1],
                    stopOrderList[2],
                    stopOrderList[3],
                    stopOrderList[4],
                    stopOrderList[5],
                    stopOrderList[6],
                  ]);
                }, 50);
              }}
              onCloseBunttonClick={() => {
                setDetailFrameState(3);
                setWrapperSlide(-10);
                setFrameOrderList([
                  animationOrderList[7],
                  animationOrderList[0],
                  animationOrderList[1],
                  animationOrderList[2],
                  animationOrderList[3],
                  animationOrderList[4],
                  animationOrderList[5],
                  animationOrderList[6],
                ]);
              }}
              frameShowIdx={2}
              frameHideIdx={3}
            >
              <Home language={language[languageCode] || {}} />
            </Frame>
            <Frame
              first={currentFrame ? false : true}
              frameName={"auction"}
              frameIdx={2}
              frameOrder={frameOrder[2]}
              detailFrameState={detailFrameState}
              onClick={() => {
                setWrapperSlide(0);
                setDetailFrameState(4);
                setTimeout(() => {
                  setFrameOrderList([
                    stopOrderList[6],
                    stopOrderList[7],
                    stopOrderList[0],
                    stopOrderList[1],
                    stopOrderList[2],
                    stopOrderList[3],
                    stopOrderList[4],
                    stopOrderList[5],
                  ]);
                }, 50);
              }}
              onCloseBunttonClick={() => {
                setDetailFrameState(5);
                setWrapperSlide(-10);
                setFrameOrderList([
                  animationOrderList[6],
                  animationOrderList[7],
                  animationOrderList[0],
                  animationOrderList[1],
                  animationOrderList[2],
                  animationOrderList[3],
                  animationOrderList[4],
                  animationOrderList[5],
                ]);
              }}
              frameShowIdx={4}
              frameHideIdx={5}
            >
              <Auction language={language[languageCode] || {}} />
            </Frame>
            <Frame
              first={currentFrame ? false : true}
              frameName={"buyland"}
              frameIdx={3}
              frameOrder={frameOrder[3]}
              detailFrameState={detailFrameState}
              onClick={() => {
                setWrapperSlide(0);
                setDetailFrameState(6);
                setTimeout(() => {
                  setFrameOrderList([
                    stopOrderList[5],
                    stopOrderList[6],
                    stopOrderList[7],
                    stopOrderList[0],
                    stopOrderList[1],
                    stopOrderList[2],
                    stopOrderList[3],
                    stopOrderList[4],
                  ]);
                }, 50);
              }}
              onCloseBunttonClick={() => {
                setDetailFrameState(7);
                setWrapperSlide(-10);
                setFrameOrderList([
                  animationOrderList[5],
                  animationOrderList[6],
                  animationOrderList[7],
                  animationOrderList[0],
                  animationOrderList[1],
                  animationOrderList[2],
                  animationOrderList[3],
                  animationOrderList[4],
                ]);
              }}
              frameShowIdx={6}
              frameHideIdx={7}
            >
              <BuyLand language={language[languageCode] || {}} />
            </Frame>
            <Frame
              first={currentFrame ? false : true}
              frameName={"login"}
              frameIdx={4}
              frameOrder={frameOrder[4]}
              detailFrameState={detailFrameState}
              onClick={() => {
                setWrapperSlide(0);
                setDetailFrameState(8);
                setTimeout(() => {
                  setFrameOrderList([
                    stopOrderList[4],
                    stopOrderList[5],
                    stopOrderList[6],
                    stopOrderList[7],
                    stopOrderList[0],
                    stopOrderList[1],
                    stopOrderList[2],
                    stopOrderList[3],
                  ]);
                }, 50);
              }}
              onCloseBunttonClick={() => {
                setDetailFrameState(9);
                setWrapperSlide(-10);
                setFrameOrderList([
                  animationOrderList[4],
                  animationOrderList[5],
                  animationOrderList[6],
                  animationOrderList[7],
                  animationOrderList[0],
                  animationOrderList[1],
                  animationOrderList[2],
                  animationOrderList[3],
                ]);
              }}
              frameShowIdx={8}
              frameHideIdx={9}
            >
              <LogIn
                temporaryData={temporaryData}
                language={language[languageCode] || {}}
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                setPoints={setPoints}
                setLoading={setLoading}
                setWallet={setWallet}
                setUserUUID={setUserUUID}
                setCurrentFrame={setCurrentFrame}
                setEmail={setEmail}
                setName={setName}
                setPhone={setPhone}
                setCoin={setCoin}
                setEWC={setEWC}
                setSwId={setSwId}
                setEther={setEther}
                setLoadingMsg={setLoadingMsg}
                setConfirm={setConfirm}
                alert={alert}
                setAlert={setAlert}
                onClose={() => {
                  setTimeout(() => {
                    readInfo({
                      uuid: sessionStorage.getItem("userUUID"),
                      callback: (err, user) => {
                        console.log(err);
                        if (err) {
                          //    history.push('/login')
                          window.alert(
                            "사용자 정보를 불러오는 데 실패하였습니다. 관리자에게 문의 바랍니다."
                          );
                        } else {
                          if (user.result === "success") {
                            console.log(user);
                            let coin = user.userInfo.coin;
                            let ether = user.userInfo.ethAmount;
                            let ewc = user.userInfo.ewc;
                            let phone = user.userInfo.phone;
                            let name = user.userInfo.name;
                            let email = user.userInfo.email;
                            let swId = user.userInfo.swId;
                            let point = user.userInfo.point;
                            let fees = user.userInfo.fees;
                            let exchangeRate = user.userInfo.exchangeRate;
                            setCoin(coin);
                            setEther(ether);
                            setEWC(ewc);
                            setPhone(phone);
                            setName(name);
                            setEmail(email);
                            setSwId(swId);
                            setPoints(point);
                            setFees(fees);
                            setExchangeRate(exchangeRate);
                            setIsLogin(true);
                          }

                          setDetailFrameState(9);
                          setWrapperSlide(-10);
                          setFrameOrderList([
                            animationOrderList[4],
                            animationOrderList[5],
                            animationOrderList[6],
                            animationOrderList[7],
                            animationOrderList[0],
                            animationOrderList[1],
                            animationOrderList[2],
                            animationOrderList[3],
                          ]);

                          setTimeout(() => {
                            setWrapperSlide(0);
                            setDetailFrameState(10);
                            setTimeout(() => {
                              setFrameOrderList([
                                stopOrderList[3],
                                stopOrderList[4],
                                stopOrderList[5],
                                stopOrderList[6],
                                stopOrderList[7],
                                stopOrderList[0],
                                stopOrderList[1],
                                stopOrderList[2],
                              ]);
                            }, 50);
                          }, 300);
                        }
                      },
                    });
                  }, 200);
                }}
              />
            </Frame>
            <Frame
              first={currentFrame ? false : true}
              frameName={"mypage"}
              frameIdx={5}
              frameOrder={frameOrder[5]}
              detailFrameState={detailFrameState}
              onClick={() => {
                if (!isLogin) {
                  setWrapperSlide(0);
                  setDetailFrameState(8);
                  setTimeout(() => {
                    setFrameOrderList([
                      stopOrderList[4],
                      stopOrderList[5],
                      stopOrderList[6],
                      stopOrderList[7],
                      stopOrderList[0],
                      stopOrderList[1],
                      stopOrderList[2],
                      stopOrderList[3],
                    ]);
                  }, 50);
                  return;
                }
                readInfo({
                  uuid: userUUID,
                  callback: (err, user) => {
                    if (err) {
                      console.log(err);
                    } else {
                      if (user.result === "success") {
                        console.log(user);
                        let coin = user.userInfo.coin;
                        let ether = user.userInfo.ethAmount;
                        let ewc = user.userInfo.ewc;
                        let phone = user.userInfo.phone;
                        let name = user.userInfo.name;
                        let email = user.userInfo.email;
                        let swId = user.userInfo.swId;
                        let point = user.userInfo.point;
                        let fees = user.userInfo.fees;
                        let exchangeRate = user.userInfo.exchangeRate;
                        setCoin(coin);
                        setEther(ether);
                        setEWC(ewc);
                        setPhone(phone);
                        setName(name);
                        setEmail(email);
                        setSwId(swId);
                        setPoints(point);
                        setFees(fees);
                        setExchangeRate(exchangeRate);
                        setWrapperSlide(0);
                        setDetailFrameState(10);
                        setTimeout(() => {
                          setFrameOrderList([
                            stopOrderList[3],
                            stopOrderList[4],
                            stopOrderList[5],
                            stopOrderList[6],
                            stopOrderList[7],
                            stopOrderList[0],
                            stopOrderList[1],
                            stopOrderList[2],
                          ]);
                        }, 50);
                      }
                    }
                  },
                });
              }}
              onCloseBunttonClick={() => {
                setDetailFrameState(11);
                setWrapperSlide(-10);
                setFrameOrderList([
                  animationOrderList[3],
                  animationOrderList[4],
                  animationOrderList[5],
                  animationOrderList[6],
                  animationOrderList[7],
                  animationOrderList[0],
                  animationOrderList[1],
                  animationOrderList[2],
                ]);
              }}
              frameShowIdx={10}
              frameHideIdx={11}
            >
              <MyPage
                language={language[languageCode] || {}}
                menubar={menubar}
                footer={footer}
                points={points}
                setPoints={setPoints}
                userUUID={userUUID}
                walletAddress={walletAddress}
                setLoading={setLoading}
                setLoadingMsg={setLoadingMsg}
                setUserUUID={setUserUUID}
                setExchangeRate={setExchangeRate}
                exchangeRate={exchangeRate}
                setCoin={setCoin}
                coin={coin}
                setEmail={setEmail}
                email={email}
                setName={setName}
                name={name}
                setPhone={setPhone}
                phone={phone}
                setEther={setEther}
                ether={ether}
                setTempPoint={setTempPoint}
                setTempCoin={setTempCoin}
                tempPoint={tempPoint}
                tempCoin={tempCoin}
                ewc={ewc}
                setEWC={setEWC}
                swId={swId}
                setSwId={setSwId}
                fees={fees}
                setFees={setFees}
                setSMSRequestShow={setSMSRequestShow}
                smsRequestShow={smsRequestShow}
              />
            </Frame>
            <Frame
              first={currentFrame ? false : true}
              frameName={"message"}
              frameIdx={6}
              frameOrder={frameOrder[6]}
              detailFrameState={detailFrameState}
              onClick={() => {
                if (!isLogin) {
                  setWrapperSlide(0);
                  setDetailFrameState(8);
                  setTimeout(() => {
                    setFrameOrderList([
                      stopOrderList[4],
                      stopOrderList[5],
                      stopOrderList[6],
                      stopOrderList[7],
                      stopOrderList[0],
                      stopOrderList[1],
                      stopOrderList[2],
                      stopOrderList[3],
                    ]);
                  }, 50);
                  return;
                }
                setWrapperSlide(0);
                setDetailFrameState(12);
                setTimeout(() => {
                  setFrameOrderList([
                    stopOrderList[2],
                    stopOrderList[3],
                    stopOrderList[4],
                    stopOrderList[5],
                    stopOrderList[6],
                    stopOrderList[7],
                    stopOrderList[0],
                    stopOrderList[1],
                  ]);
                }, 50);
              }}
              onCloseBunttonClick={() => {
                setDetailFrameState(13);
                setWrapperSlide(-10);
                setFrameOrderList([
                  animationOrderList[2],
                  animationOrderList[3],
                  animationOrderList[4],
                  animationOrderList[5],
                  animationOrderList[6],
                  animationOrderList[7],
                  animationOrderList[0],
                  animationOrderList[1],
                ]);
              }}
              frameShowIdx={12}
              frameHideIdx={13}
            >
              <Message userUUID={userUUID} isLogin={isLogin} />
            </Frame>
            <Frame
              first={currentFrame ? false : true}
              frameName={"market"}
              frameIdx={7}
              frameOrder={frameOrder[7]}
              detailFrameState={detailFrameState}
              onClick={() => {
                setWrapperSlide(0);
                setDetailFrameState(14);
                setTimeout(() => {
                  setFrameOrderList([
                    stopOrderList[1],
                    stopOrderList[2],
                    stopOrderList[3],
                    stopOrderList[4],
                    stopOrderList[5],
                    stopOrderList[6],
                    stopOrderList[7],
                    stopOrderList[0],
                  ]);
                }, 50);
              }}
              onCloseBunttonClick={() => {
                setDetailFrameState(15);
                setWrapperSlide(-10);
                setFrameOrderList([
                  animationOrderList[1],
                  animationOrderList[2],
                  animationOrderList[3],
                  animationOrderList[4],
                  animationOrderList[5],
                  animationOrderList[6],
                  animationOrderList[7],
                  animationOrderList[0],
                ]);
              }}
              frameShowIdx={14}
              frameHideIdx={15}
            >
              <Market language={language[languageCode] || {}} />
            </Frame>
          </div>
        </div>
        <div className={Style["bottom"]}></div>
      </div>
      <Popup popup={popup} setPopup={setPopup} />
    </div>
  );
};

export default MainGate;
