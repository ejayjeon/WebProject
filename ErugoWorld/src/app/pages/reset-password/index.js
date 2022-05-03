import React, { useState } from "react";
import Style from "./style.module.css";
import {
  reqSMSAuthCode,
  reqMemberInfo,
  reqResetPassword,
  reqSMSAuthCode2,
} from "../../api";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { GiConfirmed } from "react-icons/gi";
import { useHistory } from "react-router-dom";

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
    <div
      style={{
        width: "90%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "12px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "40px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          {tag}
        </div>
        <div
          style={{
            width: "0%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {customEle}
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {inputElement ? (
          inputElement
        ) : (
          <input
            className={Style["input"]}
            type={type}
            style={{
              width: "100%",
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

const ResetPassword = ({ setLoading, setLoadingMsg, language }) => {
  const [email, setEmail] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState(82);
  const [country, setCountry] = useState("kr");
  const [authKey, setAuthKey] = useState("");
  const [recomCode, setRecomCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [uuid, setUUID] = useState("");

  const [showStep2, setShowStep2] = useState(false);
  const history = useHistory();
  return (
    <div className={Style["out-bg"]}>
      <TopMenu />
      <div className={Style["container"]}>
        <div className={Style["resetPw-bg"]}>
          <div className={Style["titleBox"]}>
            <img
              src={require("./images/logo.png").default}
              className={Style["logoimg"]}
              alt="erugoworld logo"
            />
            <div className={Style["title"]}>ERUGO WORLD</div>
            {/* <div
              style={{
                width: "0",
                height: "50px",
                backgroundImage: "url(logo.png)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div> */}
          </div>
          <Input
            tag={"Email"}
            value={email}
            onChange={(email) => {
              setEmail(email);
            }}
          />
          <Input
            tag={"Phone"}
            inputElement={
              <div className={Style["phoneBox"]}>
                <PhoneInput
                  containerStyle={{
                    boxSizing: "border-box",
                    borderRadius: "4px",
                    height: "40px",
                    border: "0px solid white",
                  }}
                  className={Style["phoneNum"]}
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
                  className={Style["pointer"]}
                  onClick={(e) => {
                    let country_dial = countryCode;
                    let request_phone = phone.slice(
                      countryCode.length,
                      phone.length
                    );
                    if (
                      !email.includes("@") ||
                      email.split("@")[0].length < 2 ||
                      email.split("@")[1].length < 3 ||
                      !email.split("@")[1].includes(".")
                    ) {
                      window.alert("Not appropriate email!");
                      return;
                    } else if (
                      country_dial === "" ||
                      request_phone === "" ||
                      request_phone.length < 4
                    ) {
                      window.alert("Not appropriate phone number!");
                      return;
                    }
                    reqMemberInfo({
                      id: email,
                      callback: (err, response) => {
                        if (err) {
                          console.log(err);
                        } else {
                          console.log(response)
                          if (response.result === "success" && response.message.result === true ) {
                            if (
                              response.message.country_dial === country_dial &&
                              response.message.phone === request_phone
                            ) {
                              setUUID(response.message.uuid);
                              reqSMSAuthCode2({
                                country_dial,
                                phone: request_phone,
                                callback: (err, response) => {
                                  if (err) {
                                    console.log(err);
                                    window.alert('알수 없는 에러가 발생했습니다. 관리자에게 문의해 주세요.')
                                  } else {
                                    console.log(response)
                                    if (
                                      response.result === "success" &&
                                      response.message.result === true
                                    ) {
                                      console.log(response.message);
                                      setAuthKey(`${response.message.authkey}`);
                                      window.alert("메시지를 전송하였습니다. 인증번호를 확인해 주세요.");
                                      setShowStep2(true);
                                    } else {
                                      window.alert(
                                        "Fail to send sms auth code!"
                                      );
                                      setPhone(countryCode);
                                    }
                                  }
                                },
                              });
                            } else {
                              window.alert('일치하는 회원정보를 찾을 수 없습니다.')
                            }
                          } else if(response.result === 'success' && response.message.result === false) {
                            window.alert('일치하는 회원정보를 찾을 수 없습니다.')
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
          {showStep2 ? (
            <Input
              tag={"Recom CODE"}
              value={recomCode}
              style={{
                backgroundColor:
                  recomCode === "" || authKey === "" || recomCode === authKey
                    ? "white"
                    : "rgba(250,200,200, 0.4)",
              }}
              onChange={(e) => {
                console.log(authKey);
                console.log(typeof authKey);
                setRecomCode(e);
              }}
              customEle={
                <GiConfirmed
                  style={{ marginRight: "10px" }}
                  fontSize={"22px"}
                  color={
                    recomCode === "" || authKey === "" || recomCode === authKey
                      ? "rgba(0,150,0,1)"
                      : "rgba(250,200,200, 0.4)"
                  }
                />
              }
            />
          ) : undefined}
          {showStep2 &&
          recomCode !== "" &&
          authKey !== "" &&
          recomCode === authKey ? (
            <React.Fragment>
              <Input
                tag={
                  "비밀번호 (비밀번호는 영문 대소문자와 숫자로 구성되며 4자 이상이어야 합니다.)"
                }
                type="password"
                value={password}
                onChange={(password) => {
                  console.log(password);
                  let reg = /^[a-zA-Z0-9]*$/;
                  console.log(password);
                  if (reg.test(password)) {
                    setPassword(password);
                  }
                }}
              />
              <Input
                tag={"비밀번호 확인"}
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
                      password === passwordConfirm
                        ? "rgba(0,150,0,1)"
                        : "rgba(200,0,0, 1)"
                    }
                  />
                }
              />

              <div
                style={{
                  width: "100%",
                  height: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  fontSize: "12px",
                }}
              >
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
                  onClick={() => {
                    if (password.length < 4) {
                      window.alert("비밀번호가 너무 짧습니다.");
                      return;
                    } else if (passwordConfirm !== password) {
                      window.alert("비밀번호 확인이 일치하지 않습니다.");
                      return;
                    }
                    setLoadingMsg("");
                    setLoading(true);
                    reqResetPassword({
                      uuid,
                      new_password: password,
                      callback: (err, response) => {
                        if (err) {
                          console.log(err);
                        } else {
                          if (
                            response.result === "success" &&
                            response.message.result
                          ) {
                            window.alert("비밀번호 변경에 성공하였습니다.");
                            history.push("/main-entrance");
                            setLoading(false);
                          } else {
                            window.alert("비밀번호 변경에 실패하였습니다.");
                          }
                        }
                      },
                    });
                  }}
                >
                  SIGN UP
                </div>
              </div>
            </React.Fragment>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
