// 비밀 설정 정보 관리
/* 개발 환경이 로컬인지 아니면 배포모드인지에 따라 환경 변수를 다르게 설정해주어야 한다. hekoku?
process.env.NODE_ENV
local(로컬) : development
deploy(배포) : production 
*/

// local인 경우에는 dev.js에서 가져갈 수 있다
module.exports = {
    mongoURI: 'mongodb+srv://jemma:fjqkqmf256@jemma.na6n3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
}
