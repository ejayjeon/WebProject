const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const config = require('./config/key')
// const uri = 'mongodb+srv://jemma:fjqkqmf256@jemma.na6n3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
app.use(express.urlencoded({extended: true}));
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
app.listen(port, () => { console.log( `listening on port ${port}` ) });

// Schema 불러오는 곳

// GET / POST 
app.post('/', (요청, 응답) => {
    const User = new User(요청.body)
    User.save((에러, 유저정보) => {
        if(에러) return 응답.send( console.log('에러' + 에러) )
        return 응답.status(200).send(
            console.log('유저정보' + 유저정보)
        )
    })
})

// RegisterPage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.post('/register', (요청, 응답) => { 
    // 응답.sendFile(__dirname + '/index.html')
    응답.send('전송완료')
    console.log(요청.body);
})