const functions = require("firebase-functions");
var admin = require("firebase-admin");
var serviceAccount = require("./key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://whoever-ej-default-rtdb.asia-southeast1.firebasedatabase.app"
});
const db = admin.firestore();
// 유저 생성 trigger
exports.createUser = functions
.region('asia-northeast3')
.auth.user()
.onDelete(async (user) => {
    const { uid, email, displayName, photoURL } = user;
    const u = {
        email,
        displayName,
        photoURL,
        createdate: new Date(),
    };
    db.collection('user').doc(uid).set(u);
});
// 유저 삭제 트리거

exports.deleteUser = functions
	.region('asia-northeast3')
	.auth.user()
	.onDelete(async (user) => {
		const { uid } = user;
		db.collection('users').doc(uid).remove(u);
	});
