import { createStore } from 'vuex';
// import axios from 'axios';
import { db } from '../plugins/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import 'firebase/auth';
import router from '../router/router';

export default createStore({
	state() {
		return {
			login: [{ loginEmail: '' }, { loginPwd: '' }],
			googleLoginUser: localStorage.getItem('googleUser'),
			googleLoginToken: localStorage.getItem('googleToken'),

			facebookLoginUser: localStorage.getItem('facebookUser'),
			facebookLoginToken: localStorage.getItem('facebookToken'),

			user: [
				{ email: '' },
				{ pwd: '' },
				{ name: '' },
				{ phone: '' },
				{ birthday: '' },
				{ gender: '' },
			],
			creation: [
				{ title: null },
				{ nickName: null },
				{ contentInfo: null },
				{ coverUrl: null },
				{ serialDate: null },
				{ genre: [] },
				{ privateTF: true },
				{ reviewTF: true },
				{ starRatingTF: true },
				{ partyTF: true },
				{ termCheck: true },
				{ date: new Date() },
			],
			// 로컬스토리지의 값을 null로 해버렸기 때문에 새로고침하면 사라짐. 새로고침해도 값을 유지하기 위해서는 localstorage값을 집어넣어야 함
			// localStorageUid: null,
			localStorageUid: localStorage.getItem('uid'),
			// localStorageEmail: null,
			localStorageEmail: localStorage.getItem('email'),
			// localStorageName: null,
			localStorageName: localStorage.getItem('name'),
			// localStorageLoginTime: null,
			localStorageLoginTime: localStorage.getItem('logintime'),

			// 좋아요
			likes: 0,
			clickLikes: false,
			stars: 0,

			// novel
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
		};
	},
	mutations: {
		// Signup.vue -> store.js / setter
		setSignup(state, payload) {
			let signupUser = payload;
			(state.user.email = signupUser[0]),
				(state.user.pwd = signupUser[1]),
				(state.user.name = signupUser[2]),
				(state.user.phone = signupUser[3]),
				(state.user.birthday = signupUser[4]),
				(state.user.gender = signupUser[5]),
				firebase
					.auth()
					.createUserWithEmailAndPassword(
						state.user.email,
						state.user.pwd
					)
					.then((result) => {
						console.log(result.user);
						// 가입후 생성된 user의 uid를 document의 id로 생성하자.
						db.collection('user').doc(result.user.uid).set({
							name: state.user.name,
							pwd: state.user.pwd,
							email: state.user.email,
							phone: state.user.phone,
							birthday: state.user.birthday,
							gender: state.user.gender,
							uid: result.user.uid,
						});
						result.user.updateProfile({
							displayName: state.user.name,
							phone: state.user.phone,
							birthday: state.user.birthday,
							gender: state.user.gender,
						});
						alert('가입이 완료되었습니다. 다시 로그인을 해주세요');
						router.push('/signup');
					})
					.catch((err) => {
						console.error('에러 ' + err);
					});
		},
		// Login.vue -> store.js / setter
		setLogin(state, payload) {
			let loginUser = payload;
			state.login.loginEmail = loginUser[0];
			state.login.loginPwd = loginUser[1];
			firebase
				.auth()
				.signInWithEmailAndPassword(
					state.login.loginEmail,
					state.login.loginPwd
				)
				.then((result) => {
					state.localStorageLoginTime =
						result.user.metadata.lastSignInTime; // 마지막 로그인 시간 'Sun, 02 Jan 2022 16:43:54 GMT'
					state.localStorageName = result.user.displayName; // user01
					state.localStorageEmail = result.user.email; // user@user.com
					state.localStorageUid = result.user.uid; // ogLWtNR94Uh0PqQHFRfvzNk4I3T2
					console.log(
						'uid : ' +
							state.localStorageUid +
							' email : ' +
							state.localStorageEmail +
							' name : ' +
							state.localStorageName +
							'time : ' +
							state.localStorageLoginTime
					);
					if (result.user.email != state.login.loginEmail) {
						alert('이메일이 다릅니다');
					} else {
						alert('로그인 성공');
						localStorage.setItem('uid', state.localStorageUid);
						localStorage.setItem('email', state.localStorageEmail);
						localStorage.setItem('name', state.localStorageName);
						localStorage.setItem(
							'logintime',
							state.localStorageLoginTime
						);
						router.push('/main');
					}
				})
				.catch((err) => {
					alert(err);
				});
		},
		// 구글 로그인
		setGoogleLogin(state) {
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().languageCode = 'ko';
			provider.addScope('profile');
			provider.addScope('email');
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(function (result) {
					var token = result.credential.accessToken;
					var user = result.user;
					state.googleLogin = user;
					state.googleLoginToken = token;
					console.log(state.googleLogin);
					localStorage.setItem('googleUser', state.googleLogin);
					localStorage.setItem('googleToken', state.googleLoginToken);
					alert('로그인 성공');
				});
			firebase.auth().onAuthStateChanged((user) => {
				state.googleLoginUser = user;
			});
		},
		setGoogleLogOut(state) {
			firebase.auth().signOut();
			localStorage.removeItem('googleUser');
			state.googleLogin = null;
			localStorage.removeItem('googleToken');
			state.googleLoginToken = null;
		},
		setFacebookLogin(state) {
			const fbProvider = new firebase.auth.FacebookAuthProvider();
			fbProvider.addScope('profile');
			fbProvider.addScope('email');
			firebase
				.auth()
				.signInWithPopup(fbProvider)
				.then((result) => {
					var token = result.credential.accessToken;
					state.facebookLoginToken = token;
					var user = result.user;
					state.facebookLoginUser = user;
				});
		},
		// Creation.vue -> store.js / setter
		setCreation(state, payload) {
			let creationData = [...payload];
			state.creation.title = creationData[0];
			state.creation.nickName = creationData[1];
			state.creation.contentInfo = creationData[2];
			state.creation.coverUrl = creationData[3];
			state.creation.genre = creationData[4];
			state.creation.serialDate = creationData[5];
			state.creation.privateTF = creationData[6];
			state.creation.reviewTF = creationData[7];
			state.creation.starRatingTF = creationData[8];
			state.creation.partyTF = creationData[9];
			state.creation.termCheck = creationData[10];
			state.creation.date = creationData[11];
			console.log(state.creation.genre);

			db.collection('creation')
				.add({
					title: state.creation.title,
					nickName: state.creation.nickName,
					contentInfo: state.creation.contentInfo,
					coverUrl: state.creation.coverUrl,
					serialDate: state.creation.serialDate,
					genre: JSON.parse(state.creation.genre),
					privateTF: state.creation.privateTF,
					reviewTF: state.creation.reviewTF,
					starRatingTF: state.creation.starRatingTF,
					partyTF: state.creation.partyTF,
					termCheck: state.creation.termCheck,
					date: new Date(),
					uid: localStorage.getItem('uid'),
					email: localStorage.getItem('email'),
					name: localStorage.getItem('name'),
				})
				.then((result) => {
					console.log(result);
					alert('작가 계정 생성이 완료되었습니다');
					window.location.href = '/';
				})
				.catch((err) => console.error(err));
		},

		// Login.vue -> store.js / setter
		setUid(state, payload) {
			state.localStorageUid = payload;
			localStorage.setItem('uid', state.localStorageUid);
		},
		setEmail(state, payload) {
			state.localStorageEmail = payload;
			localStorage.setItem('email', state.localStorageEmail);
		},
		setName(state, payload) {
			state.localStorageName = payload;
			localStorage.setItem('name', state.localStorageName);
		},

		// store.commit('함수이름')
		getUid(context) {
			// context.localStorageUid = localStorage.getItem('uid');
			context.commit('localStorageUid', localStorage.getItem('uid'));
		},
		getEmail(state) {
			state.localStorageEmail = localStorage.getItem('email');
		},
		getName(state) {
			state.localStorageName = localStorage.getItem('displayName');
		},
		delInfo(state) {
			localStorage.removeItem('uid');
			state.localStorageUid = null;
			localStorage.removeItem('email');
			state.localStorageEmail = null;
			localStorage.removeItem('displayName');
			state.localStorageName = null;
		},
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
	},
	action: {},
});
