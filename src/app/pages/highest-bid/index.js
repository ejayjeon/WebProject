import { useEffect, useState } from "react";
import Style from "./style.module.css";
import classNames from "classnames";
import { useHistory } from "react-router-dom";
import {
  // getMyBidList,
  highestBidList,
  // withdrawalBid
} from "../../api";

const TableHeader = ({ language }) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(226, 121, 22)",
        width: "570px",
        height: "40px",
        display: "flex",
        justifyContent: "space-between",
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
          width: "30%",
        }}
        dangerouslySetInnerHTML={{ __html: language["highest-bid-01"] }} //Max Bid Price
      ></div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "25%",
        }}
        dangerouslySetInnerHTML={{ __html: language["highest-bid-02"] }} //Number Of Applicants
      ></div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "25%",
        }}
        dangerouslySetInnerHTML={{ __html: language["highest-bid-03"] }} // Location
      ></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "14px",
          width: "25%",
        }}
        dangerouslySetInnerHTML={{ __html: language["highest-bid-04"] }} //Go to Map
      ></div>
    </div>
  );
};

const TableRow = ({
  maxBidPrice,
  location,
  numberOfApplicants,
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
        width: "565px",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          fontSize: "12px",
          width: "30%",
          color: "rgb(226, 121,22)",
        }}
      >
        {maxBidPrice}
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          fontSize: "12px",
          width: "25%",
          color: "rgb(226, 121,22)",
        }}
      >
        {numberOfApplicants}
      </div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          fontSize: "12px",
          width: "25%",
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
          width: "25%",
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
    </div>
  );
};

const Table = ({ bidList = [], withDrawalHandler, table, language }) => {
  let bidRows = [];

  bidList.forEach((bid, idx) => {
    bidRows.push(
      <TableRow
        numberOfApplicants={bid.numberOfApplicants}
        maxBidPrice={bid.maxBidPrice}
        location={`Map ${bid.blockX} - ${bid.blockY} ( X: ${bid.gridX} Y: ${bid.gridY} )`}
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
        height: "800px",
        backgroundColor: "rgba(255, 255, 255, .85)",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <TableHeader language={language} />
      <div style={{ overflowY: "auto", height: "750px" }}>{bidRows}</div>
    </div>
  );
};
const optionList = ["maxBidPrice", "applicantsCount"];
const HighestBid = ({ menubar, footer, userUUID, language }) => {
  const [bidList, setBidList] = useState([]);
  const [searchCondition, setSearchCondition] = useState("maxBidPrice");

  useEffect(() => {
    highestBidList({
      orderType: "maxBidPrice",
      callback: (err, res) => {
        if (err) {
          console.log(err);
        } else {
          if (res.result === "success") {
            // console.log(res.bidList);
            setBidList(res.bidList);
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
          height: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "570px", padding: "10px 0" }}>
          <select
            style={{ height: "30px" }}
            value={searchCondition}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchCondition(e.target.value);
              highestBidList({
                orderType: e.target.value,
                callback: (err, res) => {
                  if (err) {
                    console.log(err);
                  } else {
                    if (res.result === "success") {
                      console.log(res.bidList);
                      setBidList(res.bidList);
                    }
                  }
                },
              });
            }}
          >
            <option
              value={"maxBidPrice"}
              dangerouslySetInnerHTML={{ __html: language["highest-bid-05"] }}
            ></option>
            <option
              value={"applicantsCount"}
              dangerouslySetInnerHTML={{ __html: language["highest-bid-06"] }}
            ></option>
          </select>
        </div>
        <Table bidList={bidList} language={language} />
      </div>
      {/* </div> */}
      {/*{footer}*/}
    </div>
  );
};

export default HighestBid;
