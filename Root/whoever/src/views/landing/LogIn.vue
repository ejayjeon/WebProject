<template>
<q-layout>
  <div class="q-pa-md wrapper">
      <q-card flat class="loginForm">

      <q-input
        flat
        v-model="email"
        label="E-mail *"
        suffix="이메일 형식으로 입력해주세요"
        lazy-rules
        color="deep-purple-13"
      />
         <q-space class="q-pa-md"/>
      <q-input
        flat
        type="password"
        v-model="pwd"
        label="Password *"
        lazy-rules
        color="deep-purple-13"
      />
        <q-space class="q-pa-md"/>
      <q-toggle v-model="rememberInfo" label="로그인 정보 기억하기" color="deep-purple-13"/>
        <q-space class="q-pa-md"/>
      <div class="loginBtn">
        <q-btn label="로그인" color="deep-purple-13" @click="onSubmitLogin"/>
        <q-btn label="취소" type="reset" color="deep-purple-13" flat class="q-ml-sm" @click="cxlConfirm">
        </q-btn>
      </div>

      </q-card>
  </div>
</q-layout>
</template>

<script>
// import firebase from "firebase/app";
// import "firebase/firebase-storage";
// import "firebase/auth";
export default {
    name : 'Login',
    data(){return{
        email: null,
        pwd: null,
        rememberInfo: false,
    }},
    methods: {
    //     onSubmitLogin(){
    //     firebase.auth().signInWithEmailAndPassword(this.email, this.pwd).then((result) => {
    //     console.log(result.user.metadata.lastSignInTime) // 마지막 로그인 시간 'Sun, 02 Jan 2022 16:43:54 GMT'
    //     console.log(result.user.displayName) // user01
    //     console.log(result.user.email) // user@user.com 
    //     console.log(result.user.uid) // ogLWtNR94Uh0PqQHFRfvzNk4I3T2
    //     if(result.user.email != this.email) {
    //         alert('이메일이 다릅니다')
    //     } else {
    //         alert('로그인 성공')
    //         this.$store.commit('setEmail', result.user.email)
    //         this.$store.commit('setName', result.user.displayName)
    //         this.$store.commit('setUid', result.user.uid)
    //         // localStorage.setItem('email', result.user.email)
    //         // localStorage.setItem('displayName', result.user.displayName)
    //         // localStorage.setItem('uid', result.user.uid)
    //         this.$router.replace("/main");
    //     }
    //   }).catch((err) => {alert(err)})

    //     },
    //     cxlConfirm(){
    //         !confirm('로그인 화면을 나가시겠습니까?') ? alert('로그인을 해주세요') : this.$router.go(-1)
    //     },
    //     authChange(){
    //         firebase.auth().onAuthStateChanged((user) => {
    //         // 사용자의 인증상태에 변화가 생기면 이 안의 코드가 실행 (로그인/로그아웃/새로고침)
    //         // isNewUser == false
    //         if(user) {
    //         console.log(user.uid)
    //         console.log(user.displayName)
    //         console.log(user.email)
    //         }
    //     })
    //     }
    // }
    }
}
</script>

<style scope>
.wrapper{
  display: grid;
  place-items: center;
  min-height: 100vh;
}
.loginForm {
    padding: 3rem;
    width: 500px;
}
.loginBtn {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>