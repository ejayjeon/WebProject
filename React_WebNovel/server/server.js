const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const config = require('./config/key');
const { User } = require('./models/User');
const { auth } = require('./middleware/auth');
const cookieparser = require('cookie-parser');
// const uri = 'mongodb+srv://jemma:fjqkqmf256@jemma.na6n3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
app.use(express.urlencoded({extended: true}));
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));
app.listen(port, () => { console.log( `listening on port ${port}` ) });

// Schema 불러오는 곳

// GET / POST 
// app.post('/', (요청, 응답) => {
//     const User = new User(요청.body)
//     User.save((에러, 유저정보) => {
//         if(에러) return 응답.send( console.log('에러' + 에러) )
//         return 응답.status(200).send(
//             console.log('유저정보' + 유저정보)
//         )
//     })
// })


//LoginPage
app.get('/login/check', (req, res) => {
// 1. 요청된 이메일이 데이터이스에 있는지 찾는다
    // User Model 가져오기 / findOne(찾고자하는 요청)
    User.findOne({ email: req.body.userEmail }, (err, 유저정보) => {
        if(!유저정보) {
            return res.json({ 
            loginSuccess: false,
             message: "제공된 이메일에 해당하는 유저가 없습니다"
            })
        } 
        // 2. 요청된 이메일이 데이터 베이스에 없다면 비밀번호는 맞는 비밀번호인지 확인
        // 메소드를 만들어서 비밀번호를 비교하게 만든다
        유저정보.비밀번호비교(req.body.userPwd, (err, isMatch) => {
            // 비밀번호를 비교해서 비밀번호가 같지 않다면
            if(!isMatch) return res.json({
                loginSuccess: false,
                message: "비밀번호가 틀렸습니다"
            })
            // 3. 비밀번호를 비교해서 비밀번호가 맞았을 때 토큰을 생성한다
            유저정보.generateToken((err,user) => {
                if(err) return res.status(400).send(err);
                // 에러가 없으면 생성한 토큰을 저장한다. : 쿠키 ? 로컬스토리지
                res.cookie('UserToken', user.token)
                .status(200)
                .json({
                    loginSuccess: true,
                    userId: user._id
                })
            })
        })
    })
})



// SignupPage
app.get('/signup', (요청, 응답) => {
    응답.sendFile('/Users/jemma/Documents/Workspace/project/front/public/index.html')
    // 응답.sendFile('/Users/jemma/Documents/Workspace/project/index.html')
});
app.post('/signup/success', (요청, 응답) => { 
    // 응답.sendFile(__dirname + '/index.html')
    const 유저 = new User(요청.body) // 요청.body = input값 
    유저.save((에러, 유저정보) => {
        if(에러) return 응답.send( console.log('에러' + 에러) )
        return 응답.status(200).send(
            console.log('유저정보' + 유저정보)
        )
    })
    응답.send('전송완료')
    console.log(요청.body);
})

app.get('/user/auth', auth, (요청, 응답) => {
// 여기까지 미들웨어를 통과했다는 얘기는 Authentication = true
응답.status(200).json({
    _id: 요청.user._id,
    isAdmin: 요청.user.role === 1 ? false : true,
    isAuth: true,
    email: 요청.user.email,
    name: 요청.user.name,
    pwd: 요청.user.pwd,
    role: 요청.user.role,
    birth: 요청.user.birth,
    phone: 요청.user.phone,
    gender: 요청.user.gender,
    image: 요청.user.image
})
})

// logout
// 로그아웃하려는 유저를 찾아서 유저의 토큰을 지워준다
app.get('/user/logout',auth, (요청, 응답) => {
    User.findOneAndUpdate({ _id: 요청.user._id},
        {token: ""}, (에러, user) => {
            if(에러) return 응답.json({ success: false, 에러 });
            return res.status(200).send({
                success: true
            })
        })
})


// Front에서 보낸 '요청'을 받아서 처리해준 다음에 응답을 보내준다
app.get('/api/hello', (요청, 응답) => {
    응답.sendStatus(200).send(
        console.log('성공적으로 요청완료' + 요청)
    )
})