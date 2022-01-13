// 1. Initialize Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC7Hbatri5rRRbPV7cthYasAAZLFLBWREU",
    authDomain: "whoever-ej.firebaseapp.com",
    databaseURL: "https://whoever-ej-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "whoever-ej",
    storageBucket: "whoever-ej.appspot.com",
    messagingSenderId: "1002393022136",
    appId: "1:1002393022136:web:63e6d714eddf7d4b4cce4d"
  };

  const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase();
export const db = getFirestore();
export const auth = getAuth();
// export const storage = storage();
// export const storageRef = storage.ref()







// 2-1. 컬렉션과 문서 만들기
// try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  
// 2-2. 컬렉션과 데이터 읽기
// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     // map() 사용
//     return cityList;
//   }


//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
  




// 3. 사용자 전화번호로 인증 코드 전송 (웹 인증)
// import { signInWithPhoneNumber, signOut, GoogleAuthProvider, signInWithRedirect, FacebookAuthProvider} from "firebase/auth";
// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;

// const provider = new GoogleAuthProvider();
// const fbprovider = new FacebookAuthProvider();
// auth.languageCode = 'ko';
// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       window.confirmationResult = confirmationResult;
//       const code = getCodeFromUserInput();
//       confirmationResult.confirm(code).then((result) => {
//         var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
//         firebase.auth().signInWithCredential(credential);
//         const user = result.user;
//       }).catch((error) => {
//           console.error(error)
//       });
//     }).catch((error) => {
//         console.error(error)
//     });
//     grecaptcha.reset(window.recaptchaWidgetId);
// window.recaptchaVerifier.render().then(function(widgetId) {
//   grecaptcha.reset(widgetId);
// },

// Google Auth : 팝업형식
// signInWithPopup(auth, provider)
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     const user = result.user;
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const email = error.email;
//     const credential = GoogleAuthProvider.credentialFromError(error);
//   }),

// // Google Auth: 구글 리다이렉션 방법
//   getRedirectResult(auth)
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     const user = result.user;
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const email = error.email;
//     const credential = GoogleAuthProvider.credentialFromError(error);
//   }),



//   페이스북
// signInWithPopup(auth, fbprovider)
//   .then((result) => {
//     const user = result.user;
//     const credential = FacebookAuthProvider.credentialFromResult(result);
//     const accessToken = credential.accessToken;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const email = error.email;
//     const credential = FacebookAuthProvider.credentialFromError(error);
//   }),

//   signOut(auth).then(() => {
//   }).catch((error) => {
//   })
