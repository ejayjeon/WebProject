const express = require("express");
const app = express();
const http = require("http").createServer(app);
const { Server } = require("socket.io");

const io = new Server(http);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
http.listen(8080, () => {
  console.log("listening on 8080");
});
app.get("/socket", (req, res) => {
  res.render("socket.ejs");
});
io.on("connection", () => {
  console.log("연결완료");

  socket.on("user-send", function (data) {
    console.log(data);
  });
});
