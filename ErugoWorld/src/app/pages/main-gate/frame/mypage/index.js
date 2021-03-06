import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import MyPageContent from "../../../my";
import { useHistory } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import NumberFormat from "react-number-format";
import {
  changePointEWC,
  readInfo,
  reqSMSAuthCode,
  reqWithdrawCoin,
} from "../../../../api";
import CopyToClipboard from "react-copy-to-clipboard";

const MyPage2 = ({
  menubar,
  footer,
  points,
  setPoints,
  userUUID,
  walletAddress,
  setLoading,
  setUserUUID,
  setExchangeRate,
  exchangeRate,
  setCoin,
  coin,
  setEmail,
  email,
  setName,
  name,
  setPhone,
  phone,
  setEther,
  ether,
  ewc,
  setTempPoint,
  setTempCoin,
  tempPoint,
  tempCoin,
}) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  });
  return (
    <div className={Style["ground"]}>
      {userUUID ? (
        <MyPageContent
          menubar={menubar}
          footer={footer}
          points={points}
          setPoints={setPoints}
          userUUID={userUUID}
          walletAddress={walletAddress}
          setLoading={setLoading}
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
        />
      ) : undefined}
    </div>
  );
};
const characterName = ["ORBIT", "ETHER", "AMORA", "ASLAN", "AXIOM", "GOING"];
function ExchangeCharacter(inputNum) {
  return "GOING";
  if (inputNum >= 1 && inputNum < 10) {
    return characterName[0];
  }
  if (inputNum >= 10 && inputNum < 100) {
    return characterName[1];
  }
  if (inputNum >= 100 && inputNum < 1000) {
    return characterName[2];
  }
  if (inputNum >= 1000 && inputNum < 9999) {
    return characterName[3];
  }
  if (inputNum >= 10000) {
    return characterName[4];
  } else {
    return characterName[5];
  }
}

// ??????
const ExchangCoin = ({ SW, EW, coin, onClick }) => {
  const [tempCoin, setTempCoin] = useState(0);
  return (
    <>
      <div className={`${Style["info-title"]} ${Style["info-right"]}`}>
        SecurityWallet?????? ????????????
      </div>
      <div className={Style["input-content"]}>
        <span>{SW}</span>

        <input
          type={Text}
          className={`${Style["exErugoInput"]} ${Style["input-box"]}`}
          value={tempCoin}
          onChange={(e) => {
            let withdrawCoin =
              e.target.value === "" ? 0 : parseInt(e.target.value);
            if (isNaN(withdrawCoin)) {
              return;
            }
            if (withdrawCoin > coin) {
              return;
            }
            setTempCoin(withdrawCoin);
          }}
        />

        <button
          className={`${Style["swExchange"]} ${Style["smallExchangeButton"]}`}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            if (onClick && typeof onClick === "function") {
              setTempCoin(0);
              onClick({ withdrawCoin: tempCoin });
            }
          }}
        >
          Exchange
        </button>
      </div>

      <div className={Style["swChange"]}>
        ??? SecurityWallet EWC ?????????
        <span style={{ color: "#64c9dc" }}>{coin}</span> ??? ?????????
      </div>
    </>
  );
};
const ExchangeRugo = ({ SW, EW, ewc, exchangeRate, onClick }) => {
  const [tempEWC, setTempEWC] = useState(0);
  const [tempRugo, setTempRugo] = useState(0);

  return (
    <>
      <div className={Style["ex-rugo-content"]}>
        <div className={Style["content-left"]}>
          <div className={`${Style["text-box"]} ${Style["input-text-box"]}`}>
            {SW}
          </div>

          <input
            type={Text}
            className={`${Style["num-box"]} ${Style["input-num-box"]}`}
            value={tempEWC}
            onChange={(e) => {
              let newTempEWC =
                e.target.value === "" ? 0 : parseInt(e.target.value);
              if (isNaN(newTempEWC)) {
                return;
              }
              if (newTempEWC > ewc) {
                return;
              }
              setTempEWC(newTempEWC);
              setTempRugo(exchangeRate * newTempEWC);
            }}
          />
        </div>

        <span className={Style["change-icon"]}>
          <img src={require("./images/icon3.png").default} alt=""></img>
        </span>

        <div className={Style["content-right"]}>
          <div className={`${Style["text-box"]} ${Style["input-text-box"]}`}>
            {EW}
          </div>

          <input
            type={Text}
            className={`${Style["num-box"]} ${Style["input-num-box"]}`}
            value={tempRugo}
            onChange={(e) => {}}
            disabled
          />
        </div>
        {/*
        <button
          className={`${Style["swExchange2"]}`}
          onClick={(e) => {
            if (onClick && typeof onClick === "function") {
              onClick({ ewc: tempEWC, rugo: tempRugo });
              setTempEWC(0);
              setTempRugo(0);
            }
          }}
        >
          Exchange
        </button>
        */}
      </div>
    </>
  );
};

// page
const MyPage = ({
  menubar,
  footer,
  points,
  setPoints,
  userUUID,
  walletAddress,
  setLoading,
  setLoadingMsg,
  setUserUUID,
  setExchangeRate,
  exchangeRate,
  setCoin,
  coin,
  setEmail,
  email,
  setName,
  name,
  setPhone,
  phone,
  setEther,
  ether,
  setTempPoint,
  setTempCoin,
  tempPoint,
  tempCoin,
  setEWC,
  setSwId,
  ewc,
  swId,
  fees,
  setFees,

  smsRequestShow,
  setSMSRequestShow,
}) => {
  const history = useHistory();
  const [accountCheck, setAccountCheck] = useState(new Set());
  const accountCheckHandler = (amount, isChecked) => {
    if (isChecked) {
      accountCheck.add(amount);
      setAccountCheck(accountCheck);
    } else if (!isChecked && accountCheck.has(amount)) {
      accountCheck.delete(amount);
      setAccountCheck(accountCheck);
    }
  };
  // console.log(`email : ${email}`);
  // const todayVal = () => {
  //   var randomVal = Math.ramdom
  //   for(let i = 2500; i < 3000; i++) {
  //     var randomVal2 = Math.floor(randomVal*10 + i)
  //   }
  //   return randomVal2
  // }
  //   const Input = ({ type='text', inputElement = null, style = {}, value, onChange, customEle }) => {
  //     return (
  //         <div style={{ width: '10%', height: '80px', display: 'flex', justifyContent: 'center', flexDirection: 'column', fontSize: '12px' }}>
  //             <div style={{ width: '100%', height: '40px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
  //                 <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}></div>
  //                 <div style={{ width: '50%', height: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>{customEle}</div>
  //             </div>
  //             <div style={{ width: '100%', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  //                 {
  //                     inputElement ? inputElement :
  //                         <input
  //                         type='text'
  //                             className={Style['input']}
  //                             style={{ width: '100%', height: '100%', padding: '10px', borderRadius: '4px', ...style }}
  //                             value={value}
  //                             onChange={
  //                                 (e) => {
  //                                     if (onChange && typeof onChange === 'function') {
  //                                         onChange(e.target.value)
  //                                     }
  //                                 }
  //                             }
  //                         />
  //                 }
  //             </div>
  //         </div>
  //     )
  // }
  const [txValue, setTxValue] = useState("");
  const txHandler = (e) => {
    let txValue = e.target.value;
    setTxValue(txValue);
  };

  // console.log(`ether : ${ether}`);
  return (
    <>
      <div className={Style["mypage-bg"]}>
        <div className={Style["character"]}>
          <img
            className={Style["character-img"]}
            src={require(`./images/${ExchangeCharacter(coin)}.png`).default}
            alt=""
          />
          <h1 className={Style["characterName"]}>{ExchangeCharacter(coin)}</h1>
        </div>
        <div className={Style["container"]}>
          <div className={`${Style["mypageBox1"]} ${Style["pagebox"]}`}>
            <div className={Style["pageBox1"]}>
              <div className={Style["address"]}>
                <table>
                  <tr>
                    <th>Email</th>
                    <td>{email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>

                    <td>
                      <NumberFormat
                        value={phone}
                        displayType="text"
                        format="### - #### - ####"
                        mask="_"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>Name</th>

                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th>Wallet</th>
                    <CopyToClipboard
                      text={walletAddress}
                      onCopy={() => {
                        alert("COPY SUCCESS!");
                      }}
                    >
                      <td className={Style["wallet-width"]}>{walletAddress}</td>
                    </CopyToClipboard>
                  </tr>
                </table>
              </div>
              <div className={Style["line"]}></div>
              <div className={Style["boxs"]}>
                <div className={`${Style.box1}`}>
                  <div
                    className={`${Style["info-title-l-1"]} ${Style["info-left"]}`}
                  >
                    SecurityWallet ??????
                  </div>

                  <span className={Style["text-box"]}>SW ETH</span>

                  <span className={Style["num-box"]}>
                    <NumberFormat
                      value={ether}
                      thousandsGroupStyle="thousand"
                      type="text"
                      displayType="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                  </span>
                </div>
                <div className={`${Style.box1}`}>
                  <span className={Style["text-box"]}>SW EWC</span>

                  <span className={Style["num-box"]}>
                    <NumberFormat
                      value={coin}
                      thousandsGroupStyle="thousand"
                      type="text"
                      displayType="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                  </span>
                </div>
                <div className={`${Style.box1}`}>
                  <div
                    className={`${Style["info-title"]} ${Style["info-left2"]}`}
                  >
                    ErugoWorld ??????
                  </div>

                  <span className={Style["text-box"]}>EW EWC</span>
                  <span className={Style["num-box"]}>
                    <NumberFormat
                      value={ewc}
                      thousandsGroupStyle="thousand"
                      type="text"
                      displayType="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                  </span>
                </div>
                <div className={`${Style.box1} ${Style.boxRight}`}>
                  <span className={Style["text-box"]}>EW Rugo</span>
                  <span className={Style["num-box"]}>
                    <NumberFormat
                      value={points}
                      thousandsGroupStyle="thousand"
                      type="text"
                      displayType="text"
                      thousandSeparator={true}
                      allowNegative={true}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={Style["mypageBox2"]}>
            <div className={Style["pageBox2"]}>
              <div className={Style["exchange-xt"]}>
                <div className={Style["exchangeTop"]}>
                  <div className={Style["info-title-r"]}>
                    ??????????????? ????????????
                  </div>
                  <div className={Style["input-content"]}>
                    {" "}
                    <span>LBANK</span>
                    {/* <div
                  className={Style["help-btn"]}
                  onClick={() => {
                    window.open().location.href =
                      "https://blog.naver.com/erugocoin_official/222663552969";
                  }}
                ></div> */}
                    <input
                      type="text"
                      className={Style["input-box"]}
                      placeholder={" ?????? ?????? ?????? "}
                      value={txValue}
                      onChange={txHandler}
                    />
                  </div>
                </div>
                <div className={Style["exchangeBottom"]}>
                  <ExchangCoin
                    SW={"SW EWC"}
                    coin={coin}
                    onClick={({ withdrawCoin }) => {
                      console.log("coin exchange..... ");

                      if (withdrawCoin > 0 && withdrawCoin <= coin) {
                        if (!window.confirm("EWC??? ?????????????????????????")) {
                          return;
                        }
                        reqSMSAuthCode({
                          country_dial: 82,
                          phone: phone,
                          uuid: userUUID,
                          callback: (err, result) => {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log(result);
                              setSMSRequestShow({
                                display: true,
                                authKey: result.message.authkey,
                                text: "SecurityWallet?????? ?????? EWC??? ???????????? ?????? ????????? ????????? ???????????????.",
                                callback: (isOK) => {
                                  setSMSRequestShow({
                                    display: false,
                                    authKey: undefined,
                                    callback: () => {},
                                  });
                                  if (isOK) {
                                    setLoading(true);
                                    setLoadingMsg(
                                      "?????? EWC??? ?????? ?????? ????????????."
                                    );
                                    reqWithdrawCoin({
                                      uuid: userUUID,
                                      coin: withdrawCoin,
                                      callback: (err, res) => {
                                        setLoading(false);
                                        setLoadingMsg("");

                                        if (err) {
                                          console.log(err);
                                        } else {
                                          if (res.result === "success") {
                                            readInfo({
                                              uuid: userUUID,
                                              callback: (err, user) => {
                                                if (err) {
                                                  console.log(err);
                                                } else {
                                                  if (
                                                    user.result === "success"
                                                  ) {
                                                    console.log(user);
                                                    let coin =
                                                      user.userInfo.coin;
                                                    let ether =
                                                      user.userInfo.ethAmount;
                                                    let ewc = user.userInfo.ewc;
                                                    let phone =
                                                      user.userInfo.phone;
                                                    let name =
                                                      user.userInfo.name;
                                                    let email =
                                                      user.userInfo.email;
                                                    let swId =
                                                      user.userInfo.swId;
                                                    let point =
                                                      user.userInfo.point;
                                                    let fees =
                                                      user.userInfo.fees;
                                                    setCoin(coin);
                                                    setEther(ether);
                                                    setEWC(ewc);
                                                    setPhone(phone);
                                                    setName(name);
                                                    setEmail(email);
                                                    setSwId(swId);
                                                    setPoints(point);
                                                    setFees(fees);
                                                    window.alert(
                                                      "EWC??? Security Wallet?????? ?????? ???????????? ??? ?????????????????????."
                                                    );
                                                  }
                                                }
                                              },
                                            });
                                          } else {
                                            console.log(res);
                                            window.alert(
                                              "EWC??? ???????????? ??? ?????????????????????. Security Walle?????? ????????? Error Msg:" +
                                                res.data.err
                                            );
                                          }
                                        }
                                      },
                                    });
                                  } else {
                                    window.alert(
                                      "??????????????? ?????? ?????? ????????????."
                                    );
                                  }
                                },
                              });
                            }
                          },
                        });
                      } else {
                        if (parseInt(coin) > 0) {
                          window.alert(
                            `????????? ????????? ????????? ????????? [ 0 ]????????? ?????? [ ${Number(
                              coin
                            )} ] ???(????????? ?????? ??????) ?????? ????????? ?????????.`
                          );
                        } else {
                          window.alert(`?????? ????????? ????????? ????????????`);
                        }
                      }
                    }}
                  />

                  <div
                    className={Style["help-btn"]}
                    onClick={() => {
                      history.push(
                        "https://blog.naver.com/erugocoin_official/222663552969"
                      );
                    }}
                  ></div>
                </div>
              </div>

              <div className={Style["bg-down"]}>
                <div className={Style["box-bottom"]}>
                  <div className={Style["info-title2"]}>
                    RUGO??? ????????????(?????? ?????? ??????)
                  </div>

                  <ExchangeRugo
                    SW={"EWC"}
                    EW={"Rugo"}
                    ewc={ewc}
                    exchangeRate={exchangeRate}
                    onClick={(data) => {
                      if (data.rugo > 0 && data.ewc > 0) {
                        if (
                          !window.confirm(
                            `EWC ${data.ewc}?????? Rugo ${data.rugo}?????? ?????????????????????????`
                          )
                        ) {
                          return;
                        }

                        reqSMSAuthCode({
                          country_dial: 82,
                          phone: phone,
                          uuid: userUUID,
                          callback: (err, result) => {
                            if (err) {
                              console.log(err);
                            } else {
                              console.log(result);
                              setSMSRequestShow({
                                display: true,
                                authKey: result.message.authkey,
                                text: "EWC??? RUGO??? ???????????? ?????? ????????? ????????? ???????????????.",
                                callback: (isOK) => {
                                  setSMSRequestShow({
                                    display: false,
                                    authKey: undefined,
                                    callback: () => {},
                                  });
                                  if (isOK) {
                                    changePointEWC({
                                      uuid: userUUID,
                                      ewc: data.ewc,
                                      point: data.rugo,
                                      callback: (err, res) => {
                                        if (err) {
                                          console.log(err);
                                        } else {
                                          if (res.result === "success") {
                                            readInfo({
                                              uuid: userUUID,
                                              callback: (err, user) => {
                                                if (err) {
                                                  console.log(err);
                                                } else {
                                                  if (
                                                    user.result === "success"
                                                  ) {
                                                    console.log(user);
                                                    let coin =
                                                      user.userInfo.coin;
                                                    let ether =
                                                      user.userInfo.ethAmount;
                                                    let ewc = user.userInfo.ewc;
                                                    let phone =
                                                      user.userInfo.phone;
                                                    let name =
                                                      user.userInfo.name;
                                                    let email =
                                                      user.userInfo.email;
                                                    let swId =
                                                      user.userInfo.swId;
                                                    let point =
                                                      user.userInfo.point;
                                                    let fees =
                                                      user.userInfo.fees;
                                                    setCoin(coin);
                                                    setEther(ether);
                                                    setEWC(ewc);
                                                    setPhone(phone);
                                                    setName(name);
                                                    setEmail(email);
                                                    setSwId(swId);
                                                    setPoints(point);
                                                    setFees(fees);
                                                    window.alert(
                                                      "????????? ?????????????????????."
                                                    );
                                                  }
                                                }
                                              },
                                            });
                                          } else {
                                            console.log(res);
                                          }
                                        }
                                      },
                                    });
                                  } else {
                                    window.alert(
                                      "??????????????? ?????? ?????? ????????????."
                                    );
                                  }
                                },
                              });
                            }
                          },
                        });
                      } else {
                        window.alert("??????????????? EWC??? 0?????? ?????? ?????????.");
                      }
                    }}
                  />
                  <div className={Style["rugo-change-info"]}>
                    CURRENT EXCHANGE RATE : 1 Erugo Coin ={" "}
                    <span style={{ color: "blue" }}>
                      <NumberFormat
                        value={exchangeRate}
                        displayType="text"
                        thousandSeparator={true}
                      />
                    </span>{" "}
                    RUGO
                  </div>
                  <button
                    className={Style["logout-btn"]}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setUserUUID(undefined);
                      sessionStorage.removeItem("userUUID");
                      sessionStorage.removeItem("wallet");
                      // history.push("/main-entrance");
                      alert("???????????? ???????????????");
                      window.location.reload();
                    }}
                  >
                    ????????????
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPage;
