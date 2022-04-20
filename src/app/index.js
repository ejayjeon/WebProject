import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Route, Switch } from "react-router-dom";
import Style from "./style.module.css";
import Loader from "react-spinners/PacmanLoader";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import HomePage2 from "./pages/home2";
//import MapPage from './pages/map'
import MyLandPage from "./pages/my-land";
import AuctionPage from "./pages/auction";
import MyPage from "./pages/my";
import ViewDetailPage from "./pages/view-detail";
import MailBox from "./pages/mail-box";
import { Footer } from "./components";
import Land from "./pages/land";
import MainEntrance from "./pages/main-gate";
import ResetPassword from "./pages/reset-password";
import SignUp from "./pages/sign-up";
import {
  // allowedIp,
  // checkMyIp,
  // downloadGridImage,
  getLanguageData,
  // getMyLandOpen,
  // getPointAmount,
  readGridColorList,
  readInfo,
  // requestLogin,
  readBlockState,
  readPopupData,
  readTemporaryData,
} from "./api";
import BidList from "./pages/bid-list";
import HighestBid from "./pages/highest-bid";

import Menu from "./components/top-menu";
import LandStatePage from "./pages/land-state";
import XTTest from "./pages/xt-test";
// import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
// import MyDocument from "./pages/main-gate/frame/information";

const RequestSMS = ({ show, setShow }) => {
  const [certNumber, setCertNumber] = useState("");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
        display: show.display ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setShow({ display: false, callback: () => {}, authKey: undefined });
      }}
    >
      <div
        style={{
          width: "500px",
          height: "300px",
          backgroundColor: "white",
          borderRadius: "20px",
          padding: "20px",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            borderRadius: "20px",
            padding: "20px",
            border: "4px solid rgb(225, 122, 24)",
          }}
        >
          <div
            style={{
              with: "100%",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "13px",
            }}
          >
            {show.text}{" "}
          </div>
          <div
            style={{
              with: "100%",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              color: "rgba(255,100,100,1)",
              fontWeight: "bold",
            }}
          >
            (이루고 월드에서 SecurityWallet으로 출금은 추후지원 예정입니다.)
          </div>
          <div
            style={{
              with: "100%",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              gap: "20px",
            }}
          >
            인증번호 입력
            <input
              type={"text"}
              value={certNumber}
              onChange={(e) => {
                let reg = /[^0-9]/g;
                if (!reg.test(e.target.value)) {
                  if (e.target.value.length <= 6) {
                    setCertNumber(e.target.value);
                  }
                }
              }}
            />
          </div>
          <div
            style={{
              with: "100%",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "40px",
                backgroundColor:
                  certNumber.length === 6 ? "rgb(225, 122, 24)" : "gray",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (certNumber.length !== 6) {
                  return;
                }
                console.log(`cert number : ${certNumber}`);
                console.log(`real auth key : ${show.authKey}`);
                setCertNumber("");
                if (certNumber === `${show.authKey}`) {
                  show.callback(true);
                } else {
                  show.callback(false);
                }
                //setCertNumber('')
                //setShow({display:false, callback:() => {}, authKey:undefined})
              }}
            >
              입금
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const CertificateCheck = ({ confirm, setConfirm }) => {
  const [encCode, setEncCode] = useState("");
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          display: confirm ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            flexDirection: "column",
          }}
        >
          <div>이루고 서비스 사용을 위해서는 본인인증이 필요합니다.</div>
          <div>본인인증을 하지 않은 사용자 입니다.</div>
          <div>본인인증을 진행하시겠습니까?</div>
        </div>
        <div
          className="pointer"
          style={{
            width: "200px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            borderRadius: "10px",
            color: "white",
          }}
          onClick={() => {
            fetch(`${window.hostAPI}/nice-id/checkplus_main`, {
              method: "post",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({}),
            })
              .then((res) => {
                return res.json();
              })
              .then((data) => {
                setEncCode(data.sEncData);
                setTimeout(() => {
                  setConfirm(false);
                  window.name = "Parent_window";
                  window.open(
                    "",
                    "popupChk",
                    "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"
                  );
                  let form = document.getElementById("form_chk_login_01");
                  form.action =
                    "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
                  form.target = "popupChk";
                  form.submit();
                }, 400);
              })
              .catch((e) => {
                console.log(e);
              });
            return;
          }}
        >
          인증하기
        </div>
        <div
          className="pointer"
          style={{ fontSize: "12px", borderBottom: "1px solid gray" }}
          onClick={() => {
            setConfirm(false);
          }}
        >
          돌아가기
        </div>
      </div>
      <div
        style={{
          display: "none",
          width: "0",
          height: "0",
          overflow: "hidden",
        }}
      >
        <form id="form_chk_login_01" method="post">
          <input type="hidden" name="m" value="checkplusService" />
          <input type="hidden" name="EncodeData" value={encCode} />
        </form>
      </div>
    </>
  );
};
const CertificateInfoWindow = ({ alert }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        display: alert.show ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          width: "340px",
          height: "200px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "140px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
          }}
        >
          {alert.text}
        </div>
        <div
          style={{
            width: "100%",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTop: "1px solid gray",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
            }}
            onClick={() => {
              alert.callback();
            }}
          >
            확인
          </div>
        </div>
      </div>
    </div>
  );
};
const App = () => {
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");

  const [language, setLanguage] = useState({ ko: {}, eng: {} });
  const [languageCode, setLanguageCode] = useState(
    localStorage.getItem("language-code") || "ko" || "eng"
  );

  const [myLandOpen, setMyLandOpen] = useState(false);
  const [isWhiteList, setIsWhiteList] = useState(true);
  const [currentFrame, setCurrentFrame] = useState(undefined);
  // const [nationalityCode, setNationalityCode] = useState("kor" || "for");
  const [points, setPoints] = useState(400);
  const [wallet, setWallet] = useState("");
  const [userUUID, setUserUUID] = useState(undefined);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ether, setEther] = useState(0);
  const [coin, setCoin] = useState(0);
  const [ewc, setEWC] = useState(0);
  const [swId, setSwId] = useState("");
  const [fees, setFees] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [tempCoin, setTempCoin] = useState(0);
  const [tempPoint, setTempPoint] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [map, setMap] = useState({ url: undefined });
  const [confirm, setConfirm] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    callback: () => {},
  });

  const [blockState, setBlockState] = useState([
    [
      { blockX: 0, bockY: 0, blockState: 0, mapId: 0 },
      { blockX: 1, bockY: 0, blockState: 0, mapId: 0 },
      { blockX: 2, bockY: 0, blockState: 0, mapId: 0 },
    ],
    [
      { blockX: 0, bockY: 1, blockState: 0, mapId: 0 },
      { blockX: 1, bockY: 1, blockState: 0, mapId: 0 },
      { blockX: 2, bockY: 1, blockState: 0, mapId: 0 },
    ],
    [
      { blockX: 0, bockY: 2, blockState: 0, mapId: 0 },
      { blockX: 1, bockY: 2, blockState: 0, mapId: 0 },
      { blockX: 2, bockY: 2, blockState: 0, mapId: 0 },
    ],
  ]);
  const [popup, setPopup] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    show: false,
  });
  const [temporaryData, setTemporaryData] = useState({
    loginProtectText: "",
    openPage: "no",
  });
  const [smsRequestShow, setSMSRequestShow] = useState({
    display: false,
    callback: () => {},
    authKey: undefined,
    text: "",
  });
  useEffect(() => {
    readTemporaryData({
      callback: (err, res) => {
        if (err) {
          console.log(err);
        } else {
          setTemporaryData(res.data);

          if (window.checkMyIp) {
            // test mode
            window.checkMyIp({
              callback: (err, res) => {
                if (err) {
                  console.log(err);
                } else {
                  //console.log("checkMyIp" + JSON.stringify(res));
                  setIsWhiteList(res.whiteList);
                }
              },
            });
          } else if (res.data.pageOpen === "no") {
            // production mode
            setIsWhiteList(false);
          }
        }
      },
    });
    readPopupData({
      callback: (err, res) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(res);
          if (window.location.pathname !== "/") return;
          if (localStorage.getItem("popup-close-time")) {
            let closeTime = Number(localStorage.getItem("popup-close-time"));
            let currentTime = new Date().getTime();
            let diff = currentTime - closeTime;
            if (diff >= 1000 * 60 * 60 * 24) {
              localStorage.removeItem("popup-close-time");
              setPopup({
                width: res.data.width,
                height: res.data.height,
                topPosition: res.data.topPosition,
                leftPosition: res.data.leftPosition,
                show: res.data.showPopup === "yes" ? true : false,
              });
            }
            return;
          }
          setPopup({
            width: res.data.width,
            height: res.data.height,
            topPosition: res.data.topPosition,
            leftPosition: res.data.leftPosition,
            show: res.data.showPopup === "yes" ? true : false,
          });
        }
      },
    });
    setTimeout(() => {
      fetch(`${window.hostAPI}/map/download`, {
        method: "get",
      })
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          setMap({
            url: window.URL.createObjectURL(blob),
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }, 1500);
    readGridColorList({
      callback: (err, res) => {
        if (err) {
          console.log(err);
        } else {
          res.data.forEach((d, i) => {
            if (d.idx === 0) {
              if (d.image) {
                fetch(`${window.hostAPI}/map/grid-color/download-image`, {
                  method: "post",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ name: d.image }),
                })
                  .then((res) => {
                    return res.blob();
                  })
                  .then((blob) => {
                    console.log(blob);
                    window.notAvailable = {
                      color: d.color,
                      image: window.URL.createObjectURL(blob),
                    };
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              } else {
                window.notAvailable = {
                  color: d.color,
                  image: d.image,
                };
              }
            } else if (d.idx === 1) {
              if (d.image) {
                fetch(`${window.hostAPI}/map/grid-color/download-image`, {
                  method: "post",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ name: d.image }),
                })
                  .then((res) => {
                    return res.blob();
                  })
                  .then((blob) => {
                    console.log(blob);
                    window.selectedGrid = {
                      color: d.color,
                      image: window.URL.createObjectURL(blob),
                    };
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              } else {
                window.selectedGrid = {
                  color: d.color,
                  image: d.image,
                };
              }
            } else if (d.idx === 2) {
              if (d.image) {
                fetch(`${window.hostAPI}/map/grid-color/download-image`, {
                  method: "post",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ name: d.image }),
                })
                  .then((res) => {
                    return res.blob();
                  })
                  .then((blob) => {
                    console.log(blob);
                    window.myHighestBid = {
                      color: d.color,
                      image: window.URL.createObjectURL(blob),
                    };
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              } else {
                window.myHighestBid = {
                  color: d.color,
                  image: d.image,
                };
              }
            } else if (d.idx === 3) {
              if (d.image) {
                fetch(`${window.hostAPI}/map/grid-color/download-image`, {
                  method: "post",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ name: d.image }),
                })
                  .then((res) => {
                    return res.blob();
                  })
                  .then((blob) => {
                    console.log(blob);
                    window.myNotHighestBid = {
                      color: d.color,
                      image: window.URL.createObjectURL(blob),
                    };
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              } else {
                window.myNotHighestBid = {
                  color: d.color,
                  image: d.image,
                };
              }
            } else if (d.idx === 4) {
              if (d.image) {
                fetch(`${window.hostAPI}/map/grid-color/download-image`, {
                  method: "post",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify({ name: d.image }),
                })
                  .then((res) => {
                    return res.blob();
                  })
                  .then((blob) => {
                    console.log(blob);
                    window.pickOnList = {
                      color: d.color,
                      image: window.URL.createObjectURL(blob),
                    };
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              } else {
                window.pickOnList = {
                  color: d.color,
                  image: d.image,
                };
              }
            }
          });
        }
      },
    });
    getLanguageData({
      callback: (err, res) => {
        if (err) {
          console.log(err);
        } else {
          setLanguage(res.language);
        }
      },
    });
    readBlockState({
      callback: (err, res) => {
        if (err) {
          console.log(err);
        } else {
          let tempBlockState = JSON.parse(JSON.stringify(blockState));
          res.data.forEach((block, idx) => {
            tempBlockState[block.blockY][block.blockX] = block;
          });
          setBlockState(tempBlockState);
        }
      },
    });
    if (sessionStorage.getItem("userUUID")) {
      // console.log("기존 세션 스토리지를 업데이트 합니다.");
      let uuid = sessionStorage.getItem("userUUID");
      let wallet = sessionStorage.getItem("wallet");
      setUserUUID(uuid);
      setWallet(wallet);

      readInfo({
        uuid: uuid,
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
              setIsLogin(true);
            }
          }
        },
      });
    } else {
      // console.log("기존 세션 스토리지가 없습니다.");
    }
  }, []);

  //console.log(`ether3 : ${ether}`);
  return (
    <>
      <div className={classNames(Style["background"])}>
        <Switch>
          <Route path="/land-state">
            <LandStatePage
              menubar={
                <Menu
                  hideButton={true}
                  points={points}
                  language={language}
                  myLandOpen={myLandOpen}
                  onClick={setCurrentFrame}
                />
              }
              setLoading={setLoading}
              setLoadingMsg={setLoadingMsg}
              points={points}
              setPoints={setPoints}
              userUUID={userUUID}
              blockState={blockState}
            />
          </Route>
          <Route path="/land">
            <Land
              menubar={
                <Menu
                  points={points}
                  language={language}
                  myLandOpen={myLandOpen}
                />
              }
              footer={<Footer />}
            />
          </Route>
          <Route path="/mail-box">
            {isWhiteList ? (
              <MailBox
                menubar={
                  <Menu
                    points={points}
                    language={language}
                    myLandOpen={myLandOpen}
                  />
                }
                footer={<Footer />}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/home">
            {isWhiteList ? (
              <HomePage
                menubar={
                  <Menu
                    points={points}
                    language={language}
                    myLandOpen={myLandOpen}
                  />
                }
                footer={<Footer />}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/my-land">
            {isWhiteList ? (
              <MyLandPage
                userUUID={userUUID}
                menubar={
                  <Menu
                    points={points}
                    language={language}
                    myLandOpen={myLandOpen}
                  />
                }
                footer={<Footer />}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/auction">
            {isWhiteList ? (
              <AuctionPage
                language={language[languageCode] || ""}
                languageCode={languageCode}
                setLanguage={setLanguage}
                setLanguageCode={setLanguageCode}
                blockState={blockState}
                menubar={
                  <Menu
                    points={points}
                    language={language[languageCode] || ""}
                    myLandOpen={myLandOpen}
                    onClick={setCurrentFrame}
                    hideButton={window.operationMode === "test" ? false : true}
                    isLogin={isLogin}
                    languageCode={languageCode}
                    setLanguage={setLanguage}
                    setLanguageCode={setLanguageCode}
                  />
                }
                setLoading={setLoading}
                setLoadingMsg={setLoadingMsg}
                points={points}
                setPoints={setPoints}
                userUUID={userUUID}
                map={map}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/my">
            {isWhiteList ? (
              <MyPage
                menubar={
                  <Menu
                    points={points}
                    language={language}
                    myLandOpen={myLandOpen}
                  />
                }
                footer={<Footer />}
                userUUID={userUUID}
                points={points}
                walletAddress={wallet}
                setPoints={setPoints}
                setLoading={setLoading}
                setUserUUID={setUserUUID}
                email={email}
                name={name}
                phone={phone}
                ether={ether}
                coin={coin}
                exchangeRate={exchangeRate}
                tempCoin={tempCoin}
                tempPoint={tempPoint}
                setTempCoin={setTempCoin}
                setTempPoint={setTempPoint}
                setEmail={setEmail}
                setName={setName}
                setPhone={setPhone}
                setEther={setEther}
                setCoin={setCoin}
                setExchangeRate={setExchangeRate}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/view-detail">
            {isWhiteList ? (
              <ViewDetailPage
                menubar={
                  <Menu
                    points={points}
                    language={language}
                    myLandOpen={myLandOpen}
                  />
                }
                footer={<Footer />}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/login">
            {isWhiteList ? (
              <LoginPage
                isLogin={isLogin}
                setUserUUID={setUserUUID}
                setPoints={setPoints}
                setWallet={setWallet}
                setLoading={setLoading}
                setLoadingMsg={setLoadingMsg}
                setEWC={setEWC}
                setCoin={setCoin}
                setCurrentFrame={setCurrentFrame}
                setEmail={setEmail}
                setEther={setEther}
                setIsLogin={setIsLogin}
                setName={setName}
                setPhone={setPhone}
                setSwId={setSwId}
                language={language[languageCode] || ""}
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
                        }
                      },
                    });
                  }, 200);
                }}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/reset-password">
            {isWhiteList ? (
              <ResetPassword
                setLoading={setLoading}
                setLoadingMsg={setLoadingMsg}
                language={language[languageCode] || ""}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/sign-up">
            {isWhiteList ? (
              <SignUp
                setLoading={setLoading}
                setLoadingMsg={setLoadingMsg}
                setCurrentFrame={setCurrentFrame}
                language={language[languageCode] || ""}
                setLanguage={setLanguage}
                languageCode={languageCode}
                setLanguageCode={setLanguageCode}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/bid-list">
            {isWhiteList ? (
              <BidList
                language={language[languageCode] || ""}
                menubar={
                  <Menu
                    points={points}
                    language={language[languageCode] || ""}
                    languageCode={languageCode}
                    setLanguage={setLanguage}
                    setLanguageCode={setLanguageCode}
                    myLandOpen={myLandOpen}
                    onClick={setCurrentFrame}
                    hideButton={window.operationMode === "test" ? false : true}
                    isLogin={isLogin}
                  />
                }
                footer={<Footer />}
                userUUID={userUUID}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/highest-bid">
            {isWhiteList ? (
              <HighestBid
                language={language[languageCode] || ""}
                menubar={
                  <Menu
                    points={points}
                    language={language[languageCode] || ""}
                    languageCode={languageCode}
                    setLanguage={setLanguage}
                    setLanguageCode={setLanguageCode}
                    myLandOpen={myLandOpen}
                    onClick={setCurrentFrame}
                    hideButton={window.operationMode === "test" ? false : true}
                    isLogin={isLogin}
                  />
                }
                footer={<Footer />}
                userUUID={userUUID}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/main-entrance">
            {isWhiteList ? (
              <MainEntrance
                currentFrame={currentFrame}
                setCurrentFrame={setCurrentFrame}
                setUserUUID={setUserUUID}
                setLoading={setLoading}
                setWallet={setWallet}
                setPoints={setPoints}
                points={points}
                userUUID={userUUID}
                walletAddress={wallet}
                email={email}
                name={name}
                phone={phone}
                ether={ether}
                coin={coin}
                ewc={ewc}
                swId={swId}
                exchangeRate={exchangeRate}
                tempCoin={tempCoin}
                tempPoint={tempPoint}
                setTempCoin={setTempCoin}
                setTempPoint={setTempPoint}
                setEmail={setEmail}
                setName={setName}
                setPhone={setPhone}
                setEther={setEther}
                setCoin={setCoin}
                setEWC={setEWC}
                setSwId={setSwId}
                setExchangeRate={setExchangeRate}
                language={language}
                setLanguage={setLanguage}
                languageCode={languageCode}
                setLanguageCode={setLanguageCode}
                fees={fees}
                setFees={setFees}
                setIsLogin={setIsLogin}
                isLogin={isLogin}
                setPopup={setPopup}
                popup={popup}
                openPage={temporaryData}
                temporaryData={temporaryData}
                setLoadingMsg={setLoadingMsg}
                smsRequestShow={smsRequestShow}
                setSMSRequestShow={setSMSRequestShow}
                setConfirm={setConfirm}
                alert={alert}
                setAlert={setAlert}
              />
            ) : (
              <HomePage2 />
            )}
          </Route>
          <Route path="/xt-test">
            <XTTest />
          </Route>
          <Route path="/">
            <HomePage2 setPopup={setPopup} />
          </Route>
        </Switch>

        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: "0",
            left: "0",
            display: loading ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.9)",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "-200px",
            }}
          >
            <Loader color={"#E27A18"} size={50} />
          </div>
          <h4 style={{ padding: "30px", color: "#E27A17" }}>{loadingMsg}</h4>
        </div>
        <div style={{ width: "0", height: "0", overflow: "hidden" }}>
          <div
            style={{ backgroundImage: "url(/images/frame/lobby.jpg)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/drone.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/plant.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/top-menu.png)" }}
          ></div>
          <div style={{ backgroundImage: "url(/images/frame/logo.png)" }}></div>

          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/about.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/auction.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/button0.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/buyland.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/home.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/log-in.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/market.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/my-page.png)",
            }}
          ></div>
          <div
            style={{
              backgroundImage: "url(/images/frame/top-button/sign-up.png)",
            }}
          ></div>

          <div
            style={{ backgroundImage: "url(/images/frame/frame/about.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/frame/auction.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/frame/buy-land.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/frame/home.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/frame/login.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/frame/market.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/frame/mypage.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/frame/frame/signup.png)" }}
          ></div>

          <div
            style={{ backgroundImage: "url(/images/detail-frame/about.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/detail-frame/auction.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/detail-frame/buyland.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/detail-frame/home.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/detail-frame/login.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/detail-frame/market.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/detail-frame/signup.png)" }}
          ></div>
          <div
            style={{ backgroundImage: "url(/images/detail-frame/mypage.png)" }}
          ></div>
        </div>
      </div>
      <RequestSMS show={smsRequestShow} setShow={setSMSRequestShow} />
      <CertificateCheck confirm={confirm} setConfirm={setConfirm} />
      <CertificateInfoWindow alert={alert} />
    </>
  );
};

export default App;
