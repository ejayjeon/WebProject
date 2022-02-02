const { User } = require('../models/user')

let auth = (req, res, next) => {
// 인증처리 하는 곳
// 1. client cookie에서 token을 가져온다
let token = req.cookies.x_auth;

// 2. token을 복호화하여 user_id를 찾는다
User.findByToken(token, (err, user) => {
    if(err) throw err;
    if(!user) return res.json({ isAuth: false, err: true})
// 3. user가 있으면 인증 okay 
    req.token = token;
    req.user = user;
    next();
})
}

module.exports = { auth };