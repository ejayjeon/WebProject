const express = require('express');
const app = express();
app.listen(5000, () => {
    console.log('listening port 5000')
});

// 서버로 get 요청 : app.get('경로', 콜백함수) / 경로를 제대로 안쓰면 can not get 뜸
app.get('/', (req, res) => {
    //res.send('Node Server입니다. 반갑습니다');
    res.sendFile(__dirname + '/index.html')
});

// const path = require('path');
// const http = require('http').createServer(app);
// http.listen(5000, () => { console.log(`listening port 5000`) });
// app.use(express.json());
// var cors = require('cors');
// app.use(cors());