import { createStore } from "vuex";
import { db } from '../plugins/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import 'firebase/auth';
import router from '../router/router';

export default createStore({
  state() {
    return {
		user: {
			lastName: null,
			firstName: null,
			email: null,
			pwd: null,
			gender: null,
			birthday: null,
			phone: null,
			uid: null
		},
		googleUser: {
			email: localStorage.getItem('googleUserEmail'),
			displayName: localStorage.getItem('googleUserName'),
			uid: localStorage.getItem('googleUserUid'),
			token: localStorage.getItem('googleUserToken'),
			image: localStorage.getItem('googleUserImage'),
		},
		facebookUser: {
			user: null,
			token: null,
		},
		localStorageUser: {
			name : localStorage.getItem('name'),
			email : localStorage.getItem('email'),
		},
		novel: {
				title: '개마경심-려',
				writer: '클린희뚜',
				contentInfo:
					'어느 날 고구려로 떨어진 한 공무원 준비생의 고구려여행기',
				rating: '5',
				ratingMany: '500',
				tags: [
					'#타임리프',
					'#고구려',
					'#보보경심려짝퉁',
					'#역사여행',
					'#태왕사신기',
				],
			},
		content: {
			title: null,
			nickName: null,
			contentInfo: null,
			coverUrl: null,
			serialDate: null,
			genre: {label: null, value: null, code: null},
			privateTF: false,
			feedBackTF: false,
			partyTF: false,
			termCheck: false,
		},

      // 좋아요
			likes: 0,
			clickLikes: false,
			stars: 0,

    }
  },
  mutations: {
    likes(state) {
			if (state.clickLikes == false) {
				state.likes++;
				state.clickLikes = true;
			} else {
				state.likes--;
				state.clickLikes = false;
			}
		},
	starRating(state, payload) {
		state.stars = payload;
		console.log(state.stars);
	},
	
// 구글로그인
  setGoogleLogin(state) {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().languageCode = 'ko';
	provider.addScope('profile');
	provider.addScope('email');
	firebase.auth().signInWithPopup(provider).then(function (result) {
			console.log(result.user.email)
			console.log(result.user.displayName)
			console.log(result.user.uid)
			console.log(result.user.photoURL)
			state.googleUser.token = result.credential.accessToken;
			state.googleUser.email = result.user.email
			state.googleUser.uid = result.user.uid
			state.googleUser.displayName = result.user.displayName
			state.googleUser.image = result.user.photoURL
			localStorage.setItem('googleUserEmail', state.googleUser.email);
			localStorage.setItem('googleUserName', state.googleUser.displayName);
			localStorage.setItem('googleUserUid', state.googleUser.uid);
			localStorage.setItem('googleUserToken', state.googleUser.token);
			localStorage.setItem('googleUserImage', state.googleUser.image);
			alert('로그인이 정상적으로 완료되었습니다')
		});
	firebase.auth().onAuthStateChanged((user) => {
		console.log(user)
	});
},

// 페이스북 로그인
setFacebookLogin(state) {
	const Provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth().languageCode = 'ko';
	Provider.addScope('profile');
	Provider.addScope('email');
	Provider.addScope('user_birthday');
	firebase
		.auth()
		.signInWithPopup(Provider)
		.then((result) => {
			var token = result.credential.accessToken;
			state.facebookUser.token = token;
			var user = result.user;
			state.facebookUser.user = user;
		});
},

setEmailLogin(state,payload){
	window.open('/login', 'Email 로그인', 'width=450, height=600', 'replace=true')
	let userInfo = payload
	state.user.email = userInfo[0],
	state.user.pwd = userInfo[1]
	console.log(userInfo)
	firebase.auth().signInWithEmailAndPassword(state.user.email, state.user.pwd).then((result) => {
        console.log(result)
        console.log(result.user.metadata.lastSignInTime) // 마지막 로그인 시간 'Sun, 02 Jan 2022 16:43:54 GMT'
        console.log(result.user.displayName) // user01
        console.log(result.user.email) // user@user.com 
        console.log(result.user.uid) // ogLWtNR94Uh0PqQHFRfvzNk4I3T2
        if(result.user.email != this.email) {
            alert('이메일이 다릅니다')
        } else {
            this.$router.replace("/");
			window.close()
        }
      }).catch((err) => {console.error("에러 " + err)})},

// 로그아웃
setSignOut(){
	firebase.auth().signOut();
		localStorage.removeItem('googleUser');
		state.localStorageGoogleUser = null;
		localStorage.removeItem('googleToken');
		state.localStorageGoogleToken = null;
		localStorage.removeItem('uid');
		state.localStorageUid = null;
		localStorage.removeItem('email');
		state.localStorageEmail = null;
		localStorage.removeItem('displayName');
		state.localStorageName = null;
	},

	// 소설 등록
	setCreation(state, payload){
		let contentList = payload;
		console.log(payload)
		state.content.title = contentList[0],
		state.content.nickName = contentList[1],
		state.content.contentInfo = contentList[2],
		state.content.coverUrl = contentList[3],
		state.content.serialDate = contentList[4],
		state.content.genre = contentList[5],
		state.content.privateTF = contentList[6],
		state.content.feedBackTF = contentList[7],
		state.content.partyTF = contentList[8],
		state.content.termCheck = contentList[9]
		let uid = localStorage.getItem('googleUserUid')
		var num = Math.round(Math.random()*1000000000)
		let contentNo = `${state.content.genre[0].code}${num}`
		db.collection('content').doc(contentNo).set({
			userEmail : localStorage.getItem('googleUserEmail'),
			userUid : uid,
			title : state.content.title,
			nickName : 	state.content.nickName,
			contentInfo : state.content.contentInfo,
			coverUrl : state.content.coverUrl,
			serialDate : state.content.serialDate,
			genre : state.content.genre,
			privateTF : state.content.privateTF,
			feedBackTF : state.content.feedBackTF,
			partyTF : state.content.partyTF,
			termCheck : state.content.termCheck,
			contentNo: `${contentNo}${num}`,
			createDate : new Date(),
		}).then((result) => {
			console.log(result)
			alert('작품 생성이 완료되었습니다');
			router.push('/mypage/mynovel/updatenovel');
		}).catch((err) => console.log(err));
	}
},

//   비동기 액션
  actions: {},
  modules: {},
});
