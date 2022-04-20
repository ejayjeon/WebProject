import React from "react";
import Style from "./style.module.css";
import { useHistory } from "react-router-dom";

const Menu = ({
  onClick,
  hideButton = false,
  isLogin,
  // language,
  // setLanguage,
  languageCode,
  setLanguageCode,
}) => {
  const history = useHistory();
  // const [wrapperSlide, setWrapperSlide] = useState(-10);
  // const [leftButtonDown, setLeftButtonDown] = useState(false);
  // const [buttonDownStartPoint, setButtonDownStartPoint] = useState({
  //   startPoint: undefined,
  // });

  // const [detailFrameState, setDetailFrameState] = useState(undefined);
  return (
    <div className={Style["top-menu-background"]}>
      <div
        className={`${Style["logo"]} pointer`}
        onClick={() => {
          history.push("/main-entrance");
        }}
      ></div>
      {!hideButton ? (
        <div className={Style["top-menu-button-wrapper"]}>
          {/* Auction 페이지 */}
          <div
            className={`${Style["top-menu-button"]} ${Style["auction-button"]} pointer`}
            onClick={() => {
              onClick("auction");
              setTimeout(() => {
                history.push("/auction");
              }, 200);
            }}
          ></div>
          {/* highest bid */}
          <div
            className={`${Style["top-menu-button"]} ${Style["highest-bid-button"]} pointer`}
            onClick={() => {
              onClick("highest-bid");
              setTimeout(() => {
                history.push("/highest-bid");
              }, 200);
            }}
          ></div>
          {/* my bid */}
          {isLogin ? (
            <>
              <div
                className={`${Style["top-menu-button"]} ${Style["my-bid-button"]} pointer`}
                onClick={() => {
                  setTimeout(() => {
                    history.push("/bid-list");
                  }, 200);
                }}
              ></div>

              {/* my page */}
              <div
                className={`${Style["top-menu-button"]} ${Style["my-page-button"]} pointer`}
                onClick={() => {
                  history.push("/main-entrance");
                  onClick("mypage");
                }}
              ></div>
            </>
          ) : undefined}
          {/* Login / Logout */}
          {sessionStorage.getItem("userUUID") ? (
            <div
              style={{
                backgroundImage: "url(/images/frame/top-button/log-out.png)",
              }}
              className={`${Style["top-menu-button"]} ${Style["log-in-button"]} pointer`}
              onClick={(e) => {
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
                history.push("/login");
              }}
            ></div>
          )}
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
            ></div>
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
            ></div>
          )}
          {/*
                 <div className={`${Style['top-menu-button']} ${Style['my-page-button']} pointer`}
                onClick={
                    () => {
                        history.push('/main-entrance')
                        onClick('mypage')
                    }
                }
                ></div>
            */}
        </div>
      ) : undefined}
    </div>
  );
};

export default Menu;
