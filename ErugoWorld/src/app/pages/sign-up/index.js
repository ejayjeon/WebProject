import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GiConfirmed } from "react-icons/gi";
import {
  reqSMSAuthCode,
  reqJoin,
  requestLogin as login,
  checkPhoneNumberDuplicate,
} from "../../api";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";

const TopMenu = ({ language, setLanguage, languageCode, setLanguageCode }) => {
  const history = useHistory();
  const [nationalityCode, setNationalityCode] = useState(true);
  return (
    <div className={Style["top-menu-background"]}>
      <div
        className={Style["logo"]}
        onClick={() => {
          history.push("/main-entrance");
        }}
      ></div>
      <div className={Style["top-menu-width"]}></div>
      <div className={Style["top-menu-button-wrapper"]}>
        {languageCode === "ko" ? (
          <div
            style={{
              color: "transparent",
              backgroundImage: "url(/images/frame/top-button/FOR.png)",
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
          ></div>
        ) : (
          <div
            style={{
              color: "transparent",
              backgroundImage: "url(/images/frame/top-button/KOR.png)",
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
          ></div>
        )}
      </div>

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

const Input = ({
  tag,
  inputElement = null,
  type = "text",
  style = {},
  value,
  onChange,
  customEle,
}) => {
  return (
    <div className={Style["inputStyle"]}>
      <div
        style={{
          width: "90%",
          height: "40px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "90%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "12px",
          }}
        >
          {tag}
        </div>
        <div
          style={{
            width: "10%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {customEle}
        </div>
      </div>
      <div className={Style["inputStyle2"]}>
        {inputElement ? (
          inputElement
        ) : (
          <input
            className={Style["input"]}
            type={type}
            style={{
              width: "90%",
              height: "100%",
              padding: "10px",
              borderRadius: "4px",
              ...style,
            }}
            value={value}
            onChange={(e) => {
              if (onChange && typeof onChange === "function") {
                onChange(e.target.value);
              }
            }}
          />
        )}
      </div>
    </div>
  );
};

const CPClient = ({ encCode, setEncCode, cpComplete, phone, name }) => {
  return (
    <div className={Style["inputStyle"]}>
      <form name="form_chk" method="post">
        <input type="hidden" name="m" value="checkplusService" />
        <input type="hidden" name="EncodeData" value={encCode} />
      </form>
      <a
        style={{
          width: "90%",
          backgroundColor: "white",
          height: "40px",
          border: "1px solid gray",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "0 auto",
        }}
        className="pointer"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (cpComplete) {
            window.alert("이미 본인 인증을 완료하였습니다.");
            return;
          }
          fetch(`${window.hostAPI}/nice-id/checkplus_main`, {
            method: "post",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ message: "TEST" }),
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              setEncCode(data.sEncData);
              setTimeout(() => {
                window.name = "Parent_window";
                window.open(
                  "",
                  "popupChk",
                  "width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no"
                );
                document.form_chk.action =
                  "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
                document.form_chk.target = "popupChk";
                document.form_chk.submit();
              }, 400);
            })
            .catch((e) => {
              console.log(e);
            });
          /*
            
            */
        }}
      >
        <div
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {cpComplete ? "인증정보" : "안심본인인증"}
        </div>
        {cpComplete ? (
          <div
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {name}
          </div>
        ) : undefined}
        {cpComplete ? (
          <div
            style={{
              width: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {phone}
          </div>
        ) : undefined}
        <div
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GiConfirmed fontSize={"20px"} color={cpComplete ? "green" : "red"} />
        </div>
      </a>
    </div>
  );
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
const SignUp = ({
  setLoading,
  setLoadingMsg,
  currentFrame,
  setCurrentFrame,
  language,
  setLanguage,
  languageCode,
  setLanguageCode,
}) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState('')
  const [gender, setGender] = useState('')
  const [nationinfo, setNationinfo] = useState('')
  const [mobileco, setMobileco] = useState('')


  const [countryCode, setCountryCode] = useState(1);
  const [country, setCountry] = useState("kr");
  const [pinNumber, setPinNumber] = useState("");
  const [authKey, setAuthKey] = useState("");
  const [recomCode, setRecomCode] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  // 한글 Term
  const [terms01, setTerms01] = useState("");
  const [terms02, setTerms02] = useState("");
  const [terms03, setTerms03] = useState("");
  const [terms04, setTerms04] = useState("");
  // 영문 Term
  const [terms05, setTerms05] = useState("");
  const [terms06, setTerms06] = useState("");
  const [terms07, setTerms07] = useState("");
  const [terms08, setTerms08] = useState("");
  const [termsChecked, setTermsChecked] = useState([
    false,
    false,
    false,
    false,
    // false,
    // false,
    // false,
    // false,
  ]);

  const [encCode, setEncCode] = useState("");
  const [cpComplete, setCpComplete] = useState(false);
  //const [socketHandler, setSocketHandler] = useState({ sendMsg: () => { } })
  useEffect(() => {
    fetch(`${window.hostAPI}/terms/download-01`, {
      method: "get",
    })
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        setTerms01(data);

        fetch(`${window.hostAPI}/terms/download-02`, {
          method: "get",
        })
          .then((res) => {
            return res.text();
          })
          .then((data) => {
            setTerms02(data);

            fetch(
              `${window.hostAPI}/terms/download-03`,
              {
                method: "get",
              }
            )
              .then((res) => {
                return res.text();
              })
              .then((data) => {
                setTerms03(data);

                fetch(
                  `${window.hostAPI}/terms/download-04`,
                  {
                    method: "get",
                  }
                )
                  .then((res) => {
                    return res.text();
                  })
                  .then((data) => {
                    setTerms04(data);
                  })
                  .catch((e) => {
                    console.log(e);
                  });
              })
              .catch((e) => {
                console.log(e);
              });
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      }, []);
    /*
    function messageReceiver(e) {

      //if (e.origin !== 'https://erugoworld.com' && e.origin !== 'https://erugoworld.appzero.services') return

      console.log('success')
      setPhone(e.data.phone)
      setName(e.data.name)
      setCpComplete(true)
      setTimeout(() => {
        window.alert('인증이 완료 되었습니다. 회원가입을 위한 남은 과정을 진행해 주세요.')
      }, 200)
    }
    //window.addEventListener('message', messageReceiver, false)

    return function removeListener() {
      window.removeEventListener('message', messageReceiver)
    }*/
    if (checkMobile() === 'ios') {
      window.cpComplete = (data) => {
        if(data.phone === undefined || data.phone === '' || data.phone === 'undefined'){
          return
        }
        if(data.name === undefined || data.name === '' || data.name === 'undefined'){
          return
        }
        //window.alert(`phone : ${data.phone}, name : ${data.name}`)    
        console.log('success')
        console.log(data)
        setPhone(data.phone)
        setName(data.name)
        setGender(data.gender)
        setBirthday(data.birthday)
        setNationinfo(data.nationinfo)
        setMobileco(data.mobileco)
        setCpComplete(true)
        if (checkMobile() === 'ios') {
          return
        }
      }
      /*
      window.addEventListener('message', (e) => {
        e.preventDefault()
        e.stopPropagation()
        setPhone(e.data.phone)
        setName(e.data.name)
        setCpComplete(true)

      }, false)*/
    } else {

      window.cpComplete = (data) => {
        if(data.phone === undefined || data.phone === '' || data.phone === 'undefined'){
          return
        }
        if(data.name === undefined || data.name === '' || data.name === 'undefined'){
          return
        }
        //window.alert(`phone : ${data.phone}, name : ${data.name}`)
        console.log('success')
        console.log(data)
        setPhone(data.phone)
        setName(data.name)
        setGender(data.gender)
        setBirthday(data.birthday)
        setNationinfo(data.nationinfo)
        setMobileco(data.mobileco)
        setCpComplete(true)
        if (checkMobile() === 'ios') {
          return
        }
        setTimeout(() => {
          window.alert('인증이 완료 되었습니다. 회원가입을 위한 남은 과정을 진행해 주세요.')
        }, 200)
      }
    }
    // console.log(language);
  }, []);

  return (
    <div className={Style["out-bg"]}>
      <TopMenu
        language={language}
        languageCode={languageCode}
        setLanguage={setLanguage}
        setLanguageCode={setLanguageCode}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={Style["sign-bg"]}
      >
        <div
          className={Style["sroll-none"]}
          style={{ width: "640px", height: "100%" }}
        >
          <div className={Style["column"]} style={{}}>
            <div className={Style["title"]}>
              <img
                className={Style["logoStyle"]}
                src={require("./images/logo.png").default}
                alt=""
              />
              {"  "}
              {language["login-04"]}
            </div>
            <Input
              tag={language["login-08"]}
              value={email}
              onChange={(email) => {
                if (email.includes(' ')) {
                  return
                }
                setEmail(email);
              }}
            />
            <Input
              tag={`${language["login-09"]}`}
              type="password"
              value={password}
              onChange={(password) => {
                let reg = /^[a-zA-Z0-9]*$/;
                if (reg.test(password)) {
                  setPassword(password);
                }
              }}
            />
            <Input
              tag={language["login-10"]}
              type="password"
              style={{
                backgroundColor:
                  password === passwordConfirm
                    ? "white"
                    : "rgba(250,200,200, 0.4)",
              }}
              onChange={(passwordConfirm) => {
                setPasswordConfirm(passwordConfirm);
              }}
              customEle={
                <GiConfirmed
                  style={{ marginRight: "10px" }}
                  fontSize={"22px"}
                  color={
                    password === passwordConfirm && password !== ""
                      ? "rgba(0,150,0,1)"
                      : "rgba(250,0,0, 1)"
                  }
                />
              }
            />
            <Input
              type="password"
              tag={language["login-07"]}
              value={pinNumber}
              onChange={(pin) => {
                if (pin.length > 4) {
                  return;
                } else {
                  let reg = /^[0-9]*$/;
                  if (reg.test(pin)) {
                    setPinNumber(pin);
                  }
                }
              }}
            />
            <br />
            {/* 약관 */}
            <div>
              <div className={Style["radioButton"]}>
                <input
                  type="checkbox"
                  className={Style["inputCheck"]}
                  checked={termsChecked[0]}
                  onChange={(e) => {
                    let tempTermsChecked = JSON.parse(
                      JSON.stringify(termsChecked)
                    );
                    tempTermsChecked[0] = e.target.checked;
                    setTermsChecked(tempTermsChecked);
                  }}
                />
                <span className={Style["check-title"]}>
                  {language["login-13"]}
                </span>
              </div>

              <div
                className={Style["policy"]}
                dangerouslySetInnerHTML={{ __html: terms01 }}
              ></div>
            </div>

            {/* 개인정보수집동의서 */}
            <div>
              <div className={Style["radioButton"]}>
                <input
                  type="checkbox"
                  className={Style["inputCheck"]}
                  checked={termsChecked[1]}
                  onChange={(e) => {
                    let tempTermsChecked = JSON.parse(
                      JSON.stringify(termsChecked)
                    );
                    tempTermsChecked[1] = e.target.checked;
                    setTermsChecked(tempTermsChecked);
                  }}
                />
                <span className={Style["check-title"]}>
                  {" "}
                  {language["login-14"]}{" "}
                </span>
              </div>

              <div
                className={Style["policy"]}
                dangerouslySetInnerHTML={{ __html: terms02 }}
              ></div>
            </div>

            {/* 위치정보 이용약관*/}
            <div>
              <div className={Style["radioButton"]}>
                <input
                  type="checkbox"
                  className={Style["inputCheck"]}
                  checked={termsChecked[2]}
                  onChange={(e) => {
                    let tempTermsChecked = JSON.parse(
                      JSON.stringify(termsChecked)
                    );
                    tempTermsChecked[2] = e.target.checked;
                    setTermsChecked(tempTermsChecked);
                  }}
                />
                <span className={Style["check-title"]}>
                  {" "}
                  {language["login-15"]}{" "}
                </span>
              </div>

              <div
                className={Style["policy"]}
                dangerouslySetInnerHTML={{ __html: terms03 }}
              ></div>
            </div>

            {/* 청소년보호정책*/}
            <div>
              <div className={Style["radioButton"]}>
                <input
                  type="checkbox"
                  className={Style["inputCheck"]}
                  checked={termsChecked[3]}
                  onChange={(e) => {
                    let tempTermsChecked = JSON.parse(
                      JSON.stringify(termsChecked)
                    );
                    tempTermsChecked[3] = e.target.checked;
                    setTermsChecked(tempTermsChecked);
                  }}
                />
                <span className={Style["check-title"]}>
                  {" "}
                  {language["login-16"]}{" "}
                </span>
              </div>

              <div
                className={Style["policy"]}
                dangerouslySetInnerHTML={{ __html: terms04 }}
              ></div>
            </div>
            <br />

            {languageCode === "eng" ? (
              <div
                className="foreignCheck"
                style={{
                  width: "100%",
                  display: "block",
                }}
              >
                {/*  */}

                <Input
                  tag={language["login-12"]}
                  inputElement={
                    <div
                      style={{
                        width: "100%",
                        height: "40px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <PhoneInput
                        containerStyle={{
                          boxSizing: "border-box",
                          borderRadius: "4px",
                          width: "calc(90% - 200px)",
                          height: "40px",
                          border: "0px solid white",
                        }}
                        buttonStyle={{
                          backgroundColor: "white",
                          borderTop: onFocus
                            ? "2px solid rgb(225, 122, 24)"
                            : "1px solid gray",
                          borderLeft: onFocus
                            ? "2px solid rgb(225, 122, 24)"
                            : "1px solid gray",
                          borderBottom: onFocus
                            ? "2px solid rgb(225, 122, 24)"
                            : "1px solid gray",
                        }}
                        inputStyle={{
                          width: "100%",
                          height: "40px",
                          border: onFocus
                            ? "2px solid rgb(225, 122, 24)"
                            : "1px solid gray",
                          color: "rgb(225, 122, 24)",
                        }}
                        onFocus={(e) => {
                          setOnFocus(true);
                        }}
                        onBlur={(e) => {
                          setOnFocus(false);
                        }}
                        country={country}
                        value={phone}
                        onChange={(value, country, e, formattedValue) => {
                          setCountry(country.countryCode);
                          setCountryCode(country.dialCode);
                          setPhone(value);
                        }}
                      />
                      <div
                        className="pointer"
                        style={{
                          width: "180px",
                          height: "40px",
                          backgroundColor: "rgb(225, 122, 24)",
                          color: "white",
                          fontSize: "12px",
                          borderRadius: "4px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        onClick={(e) => {
                          let country_dial = countryCode;
                          let request_phone = phone.slice(
                            countryCode.length,
                            phone.length
                          );
                          if (
                            request_phone === "" ||
                            request_phone === undefined ||
                            request_phone === null
                          ) {
                            window.alert("올바른 전화번호가 아닙니다.");
                            return;
                          }
                          reqSMSAuthCode({
                            country_dial,
                            phone: request_phone,
                            callback: (err, response) => {
                              if (err) {
                                console.log(err);
                              } else {
                                if (
                                  response.result === "success" &&
                                  response.message.result === true
                                ) {
                                  console.log(response.message);
                                  setAuthKey(`${response.message.authkey}`);
                                  window.alert("인증번호를 확인해 주세요");
                                } else {
                                  window.alert(
                                    "인증 번호 요청에 실패 하였습니다."
                                  );
                                  setPhone(countryCode);
                                }
                              }
                            },
                          });
                        }}
                      >
                        Send Auth Code
                      </div>
                    </div>
                  }
                />
                <Input
                  tag={language["login-06"]}
                  value={recomCode}
                  style={{
                    backgroundColor:
                      recomCode === "" ||
                        authKey === "" ||
                        recomCode === authKey
                        ? "white"
                        : "rgba(250,200,200, 0.4)",
                  }}
                  onChange={(e) => {
                    setRecomCode(e);
                  }}
                  customEle={
                    <GiConfirmed
                      style={{ marginRight: "10px" }}
                      fontSize={"22px"}
                      color={
                        recomCode !== "" &&
                          authKey !== "" &&
                          recomCode === authKey
                          ? "rgba(0,150,0,1)"
                          : "rgba(250,0,0, 1)"
                      }
                    />
                  }
                />
                <br />
                {/* <Input
                  tag={language["login-20"]}
                  value={""}
                  type="file"
                  style={{ backgroundColor: "white" }}
                /> */}
                <Form.Group
                  controlId="formFileLg formFileMultiple"
                  className="mb-3"
                >
                  <p
                    style={{
                      margin: "0 5%",
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginBottom: "2%",
                    }}
                  >
                    {language["login-20"]}
                  </p>
                  <Form.Control
                    type="file"
                    size="lg"
                    multiple
                    style={{
                      border: ".5px solid #898989",
                      width: "90%",
                      margin: "0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  />
                </Form.Group>
                <br />
                {/*  */}
              </div>
            ) : (
              <div
                className="foreignCheck"
                style={{
                  width: "100%",
                  display: "block",
                }}
              >
                <CPClient
                  encCode={encCode}
                  setEncCode={setEncCode}
                  cpComplete={cpComplete}
                  phone={phone}
                  name={name}
                />
              </div>
            )}

            <div className={Style["signUpBtn1"]}>
              <div
                className={`${Style["signUpBtn"]} pointer`}
                onClick={() => {
                  if (
                    !email.includes("@") ||
                    email.split("@")[0].length < 2 ||
                    email.split("@")[1].length < 3 ||
                    !email.split("@")[1].includes(".")
                  ) {
                    //socketHandler.sendMsg({command:'log', log : 'email not appropriate'})
                    window.alert("올바른 이메일 형식이 아닙니다.");
                    return;
                  } else if (password.length < 4) {
                    //socketHandler.sendMsg({command:'log', log : 'password is too short'})
                    window.alert("비밀번호가 너무 짧습니다.");
                    return;
                  } /* else if (name.length < 1) {
                    //socketHandler.sendMsg({command:'log', log : 'name is too short'})
                    window.alert("옳바른 이름을 입력해 주세요");
                    return;
                  } else if (
                    recomCode === "" ||
                    authKey === "" ||
                    recomCode !== authKey
                  ) {
                    //socketHandler.sendMsg({command:'log', log : 'sms auth code not match'})
                    window.alert("SMS 인증 코드가 일치하지 않습니다.");
                    return;
                  } */ else if (passwordConfirm !== password) {
                    //socketHandler.sendMsg({command:'log', log : 'password confirm not match not match'})
                    window.alert(
                      "비밀번호와 비밀번호 확인이 일치하지 않습니다."
                    );
                    return;
                  } else if (pinNumber.length !== 4) {
                    window.alert("핀넘버는 4자리 숫자여야 합니다.");
                    return;
                  } else if (
                    !termsChecked[0] ||
                    !termsChecked[1] ||
                    !termsChecked[2] ||
                    !termsChecked[3]
                  ) {
                    window.alert("모든 약관에 확인해 주세요");
                    return;
                  } else if (!cpComplete) {
                    window.alert(
                      "본인 인증이 완료 되지 않았습니다. 본인 인증 완료 후 회원가입 가능합니다."
                    );
                    return;
                  }

                  setLoadingMsg(
                    "회원 가입 중입니다. 시큐리티 월렛 계정 생성으로 최장 30초 정도 소요될 수 있으니, 잠시만 기다려주세요."
                  );
                  setLoading(true);
                  const doJoin = () => {
                    reqJoin({
                      email,
                      countryDial: countryCode,
                      name,
                      password,
                      phone: phone,
                      pin: pinNumber,
                      birthday: birthday,
                      gender: gender,
                      mobileco: mobileco,
                      nationinfo: nationinfo,
                      callback: (err, response) => {
                        if (err) {
                          setLoading(false);
                          console.log(err);
                          //socketHandler.sendMsg({command:'log', log : err.toString()})
                        } else {
                          console.log(response)
                          if (response.result === "success" && response.message.result === true) {
                            setLoading(false);
                            console.log(response);
                            //setCurrentFrame("login");
                            setTimeout(() => {
                              history.push("/main-entrance");
                            }, 200);
                          } else {
                            setLoading(false);
                            window.alert(`이메일 중복입니다.`);
                            //socketHandler.sendMsg({command:'log', log : response.message.err})
                          }
                        }
                      },
                    });
                  }
                  doJoin()
                  /*
                  checkPhoneNumberDuplicate({
                    phone: phone,
                    country_dial: countryCode,
                    callback: (err, phoneNumberCheck) => {
                      if (err) {
                        console.log(err)
                      } else {
                        console.log(phoneNumberCheck)
                        if (phoneNumberCheck.result === 'success') {
                          doJoin()
                        } else {
                          setLoading(false)
                          window.alert('이미 회원가입한 전화 번호 입니다.')
                        }
                      }
                    }
                  })
                  */

                  //socketHandler.sendMsg({command:'log', log : 'request join', name, password, phone:phone.slice(countryCode.length, phone.length), pin:pinNumber, email})
                }}
              >
                SIGN UP
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
