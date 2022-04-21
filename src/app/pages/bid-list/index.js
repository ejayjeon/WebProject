import { useEffect, useState } from "react";
import Style from "./style.module.css";
import classNames from "classnames";
import { getMyBidList, withdrawalBid } from "../../api";
import { lang } from "../../data/lang";
import { useHistory } from "react-router-dom";

const TableHeader = ({ language }) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(226, 121, 22)",
        width: "800px",
        height: "40px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "20%",
        }}
        dangerouslySetInnerHTML={{ __html: language["bid-list-01"] }} //Register Time
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "20%",
        }}
        dangerouslySetInnerHTML={{ __html: language["bid-list-02"] }} //Bid Price
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "20%",
        }}
        dangerouslySetInnerHTML={{ __html: language["bid-list-03"] }} //Location
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "20%",
        }}
        dangerouslySetInnerHTML={{ __html: language["bid-list-04"] }} //Go to Map
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "20%",
        }}
        dangerouslySetInnerHTML={{ __html: language["bid-list-05"] }} //Bid Withdrawal
      ></div>
    </div>
  );
};
const TableRow = ({
  bidPrice,
  registerTime,
  location,
  applicantIdx,
  withDrawalHandler,
  tbIdx,
  blockX,
  blockY,
  gridX,
  gridY,
}) => {
  const history = useHistory();
  return (
    <div
      style={{
        borderRight: "1px solid rgb(226, 121, 22)",
        borderLeft: "1px solid rgb(226, 121, 22)",
        borderBottom: "1px solid rgb(226, 121, 22)",
        width: "795px",
        height: "50px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          width: "20%",
          color: "rgb(226, 121,22)",
        }}
      >
        {registerTime.split("T")[0]} {registerTime.split("T")[1].split(".")[0]}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          width: "20%",
          color: "rgb(226, 121,22)",
        }}
      >
        {bidPrice}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
          width: "20%",
          color: "rgb(226, 121,22)",
        }}
      >
        {location}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "12px",
          width: "20%",
        }}
      >
        <div
          className="pointer"
          style={{
            border: "1px solid rgb(226, 121, 22)",
            width: "80px",
            height: "30px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "rgb(226, 121,22)",
            fontSize: "12px",
          }}
          onClick={() => {
            history.push(
              `/auction?blockX=${blockX}&blockY=${blockY}&gridX=${gridX}&gridY=${gridY}`
            );
          }}
        >
          Go
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "20%",
        }}
      >
        <div
          className="pointer"
          style={{
            border: "1px solid rgb(226, 121, 22)",
            width: "80px",
            height: "30px",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "rgb(226, 121,22)",
            fontSize: "12px",
          }}
          onClick={() => {
            if (withDrawalHandler && typeof withDrawalHandler === "function") {
              if (window.confirm(`${location}을 삭제하시겠습니까? `)) {
                withDrawalHandler({
                  applicantIdx,
                  bidPrice,
                  tbIdx,
                });
                alert("삭제되었습니다.");
              }
            }
          }}
        >
          Withdrawal
        </div>
      </div>
    </div>
  );
};
const Table = ({ bidList = [], withDrawalHandler, language }) => {
  let bidRows = [];
  bidList.forEach((bid, idx) => {
    bidRows.push(
      <TableRow
        registerTime={bid.registerTime}
        bidPrice={bid.bidPrice}
        location={`WorldMap ${bid.blockX}-${bid.blockY} ( X:${bid.gridX} Y:${bid.gridY})`}
        applicantIdx={bid.applicantIdx}
        withDrawalHandler={withDrawalHandler}
        tbIdx={bid.tbIdx}
        blockX={bid.blockX}
        blockY={bid.blockY}
        gridX={bid.gridX}
        gridY={bid.gridY}
      />
    );
  });
  return (
    <div
      style={{
        height: "700px",
        backgroundColor: "rgba(255, 255, 255, .86)",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <TableHeader language={language} />
      <div style={{ overflowY: "auto", height: "660px" }}>{bidRows}</div>
    </div>
  );
};
const BidList = ({ menubar, footer, userUUID, tbIdx, language }) => {
  const [bidList, setBidList] = useState([]);
  const [penalty, setPenalty] = useState(5);
  useEffect(() => {
    getMyBidList({
      userUUID,
      callback: (err, res) => {
        if (err) {
          console.log(err);
        } else {
          if (res.result === "success") {
            setBidList(res.bidList);
            setPenalty(res.penalty);
          }
        }
      },
    });
  }, []);

  return (
    <div className={classNames(Style["view-box"])}>
      {menubar}
      {/* <div className={classNames(Style['body'])}> */}
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "40px",
        }}
      >
        <Table
          bidList={bidList}
          language={language}
          withDrawalHandler={(e) => {
            withdrawalBid({
              applicantIdx: e.applicantIdx,
              userUUID: userUUID,
              tbIdx: e.tbIdx,
              returnPoints:
                e.bidPrice - Math.floor((e.bidPrice * penalty) / 100),
              callback: (err, res) => {
                if (err) {
                  console.log(err);
                } else {
                  if (res.result === "success") {
                    // window.alert(
                    //   lang.selection["bid-list-withdrawal-complete"]
                    // );
                    setBidList(res.bidList);
                  } else {
                    console.log(res);
                  }
                }
              },
            });
          }}
        />
      </div>
      {/* </div> */}
      {/*{footer}*/}
    </div>
  );
};

export default BidList;
