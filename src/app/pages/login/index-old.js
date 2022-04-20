import React, { useEffect, useState } from "react";
import Style from "./login.module.css";
import { SButton, STitle } from "../../components";
import { useHistory } from "react-router-dom";
import { addEventTargetUser, checkCPComplete, readInfo, requestLogin } from "../../api";
import { IoMdConstruct } from 'react-icons/io'

const TopMenu = () => {
  const history = useHistory();
  return (
    <div className={Style["top-menu-background"]}>
      <div
        className={Style["logo"]}
        onClick={() => {
          history.push("/main-entrance");
        }}
      ></div>
      <div className={Style["top-menu-button-wrapper"]}>
        <div
          className={`${Style["top-menu-button"]} ${Style["back-button"]} pointer`}
          onClick={() => {
            history.push("/main-entrance");
          }}
        ></div>
      </div>
    </div>
  );
};

const cpCheck_global = {
  name: '', phone: '', email: '', password: ''
}
function checkMobile() {

  var varUA = navigator.userAgent.toLowerCase();
  if (varUA.indexOf('android') > -1) {
    return "android";
  } else if (varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 || varUA.indexOf("ipod") > -1) {
    return "ios";
  } else {
    return "other";
  }

}
const _LoginPage = ({
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
}) => {

  const history = useHistory();
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");

  const [encCode, setEncCode] = useState('')
  const [cpCheck, setCpCheck] = useState({ name: '', phone: '' })

  const [dataMatch, setDataMatch] = useState(false)

  useEffect(() => {
    const onPressEnter = event => {
      if (event.key === "Enter" || event.key === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        event.preventDefault();
        document.getElementById('signinBtn').click();
      }
    };
    document.addEventListener("keydown", onPressEnter);
    return () => {
      document.removeEventListener("keydown", onPressEnter);
    };
  }, []);


  cpCheck_global.name = cpCheck.name
  cpCheck_global.phone = cpCheck.phone
  cpCheck_global.password = password
  cpCheck_global.email = tempEmail

  useEffect(() => {

    function messageReceiver(data) {

      //if(e.origin !== 'https://erugoworld.com' && e.origin !== 'https://erugoworld.appzero.services') return

      console.log(`phone : ${cpCheck_global.phone}, name : ${cpCheck_global.name}`)

      setTimeout(() => {


        
        if (cpCheck_global.name !== data.name && cpCheck_global.phone !== data.name) {
          window.alert('본인 인증 정보가 일치 하지 않습니다. 다시 회원가입을 해 주세요.')
          setLoadingMsg('인증 정보 불일 치. 회원가입 페이지로 이동중.....')
          setTimeout(() => {
            setLoadingMsg('')
            setLoading(false)
            history.push('/sign-up')
          }, 2000)
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
                  window.alert("로그인에 실패하였습니다.");
                } else {
                  let d = response.userInfo;
                  setUserUUID(d.uuid);
                  setWallet(d.wallet);
                  sessionStorage.setItem("userUUID", d.uuid);
                  sessionStorage.setItem("wallet", d.wallet);
                  sessionStorage.setItem('key', d.key)
                  history.push("/main-entrance");

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
                            callback: (err, addUserResult) => {
                              setCoin(coin);
                              setEther(ether);
                              setEWC(ewc);
                              setPhone(phone);
                              setName(name);
                              setEmail(email);
                              setSwId(swId);
                              setPoints(point);
                              setIsLogin(true);
                            }
                          })
                        }
                      }
                    },
                  });

                  setLoading(false);
                  onClose();
                }
              }
            },
          });




        }
      }, 200)
    }

    window.cpComplete = (data) => {
      messageReceiver(data)
    }
  }, [])

  return (
    <React.Fragment>
      <div
        className={Style["backgroundImg"]}
      >
        <TopMenu />
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
              <div className={`pointer ${Style["signinBtn"]}`}
              id={'signinBtn'}
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  if (tempEmail === undefined || tempEmail === "") {
                    window.alert("이메일을 입력해 주세요");
                    return;
                  }
                  if (password === undefined || password === "") {
                    window.alert("비밀번호를 입력해 주세요");
                    return;
                  }
                  //setLoadingMsg('로그인 진행 중입니다.')
                  setLoading(true);


                  checkCPComplete({
                    email: tempEmail,
                    password: password,
                    callback: (err, response) => {
                      if (err) {
                        console.log(err)
                        window.alert('통신 장애가 있습니다. 관리자에게 문의해 주세요.')
                        setLoading(false)
                      } else {




                        if (response.result === 'success') {
                          if (response.cpComplete === true) {
                            

                            requestLogin({
                              email: tempEmail,
                              password,
                              callback: (err, response) => {
                                setTempEmail("");
                                setPassword("");
                                if (err) {
                                  setLoading(false);
                                  console.log(err);
                                } else {
                                  if (response.result !== "success") {
                                    setLoading(false);
                                    window.alert("로그인에 실패하였습니다.");
                                  } else {
                                    let d = response.userInfo;
                                    setUserUUID(d.uuid);
                                    setWallet(d.wallet);
                                    sessionStorage.setItem("userUUID", d.uuid);
                                    sessionStorage.setItem("wallet", d.wallet);
                                    sessionStorage.setItem('key', d.key)
                                    console.log(`key : ${d.key}`)
                                    history.push("/main-entrance");
                                    //window.location.reload();
                                    /*
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
                                            //setCoin(coin);
                                            setEther(ether);
                                            //setEWC(ewc);
                                            //setPhone(phone);
                                            //setName(name);
                                            //setEmail(email);
                                            //setSwId(swId);
                                            //setPoints(point);
                                            //setIsLogin(true);
                                          }
                                        }
                                      },
                                    });
                                    */

                                    setLoading(false);
                                    onClose();
                                  }
                                }
                              },
                            });



                          } else {
                            console.log(response)
                            setCpCheck({ name: response.name, phone: response.phone })
                            if (!window.confirm('인증을 하지 않은 사용자 입니다. 인증 후 서비스 이용이 가능합니다. 인증을 진행 하시겠습니까?')) {
                              setTempEmail('')
                              setEmail('')
                              setLoading(false)
                              return
                            }
                            setLoadingMsg('인증 진행 중입니다.')
                            fetch('https://erugoworld.appzero.services/checkplus-request', {
                              method: 'post',
                              headers: {
                                'content-type': 'application/json'
                              },
                              body: JSON.stringify({})
                            })
                              .then((res) => { return res.json() })
                              .then((data) => {
                                setEncCode(data.sEncData)
                                setTimeout(() => {

                                  window.name = "Parent_window";
                                  window.open('', 'popupChk', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
                                  document.form_chk_login.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
                                  document.form_chk_login.target = "popupChk";
                                  document.form_chk_login.submit();
                                }, 400)
                              })
                              .catch(
                                (e) => {
                                  console.log(e)
                                }
                              )

                          }
                        } else {
                          console.log(response)
                          window.alert('회원정보가 잘못되었습니다. 다시 확인해 주세요. ErrorMsg : ' + response.err)
                          setTempEmail('')
                          setPassword('')
                          setLoading(false)
                        }
                      }
                    }
                  })
                }}
              >
                SIGN IN
              </div>
              <span
                className={Style['loginInfo']}
              >
                <small>
                  {" "}
                  {language['login-01']}
                  <br />
                  {language['login-02']}



                </small>
              </span>
            </div>
            <div
              className={Style["footerMenu"]}
            >
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

      <div style={{ display: 'none', width: '0', height: '0', overflow: 'hidden' }}>
        <form name="form_chk_login" method="post" >
          <input type="hidden" name="m" value="checkplusService" />
          <input type="hidden" name="EncodeData" value={encCode} />
        </form>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoginPage = ({
  setLoading,
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
  temporaryData = {}
}) => {

  console.log('temporaryData : ')
  console.log(temporaryData)
  const history = useHistory();
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");



  return (
    <React.Fragment>
      <div
        className={Style["backgroundImg"]}
      >
        <div style={{ width: '300px', height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: '10px', fontSize: '12px', gap: '10px' }}>
          <IoMdConstruct fontSize={'30px'} /> {temporaryData.loginProtectText}
        </div>
      </div>
    </React.Fragment>
  );
};
export default _LoginPage;
