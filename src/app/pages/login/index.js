import React, { useEffect, useState } from "react";
import Style from "./login.module.css";
import { SButton, STitle } from "../../components";
import { useHistory } from "react-router-dom";
import {
  checkMember,
  addEventTargetUser,
  checkCPComplete,
  readInfo,
  requestLogin,
} from "../../api";
import { IoMdConstruct } from "react-icons/io";

// const TopMenu = () => {
//   const history = useHistory();
//   return (
//     <div className={Style["top-menu-background"]}>
//       <div
//         className={Style["logo"]}
//         onClick={() => {
//           history.push("/main-entrance");
//         }}
//       ></div>
//       <div className={Style["top-menu-button-wrapper"]}>
//         <div
//           className={`${Style["top-menu-button"]} ${Style["back-button"]} pointer`}
//           onClick={() => {
//             history.push("/main-entrance");
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

const cpCheck_global = {
  name: "",
  phone: "",
  email: "",
  password: "",
};
function checkMobile() {
  var varUA = navigator.userAgent.toLowerCase();
  if (varUA.indexOf("android") > -1) {
    return "android";
  } else if (
    varUA.indexOf("iphone") > -1 ||
    varUA.indexOf("ipad") > -1 ||
    varUA.indexOf("ipod") > -1
  ) {
    return "ios";
  } else {
    return "other";
  }
}
const LoginPage = ({
  setLoading,
  setLoadingMsg,
  setUserUUID,
  setWallet,
  setPoints,
  setEmail,
  setName,
  setPhone,
  setCoin,
  setEWC,
  setSwId,
  setEther,
  setCurrentFrame,
  onClose,
  isLogin,
  setIsLogin,
  language,
  setConfirm,
  alert,
  setAlert,
}) => {
  const history = useHistory();
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cpCheck, setCpCheck] = useState({ name: "", phone: "" });

  useEffect(() => {
    const onPressEnter = (event) => {
      if (event.key === "Enter" || event.key === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        document.getElementById("signinBtn").click();
      }
    };
    document.addEventListener("keydown", onPressEnter);
    return () => {
      document.removeEventListener("keydown", onPressEnter);
    };
  }, []);

  cpCheck_global.name = cpCheck.name;
  cpCheck_global.phone = cpCheck.phone;
  cpCheck_global.password = password;
  cpCheck_global.email = tempEmail;

  useEffect(() => {
    function messageReceiver(data) {
      //if(e.origin !== 'https://erugoworld.com' && e.origin !== 'https://erugoworld.appzero.services') return

      console.log(
        `phone : ${cpCheck_global.phone}, name : ${cpCheck_global.name}`
      );

      setTimeout(() => {
        if (
          cpCheck_global.name !== data.name &&
          cpCheck_global.phone !== data.name
        ) {
          setAlert({
            show: true,
            text: `본인인증 정보가 일치하지 않습니다. \n다시 회원가입을 해주세요.`,
            callback: () => {
              setAlert({ show: false, text: "", callback: () => {} });
              setTimeout(() => {
                setLoading(true);
                setLoadingMsg(
                  "인증 정보 불일 치. 회원가입 페이지로 이동중입니다."
                );
                setTimeout(() => {
                  setLoadingMsg("");
                  setLoading(false);
                  history.push("/sign-up");
                }, 500);
              }, 1000);
            },
          });
        } else {
          requestLogin({
            email: cpCheck_global.email,
            password: cpCheck_global.password,
            callback: (err, response) => {
              setTempEmail("");
              setPassword("");
              if (err) {
                setLoading(false);
                console.log(err);
              } else {
                if (response.result !== "success") {
                  setLoading(false);
                  setAlert({
                    show: true,
                    text: "로그인에 실패하였습니다.",
                    callback: () => {
                      setAlert({
                        show: false,
                        text: "",
                        callback: () => {},
                      });
                    },
                  });
                } else {
                  let d = response.userInfo;
                  setUserUUID(d.uuid);
                  setWallet(d.wallet);
                  sessionStorage.setItem("userUUID", d.uuid);
                  sessionStorage.setItem("wallet", d.wallet);
                  sessionStorage.setItem("key", d.key);
                  setAlert({
                    show: true,
                    text: "로그인에 성공하였습니다.",
                    callback: () => {
                      readInfo({
                        uuid: d.uuid,
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
                              addEventTargetUser({
                                swId: swId,
                                phone: phone,
                                email: email,
                                birthday: data.birthday,
                                gender: data.gender,
                                nationinfo: data.nationinfo,
                                mobileco: data.mobileco,
                                name: data.name,
                                callback: (err, addUserResult) => {
                                  console.log(
                                    "Add UserResult Success!!!!!!!!!!!"
                                  );
                                  setCoin(coin);
                                  setEther(ether);
                                  setEWC(ewc);
                                  setPhone(phone);
                                  setName(name);
                                  setEmail(email);
                                  setSwId(swId);
                                  setPoints(point);
                                  setIsLogin(true);
                                },
                              });
                            }
                          }
                        },
                      });

                      setLoading(false);
                      onClose();

                      setAlert({
                        show: false,
                        text: "",
                        callback: () => {},
                      });
                      setTimeout(() => {
                        history.push("/main-entrance");
                      }, 200);
                    },
                  });
                }
              }
            },
          });
        }
      }, 200);
    }

    window.cpComplete = (data) => {
      messageReceiver(data);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={Style["backgroundImg"]}>
        {/* <TopMenu /> */}
        <div className={Style["loginBg"]}>
          {isLogin ? (
            <div
              className="pointer"
              style={{
                width: "220px",
                height: "55px",
                border: "1px solid #e17a18",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                color: "#e17a18",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
              onClick={() => {
                setUserUUID(undefined);
                setIsLogin(false);
                sessionStorage.removeItem("userUUID");
                sessionStorage.removeItem("walletAddress");
                //history.push('/home')
              }}
            >
              로그아웃
            </div>
          ) : (
            <div className={Style["loginWindow"]}>
              <div className={Style["loginTitle2"]}>ERUGO WORLD</div>

              <div className={Style["emailTitle"]}>
                <div className={Style["emailTitle2"]}>
                  <div className={Style["emailTitle3"]}>Email</div>
                  <input
                    className={Style["emailInput"]}
                    type="text"
                    value={tempEmail}
                    onChange={(e) => {
                      setTempEmail(e.target.value);
                    }}
                  />
                </div>
                <div className={Style["pwdTitle"]}>
                  <div className={Style["pwdTitle2"]}>Password</div>
                  <input
                    className={Style["pwdInput"]}
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div
                  className={`pointer ${Style["signinBtn"]}`}
                  id={"signinBtn"}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    if (tempEmail === undefined || tempEmail === "") {
                      window.alert("이메일을 입력해 주세요");
                      return;
                    }
                    if (password === undefined || password === "") {
                      window.alert("비밀번호를 입력해 주세요");
                      return;
                    }

                    setLoading(true);
                    checkMember({
                      email: tempEmail,
                      password: password,
                      callback: (err, checkMemberResponse) => {
                        if (err) {
                          console.log(err);
                          setLoading(false);
                          window.alert(
                            "서버오류가 발생했습니다. 잠시 후 다시 실행해 주세요."
                          );
                        } else {
                          console.log(checkMemberResponse);
                          if (checkMemberResponse.result === false) {
                            setLoading(false);
                            window.alert(
                              "로그인에 실패하였습니다. 아이디 또는 비밀번호가 일치하지 않습니다."
                            );
                          } else {
                            checkCPComplete({
                              email: tempEmail,
                              callback: (err, checkCPCompleteResponse) => {
                                if (err) {
                                  console.log(err);
                                } else {
                                  console.log(checkCPCompleteResponse);
                                  setCpCheck({
                                    name: checkCPCompleteResponse.name,
                                    phone: checkCPCompleteResponse.phone,
                                  });
                                  if (
                                    checkCPCompleteResponse.result !== "success"
                                  ) {
                                    window.alert(
                                      "서버오류가 발생했습니다. 잠시 후 다시 실행해 주세요."
                                    );
                                    return;
                                  }
                                  if (
                                    checkCPCompleteResponse.cpComplete === true
                                  ) {
                                    requestLogin({
                                      email: tempEmail,
                                      password: password,
                                      callback: (err, response) => {
                                        setTempEmail("");
                                        setPassword("");
                                        if (err) {
                                          setLoading(false);
                                          window.alert(
                                            "로그인 중에 알수 없는 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
                                          );
                                          console.log(err);
                                        } else {
                                          if (response.result !== "success") {
                                            setLoading(false);
                                            window.alert(
                                              "로그인에 실패하였습니다."
                                            );
                                          } else {
                                            // 옥션이나 마켓에서 로그인 시 분기 필요 ??
                                            let d = response.userInfo;
                                            setUserUUID(d.uuid);
                                            setWallet(d.wallet);
                                            sessionStorage.setItem(
                                              "userUUID",
                                              d.uuid
                                            );
                                            sessionStorage.setItem(
                                              "wallet",
                                              d.wallet
                                            );
                                            sessionStorage.setItem(
                                              "key",
                                              d.key
                                            );
                                            console.log(`key : ${d.key}`);
                                            history.push("/main-entrance");

                                            setLoading(false);
                                            onClose();
                                          }
                                        }
                                      },
                                    });
                                  } else {
                                    setLoading(false);
                                    setConfirm(true);
                                  }
                                }
                              },
                            });
                          }
                        }
                      },
                    });
                  }}
                >
                  SIGN IN
                </div>
                <span className={Style["loginInfo"]}>
                  <small>
                    {" "}
                    {language["login-01"]}
                    <br />
                    {language["login-02"]}
                  </small>
                </span>
              </div>
              <div className={Style["footerMenu"]}>
                <div
                  className={Style["sign-in"]}
                  onClick={() => {
                    history.push("/sign-up");
                  }}
                >
                  SIGN UP
                </div>
                <div
                  className={Style["reset-password"]}
                  onClick={() => {
                    history.push("/reset-password");
                  }}
                >
                  RESET PASSWORD
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
