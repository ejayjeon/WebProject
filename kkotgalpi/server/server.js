const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 
app.set('view engine', 'ejs');
// const port = 5000
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://jemma:fjqkqmf256@jemma.na6n3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(() => {
//     app.listen(port, ()=>{
//                 console.log(`listening on post ${port}`)
//             })
//   const collection = client.db("todo").collection("post");
//   collection.insertOne({이름: 'jemma', 나이: 20}, () => { console.log('저장완료')})
//   client.close();

//   app.post('/add', (요청, 응답) => {
//     응답.send('전송완료')
//     console.log(요청.body.date)
//     console.log(요청.body.title)
//     db.collection('post').insertOne({제목: 요청.body.title, 날짜: 요청.body.date}, function(){
//         console.log('저장완료')
//     })
// })
// });
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://jemma:fjqkqmf256@jemma.na6n3.mongodb.net/todo?retryWrites=true&w=majority"
var db;
MongoClient.connect(uri, { useUnifiedTopology: true }, function(에러, client){
    if (에러) return console.log(에러)
    db = client.db('todo');
    db.collection('post').insertOne({이름: 'jemma', _id: 100}, function(에러, 결과){
        console.log('저장완료');
    })
    app.listen(8080, function() {
      console.log('listening on 8080')
    })
  })
  

app.post('/add', function(요청, 응답) {
    응답.send('전송완료');
    console.log(요청.body.title);
    console.log(요청.body.date);
    db.collection('post').insertOne({제목: 요청.body.title, 날짜: 요청.body.date}, function(요청, 완료) {
        console.log('저장완료');
    });
})



   
// 서버로 get 요청 : app.get('경로', 콜백함수) / 경로를 제대로 안쓰면 can not get 뜸
app.get('/', (req, res) => {
    //res.send('Node Server입니다. 반갑습니다');
    res.sendFile(__dirname + '/index.html')
});

// write.html로 요청 보내기
app.get('/write', function(요청, 응답) {
    console.log(요청)
    응답.sendFile(__dirname + '/write.html')
});

// list로 get 요청 -> db로 저장된 데이터 html을 보여준다

app.get('list', function(요청, 응답){
    db.collection('post').find().toArray(function(에러, 결과){ // 모든 데이터를 찾고 싶을 떄 
        console.log(결과)
        응답.render('list.ejs', { posts: 결과 }); // ejs 파일 렌더링
    });    
})