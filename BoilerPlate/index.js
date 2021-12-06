const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const { User } = require('./models/user')
const bodyParser = require('body-parser');
const config = require('./config/key')


// DB : MongoDB
mongoose.connect('mongoURI').then(() => console.log('MonggoDB Connected')).catch(err => console.log(err));
// DB : MySQL
/*const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('np')*/

// bodyParser 부분
app.use(bodyParser.urlencoded({extended: true})); // applicaion/x-www-form-urlencoded
app.use(bodyParser.json());
app.post('/register', (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가지고 오면 그것들을 DB에 넣어줌
const User = new User(req.body);
// body-parser로 req.body를 쓸 수 있다. 
User.save((err, doc) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
        success: true
        })
    })
})

app.listen(port, () => console.log(`Starting app on port ${port}`));

// Router
app.get('/', (req, res) => res.send('Hello World 안녕'));
