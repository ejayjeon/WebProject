const functions = require("firebase-functions");
var admin = require("firebase-admin");
var serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://whoever-ej-default-rtdb.asia-southeast1.firebasedatabase.app"
});


// exports.helloWorld = functions.region('asia-northeast3').https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!"); 이 메세지를 유저에게 보내주세요
// });
// http.onRequest : get / post 요청을 감지하기 위해 쓰는 것
exports.createAlert = functions.region('asia-northeast3').firestore.document('chatroom/docid}').onCreate((snapshot, context)=>{
// context : 게시물 경로, snapshot: 모든 게시물
    var product = snapshot.data().product
    var who = snapshot.data().who

    // user 컬렉션의 어떤 사람을 선택해서 그 사람에게 alert를 남긴다
    db.collection('user').doc(who[0]).update({alert : '채팅'})
})
