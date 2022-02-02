const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const { User } = require('./models/user')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const config = require('./config/key');
const { auth } = require('./middleware/auth')

// DB : MongoDB
mongoose.connect(config.mongoURI/*, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}*/).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

app.use(bodyParser.urlencoded({extended: true})); // applicaion/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(cookieParser());


app.post('/register', (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가지고 오면 그것들을 DB에 넣어줌
const User = new User(req.body);
// body-parser로 req.body를 쓸 수 있다. 


// save를 하기 전에 암호화가 되어야 한다
User.save((err, user) => {
    if(err) return res.json({ success: false, err })
    return res.status(200).json({
        success: true
        })
    })
})


// Router : /api/user (express)
app.get('/', (req, res) => res.send('Hello World 반가워~'));

app.get('/api/hello', (req, res) => {
    // 원래 Route라면 여기서 처리한 다음에 
    res.send("안녕하세요 어디 가요?")
    // Front로 다시 보낼 것 
})

app.post('/api/user/login', (req, res) => {
    // 요청된 이메일을 DB에 있는지 찾는다
User.findOne({ email: req.body.email }, (err, User) => {
    if(!User) {
        return res.json({
            loginSuccess: false,
            message: err
        })
    }
    // 요청한 이메일이 DB에 있다면 비밀번호가 같은지 확인한다
    User.comparePassword(req.body.password, (err, isMatch) => {
        if(!isMatch)
        return res.json({
            loginSuccess: false, 
            message: "비밀번호가 틀렸습니다."
        })
        // 비밀번호까지 맞다면 유저를 위한 Token 생성

        User.generateToken((err, User) => {
            if(err) return res.status(400).send(err);
            // 토큰을 저장한다. 어디에? 쿠키? 로컬 스토리지? 
            res.cookie("x_auth", User.token).status(200).json({
                loginSuccess: true,
                userId: User._id})
        })
    })
})
})

// auth : middleware - 
app.get('/api/user/auth', auth, (req, res) => {
// 여기까지 미틀웨어를 통과해 왔다는 얘기는 Authentication이 true
const user = User
res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    // role: 1 = admin
    // role: 0 = 일반유저
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    phone: req.user.phone,
    role: req.user.role,
    image: req.user.image
})
})

// logout Route : 데이터베이스에 저장되었던 token을 지워줌
app.get('/api/user/logout',auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id},
        {token: ""}, (err, user) => {
            if(err) return res.json({
                success: false, err
            });
            return res.status(200).send({
                success: true
            })
        })
    // 유저를 찾아서 업데이트 시켜준다
})



app.listen(port, () => console.log(`Starting app on port ${port}`));