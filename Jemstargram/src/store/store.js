/* eslint-disable */ 
import { createStore } from "vuex";
import { db } from '../plugins/firebase';
import '../plugins/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-storage';
import 'firebase/auth';
import router from '../router/router';
export default createStore({
  state() {
    return {
      post: [
        {
          name: "Kim Hyun",
          userImage: "https://placeimg.com/100/100/arch",
          postImage: "https://placeimg.com/640/480/arch",
          likes: 36,
          date: "May 15",
          liked: false,
          content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
          filter: "perpetua",
        },
        {
          name: "John Doe",
          userImage: "https://placeimg.com/200/200/people",
          postImage: "https://placeimg.com/640/480/people",
          likes: 20,
          date: "Apr 20",
          liked: false,
          content: "흔한 자랑스타그램",
          filter: "clarendon",
        },
        {
          name: "me_lee_aptg",
          userImage: "https://placeimg.com/100/100/animals",
          postImage: "https://placeimg.com/640/480/animals",
          likes: 49,
          date: "Apr 4",
          liked: false,
          content: "우리집 개는 화장실 물도 내림",
          filter: "lofi",
        },
      ],
      // 좋아요
      likes: 0,
      pushLikes: false,

      // 더보기
      seeMore: 0,
      posts: [],

      // 페이스북
      facebook: {
        userEmail: null,
        userToken: null,
      },

    // 구글
    google: {
      email: localStorage.getItem('googleEmail'),
			displayName: localStorage.getItem('googleName'),
			uid: localStorage.getItem('googleUid'),
			token: localStorage.getItem('googleToken'),
			image: localStorage.getItem('googleImage'),
    }
    };
  },
  mutations: {
    // 좋아요
    likes(state){
      if(state.pushLikes == false) {
        state.likes++
        state.pushLikes = true
      } else {
        state.likes--
        state.pushLikes = false
      }
    },
    // 더보기
    setSeeMore(state, data){
      state.posts = data
      console.log(state.posts)
      state.post.push(data)
      state.seeMore++
    },
  
    // 페이스북
    facebookLogin(){
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().languageCode = 'ko';
      provider.addScope('user_birthday');
      provider.setCustomParameters({
        'display' : 'popup'
      })
      firebase.auth().signInWithPopup(provider).then((result) => {
        let credential = result.credential;
        let facebookUser = result.user;
        console.log(facebookUser)
        let accessToken = credential.accessToken;
        console.log(accessToken)
      }).catch((err) => {
        console.error('에러 ' + err.message)
      })
      
      // OAuth2TokenResponse{params: error=OAuthException&error_description=The%20request%20is%20invalid%20because%20the%20app%20is%20configured%20as%20a%20desktop%20app, httpMetadata: HttpMetadata{status=400, cachePolicy=NO_CACHE, cacheDurationJava=null, cacheImmutable=false, staleWhileRevalidate=null, filename=null, lastModified=null, retryAfter=null, crossOriginEmbedderPolicy=null, crossOriginOpenerPolicy=null, crossOriginResourcePolicy=null, headers=HTTP/1.1 200 OK

      //   , contentSecurityPolicies=[], originTrials=[], reportToHeaders=[], varyHeaderNames=[], cookieList=[]}}

    },
  
  // 구글
  googleLogin(state){
  const provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().languageCode = 'ko';
	provider.addScope('profile');
	provider.addScope('email');
  firebase.auth().signInWithPopup(provider).then(function (result) {
    state.google.token = result.credential.accessToken;
    state.google.email = result.user.email
    state.google.uid = result.user.uid
    state.google.displayName = result.user.displayName
    state.google.image = result.user.photoURL
    localStorage.setItem('googleEmail', state.google.email);
    localStorage.setItem('googleName', state.google.displayName);
    localStorage.setItem('googleUid', state.google.uid);
    localStorage.setItem('googleToken', state.google.token);
    localStorage.setItem('googleImage', state.google.image);
    router.push("/mypage");
  })},
  
  },
  actions: {
    // 더보기 
    seeMore(context, payload){
      let myUid = payload
        db.collection('post').where('uid', '==', myUid).get().then((result) => {
          console.log(result)
          result.forEach((doc) => {
            context.commit('setSeeMore', doc.data())
          })
        })
      }
  },
  modules: {},
});
