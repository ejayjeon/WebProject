// const { db } = require('../src/plugins/firebase');
const functions = require('firebase-functions');
var admin = require('firebase-admin');
var serviceAccount = require('./whoever.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL:
		'https://kkotgalpi-4fec2-default-rtdb.asia-southeast1.firebasedatabase.app',
});
// Functions 돌리는 구글 컴퓨터와 Firestore 돌리는 구글 컴퓨터가 다름 -> 접근권한 해제해 주는 것
const db = admin.firestore();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// helloWorld로 접속하면 ->
exports.helloWorld = functions
	.region('asia-northeast3')
	.https.onRequest((request, response) => {
		// firebase console에 로그 찍어줘
		functions.logger.info('Hello logs!', { structuredData: true });
		response.send('안녕하세요');
	});
// https://asia-northeast3-kkotgalpi-4fec2.cloudfunctions.net/helloWorld
// functions를 이용해서 글 올리기, 가입, 로그인, 업로드 등 특정코드 실행가능

// 알림기능 : 게시물 발행

exports.createAlert = functions
	.region('asia-northeast3')
	.firestore.document('chatroom/{docid}')
	.onCreate((snapshot, context) => {
		// snapshot : 저장된 모든 게시물, context: 게시물의 모든 경로
		// 'chartroom에 게시물을 발생하면'
		var product = snapshot.data().product;
		var who = snapshot.data().who;
		// user컬렉션 참여자 document에 필드 추가
		db.collection('user').doc(who[0]).update({ alert: '채팅알림' });
	});
