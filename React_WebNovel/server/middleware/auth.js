const cookieparser = require('cookie-parser');
const { User } = require('../models/User');
let auth = (요청, 응답, next) => {
// 인증처리를 하는 곳
// 1. 클라이언트 쿠키에서 토큰을 가져온다
let token = 요청.cookies.UserToken;
// 2. 가져온 토큰을 복호화한 한 후 유저를 찾는다
User.findByToken(token, (에러, user) => {
    if(에러) throw 에러;
    if(!user) return 응답.json({ isAuth: false, error: true })

    요청.token = token;
    요청.user = user;
    // 요청정보에 token과 user 정보를 넣어주어야, server에서 요청.body를 찾을 때 token과 user 정보를 찾을 수 있다
    next();
})


// 4. 유저가 있으면 인증 OK

// 5. 유저가 없으면 인증 No
}
module.exports = { auth };