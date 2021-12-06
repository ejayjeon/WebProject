// 환경변수 설정을 Deployment or Production 으로 분기처리 해주는 곳

if(process.env.NODE_ENV === 'development') {
module.exports = require('./dev');
// 환경변수가 development라면 모듈을 dev.js 파일에서 가져온다
} else {
module.exports = require('./pro');
// 그렇지 않으면 (반대) 모듈을 pro.js에서 가져온다
}