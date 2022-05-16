const express = require("express");
const app = express();
const compression = require("compression");
const methodOverride = require("method-override");
require("dotenv").config();
// MongoDB 세팅
const { MongoClient } = require("mongodb");
const uri = process.env.DB_URI;
const client = new MongoClient(uri);
app.listen(process.env.PORT, () => {
  console.log(`Listening port on ${process.env.PORT}`);
});
app.use(compression());
app.use(methodOverride("_method"));
// 이거 안해줬더니 계속해서 POST 방식으로 넘어오는 값을 받을 수 없었음. 분명 페이로드에는 찍히는데 그 값이 넘어오지 않아서 undifined가 뜨고 그럼 ...
app.use(express.urlencoded({ extended: true }));
// 정적파일 : express.static()가 제공하는 경로는 node 프로세스가 실행되는 디렉토리에 대해 상대적이다. Express 앱을 다른 디렉토리에서 실행하는 경우 다음과 같이 제공하기 원하는 디렉토리의 절대 경로를 사용하는 것이 안전하다
// app.use("/static", express.static(__dirname + "/public"));

// app.use("/", require("./routers/router"));
app.set("view engine", "ejs");

// 라우터
app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/add", (req, res) => {
  res.render("add.ejs");
});

// 변수
const db = client.db("board");
const post = db.collection("post");
const chatroom = db.collection("chatroom");
async function run() {
  try {
    client.connect();
    app.get("/list", (req, res) => {
      post.find().toArray((err, result) => {
        res.render("list.ejs", { posts: result });
      });
    });
    app.get("/chatroom", (req, res) => {
      res.render("chatroom.ejs");
    });
    app.post("/chatroom", (req, res) => {
      var chatItem = {
        title: `${req.body._id}의 채팅방`,
        member: [ObjectId(req.body.당한사람id), req.user._id],
        data: new Date(),
      };
      chatroom.insertOne(chatItem).then((err, result) => {
        console.log(result);
      });
    });
    app.post("/addok", (req, res) => {
      db.collection("counter").findOne({ name: "boardIdx" }, (err, result) => {
        var idx = result.totalPost;
        const doc = {
          _id: parseInt(idx + 1),
          title: req.body.title,
          content: req.body.content,
          userId: req.body.userId,
          createdate: new Date(),
        };

        post.insertOne(doc, (err, result) => {
          db.collection("counter").updateOne(
            { name: "boardIdx" },
            { $inc: { totalPost: 1 } },
            (err, result) => {
              if (err) return "에러발생";
              res.redirect("/list");
            }
          );
        });
      });
    });

    // 글 삭제
    app.delete("/delete", (req, res) => {
      req.body._id = parseInt(req.body._id);
      post.deleteOne(req.body, (err, result) => {
        console.log("삭제 완료: " + req.body._id);
        res.status(200).send({ messge: "성공" });
      });
    });

    // 상세 페이지
    app.get("/detail/:id", async (req, res) => {
      setTimeout(() => {
        if (req.params.id != null)
          post.findOne({ _id: parseInt(req.params.id) }, (err, result) => {
            if (result == null) {
              res.redirect("/list");
            } else {
              console.log(result);
              res.render("detail.ejs", { data: result });
            }
          });
      }, 100);
    });

    // 수정 페이지
    app.post("/edit/:id", async (req, res) => {
      // 삭제가 더 늦게 되기 때문에, 비동기 적으로 처리해줄 필요성이 있음
      setTimeout(() => {
        post.findOne({ _id: parseInt(req.params.id) }, (err, result) => {
          res.render("edit.ejs", { edit: result });
        });
      });
    });
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
