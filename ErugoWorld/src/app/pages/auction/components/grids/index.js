import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

const Row = ({ grids, count, gridSize }) => {
  return (
    <div
      style={{
        width: "100%",
        height: gridSize,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {grids}
    </div>
  );
};
let Grid = ({
  count,
  rowIdx,
  columnIdx,
  blockX,
  blockY,
  gridSize,
  onClickHandler,
  grids,
}) => {
  const [available, setAvailable] = useState(true);
  const [selected, setSelected] = useState(false);
  const [myLand, setMyLand] = useState(0);
  const [pick, setPick] = useState(false);

  useEffect(() => {
    if (grids[`${columnIdx}-${rowIdx}`]) {
      grids[`${columnIdx}-${rowIdx}`].setAvailable = setAvailable;
      grids[`${columnIdx}-${rowIdx}`].setSelected = setSelected;
      grids[`${columnIdx}-${rowIdx}`].setMyLand = setMyLand;
      grids[`${columnIdx}-${rowIdx}`].setPick = setPick;
    } else {
      grids[`${columnIdx}-${rowIdx}`] = {
        setAvailable,
        setSelected,
        setMyLand,
        setPick,
      };
    }
  }, []);
  let style = {};
  return (
    <div
    data-tip data-for="non-purchase"
      style={{width: gridSize, height: "100%", ...style,}}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (onClickHandler && typeof onClickHandler === "function") {
          onClickHandler({
            mapId: 0,
            blockX,
            blockY,
            gridX: columnIdx,
            gridY: rowIdx,
          });
        }
      }}
      // onMouseEnter={(e) => {
      //   e.preventDefault();
      //   e.stopPropagation();

      //   if (!myLand && !available) {
      //     var x = e.nativeEvent.offsetX;
      //     var y = e.nativeEvent.offsetY;
      //     console.log(x, y);
      //     return (
      //         <div data-tip="non-purchase">
      //             <ReactTooltip
      //           id="non-purchase"
      //           place="top"
      //           effect="float"
      //           backgroundColor="rgba(100,201,200,0.7)">
      //           <span>????????? ??? ?????? ???</span>
      //         </ReactTooltip>
      //         </div> 
      //     );
      //   } else {
      //   }
      // }}
    >
      { 
      pick 
      ? 
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: window.pickOnList.color,
          }}
        ></div>
      ) 
      : 
      myLand !== 0 
      ? 
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: myLand === 1 ? (selected ? "rgba(0,255,0,0.8)" : window.myHighestBid.color) : selected ? "rgba(145,241,224,0.8)" : window.myNotHighestBid.color, border: "1px solid rgba(0, 0,0, 0.3)",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: available ? (selected ? window.selectedGrid.color : "rgba(255,255,255,0.2)") : window.notAvailable.color, border: available ? pick ? "1px solid rgba(0, 0,0, 0.3)" : "1px solid rgba(0, 0, 0, 0.3)" : "none",
          }}
        />
      )}

    
    </div>
  );
};
const Grids = ({
  rowCount,
  columnCount,
  blockX,
  blockY,
  gridWidth,
  gridHeight,
  onClickHandler,
  gridsList,
}) => {
  let rows = [];
  for (let i = 0; i < rowCount; i++) {
    let grids = [];
    for (let j = 0; j < columnCount; j++) {
      grids.push(
        <Grid
          key={`grid-${j}-${i}`}
          count={columnCount}
          rowIdx={i}
          columnIdx={j}
          blockX={blockX}
          blockY={blockY}
          gridSize={gridWidth}
          onClickHandler={onClickHandler}
          grids={gridsList}
        />
      );
    }
    rows.push(
      <Row
        grids={grids}
        key={`row-${i}`}
        count={rowCount}
        gridSize={gridHeight}
      />
    );
  }
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
      }}
    >
      {rows}
    </div>
  );
};
const BackgroundMap = ({ MapUrl, mapWidth, mapHeight, gridBackground }) => {
  const [mapUrl, setMapUrl] = useState(MapUrl);
  gridBackground.changeMap = setMapUrl;
  return (
    <img
      src={mapUrl}
      alt="test"
      style={{
        objectFit: "contain",
        width: `${mapWidth}px`,
        height: `${mapHeight}px`,
      }}
    />
  );
};
export const getGrids = ({
  gridBackground,
  blockX,
  blockY,
  onClickHandler,
  MapUrl,
  mapWidth,
  mapHeight,
  gridWidth,
  gridHeight,
  numberOfColumn,
  numberOfRow,
  grids,
}) => {
  const MyGrid = [
    <Grids
      columnCount={numberOfColumn}
      rowCount={numberOfRow}
      key={"My-Grid"}
      blockX={blockX}
      blockY={blockY}
      gridHeight={`${gridHeight}px`}
      gridWidth={`${gridWidth}px`}
      onClickHandler={onClickHandler}
      gridsList={grids}
    />,
  ];
  const MyMap = (
    <div style={{ width: `${mapWidth}px`, height: `${mapHeight}px` }}>
      <BackgroundMap
        MapUrl={MapUrl}
        mapWidth={mapWidth}
        mapHeight={mapHeight}
        gridBackground={gridBackground}
      />
      {MyGrid}
    </div>
  );
  return MyMap;
};
