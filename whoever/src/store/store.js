import { createStore } from "vuex";
import { db, auth } from '../plugins/firebase'
import { collection, addDoc } from "firebase/firestore";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

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
			user: localStorage.getItem('googleUser'),
			token: localStorage.getItem('googleToken'),
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
	},	likes(state) {
    if (state.clickLikes == false) {
      state.likes++;
      state.clickLikes = true;
    } else {
      state.likes--;
      state.clickLikes = false;
    }
  },
  // 별점
  starRating(state, payload) {
    state.stars = payload;
    console.log(state.stars);
  },

//   가입 유저 데이터 추가
  setSignupUser(state, payload){
	payload.email = state.user.email
	payload.lastName = state.user.lastName
	payload.firstName = state.user.firstName
	payload.pwd = state.user.pwd
	payload.gender = state.user.gender
	payload.birthday = state.user.birthday
	payload.phone = state.user.phone


const credential = EmailAuthProvider.credentialWithLink(email, window.location.href);
reauthenticateWithCredential(auth.currentUser, credential)
  .then((result) => {console.log(result)})
  .catch((error) => {console.log(error.code, error.message)});
  },

// 구글 로그인
setGoogleLogin(state){
	signInWithPopup(auth, provider).then((result) => {
		auth.languageCode = 'ko';
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
		const user = result.user;
		state.googleUser.token = token;
		state.googleUser.uer = user;
		localStorage.setItem('googleToken', state.googleUser.token);
		localStorage.setItem('googleUser', state.googleUser.user);
		alert('로그인이 정상적으로 완료되었습니다')
	  }).catch((error) => {
		console.log('에러 ' + error.code + error.message)
	  });
},
// 로그아웃
setSignOut(){
	signOut(auth).then(() => {
		localStorage.removeItem('googleToken')
		localStorage.removeItem('googleUser')
		alert('로그아웃 되었습니다')
	  }).catch((error) => {
		console.log('에러 ' + error.code + error.message)
	  });
	  
},










//   비동기 액션
  actions: {},
  modules: {},
});
