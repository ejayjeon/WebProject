import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Style from "./style.module.css";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import ReactPDF from "@react-pdf/renderer";

// const styles = StyleSheet.create({
// page: {
// flexDirection: "row",
// backgroundColor: "#E4E4E4",
// },
// section: {
// margin: 10,
// padding: 10,
// flexGrow: 1,
// },
// });
// const MyDocument = () => (
// <Document>
{
  /* <Page size="A4" style={styles.page}> */
}
{
  /* <View style={styles.section}> */
}
{
  /* <Text>Section #1</Text> */
}
{
  /* </View> */
}
{
  /* <View style={styles.section}> */
}
{
  /* <Text>Section #2</Text> */
}
{
  /* </View> */
}
{
  /* </Page> */
}
{
  /* </Document> */
}
// );
// export function DownloadData (url) {
//   const [pdfData, setpdfData] = useState(false);
//   const fileURL = url;
//   const handleDownload = () => {
//     if(pdfData) {
//       fetch('http://www.naver.com' + fileURL, {
//         method: 'GET',
//         headers: {'Content-Type' : 'application/pdf'},

//       }).then((r) => r.blob()).then((blob) => {
//         const blobUrl = window.URL.createObjectURL(new Blob([blob]),);
//         const link = document.createElement('a');
//         link.href = blobUrl;
//         //link.download = `${blobUrl}.pdf`
//         link.setAttribute('download', `${blobUrl}.pdf`,);
//         document.body.appendChild(link);
//         link.click();
//         setTimeout(_ => {
//           window.URL.revokeObjectURL(blobUrl);
//         }, 60000);
//         link.parentNode.removeChild(link);
//       }).catch(err => {console.log('err: ' + err)
//     });
//     } else {
//       alert('PDF 다운에 실패했습니다.')
//     }
//   }
// };
function downloadFile() {
  const blob = new Blob(["/test.pdf"], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.click();
  a.download = `${url}.pdf`;
  a.remove();
  window.URL.revokeObjectURL(url);
  console.log("다운로드");
}

const Information = ({openPopup}) => {

  const [openImg, setOpenImg] = useState(false);
  const [anotherClicked, setAnotherClicked] = useState(false);
  const [isOpened, setisOpened] = useState(true);
  // const openPopup = () => {
  //   setOpenImg(!openImg);
  //   console.log("clicked");
  // };
  const history = useHistory();
  // const closePopup = () => {
  //   setisOpened(!isOpened);
  //   setOpenImg(!openImg);
  //   console.log("인포에서 : " + openImg);
  // };
  const anotherFrame = () => {
    setAnotherClicked(!anotherClicked);
    setOpenImg(false)
    history.push("/main-entrance");
  };
  return (
    <>
      <div
        className={Style["dialog"]}
        style={{ position: "absolute", display: isOpened ? "block" : "none" }}
        onClick={anotherFrame}
      >
        <div className={Style["window"]}>
          {/* <img src={require("./images/window_1.png").default} alt="" /> */}
          {/* <div className={Style["closeBtnWrapper"]}>
            <div className={Style["closeBtn"]} onClick={closePopup}></div>
          </div> */}
        </div>

        {/* 버튼 1 */}
        {/* <div className={Style["flexButton1"]}>
          <div className={Style["button1"]} onClick={() => {}} />

          <div className={Style["button2"]} onClick={() => {}} />

          <div className={Style["button3"]} onClick={() => {}} />

          <div className={Style["button4"]} onClick={() => {}} />

          <div className={Style["button5"]} onClick={() => {}} />

          <div className={Style["button6"]} onClick={() => {}} />
        </div> */}
        <br />
        {/* <div className={Style["flexButton2"]}>
          <div
            className={Style["button7"]}
            onClick={() => {
              window.open().location.href = "https://www.erugocoin.com/";
            }}
          />

          <div
            className={Style["button8"]}
            onClick={() => {
              window.open().location.href =
                "https://blog.naver.com/erugocoin_official";
            }}
          />

          <div
            className={Style["button9"]}
            onClick={() => {
              window.open().location.href =
                "https://twitter.com/ErugoWorldCoin";
            }}
          />

          <div
            className={Style["button10"]}
            onClick={() => {
              window.open().location.href =
                "https://www.youtube.com/channel/UCj-Hyp1afwEgmSJ6gTYx4wA";
            }}
          />

          <div
            className={Style["button11"]}
            onClick={() => {
              window.open().location.href = "https://open.kakao.com/o/gCeEqVzd";
            }}
          />

          <div
            className={Style["button12"]}
            onClick={() => {
              window.open().location.href = "https://t.me/erugo";
            }}
          />
        </div> */}
      </div>
    </>
  );
};
export default Information;
