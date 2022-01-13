<template>
  <div class="login">
  <q-layout class="q-pa-md items-center bg-grey-9 text-white loginForm">
    <div
      class="q-gutter-md container">
      <q-input
        dark
        outlined
        v-model="email"
        type="email"
        suffix="예시) test@gmail.com"
        label="E-mail *"
        hint="가입한 이메일을 입력해 주세요"
        color="purple-12"
        lazy-rules
        :rules="[ val => val && val.length > 0 || '이메일 형식을 입력해주세요']"
      />

      <q-input 
      dark
      v-model="pwd" 
      label="Password *"
      color="purple-12"
      outlined :type="isPwd ? 'password' : 'text'" hint="비밀번호는 6자리 이상 입력해주세요">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>


      <q-toggle v-model="rememberMe" label="로그인 정보 기억하기" color="purple-12" />

      <div class=btn>
        <q-btn label="로그인" color="purple-12" @click="$store.commit('setEmailLogin', [email, pwd, rememberMe])"/>
        <q-btn label="취소하기" color="purple-12" flat class="q-ml-sm" @click="close" />
      </div>
    </div>
  </q-layout>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firebase-storage";
import "firebase/auth";
export default {
    name: 'Login',
    data(){ return {
      email: '',
      pwd: '',
      rememberMe: false,
      isPwd: 'password'
    }},
    methods: {
      login() {
        console.log(this.email)
        console.log(this.pwd)
    // 이 정보같은 경우는 구글의 스토어에 저장이 된다. 우리는 볼 수 없다. 따라서 우리도 보고 쓸 수 있도록 FireStore에 저장해보자
      
    },

    logOut() {
        firebase.auth().signOut()
    },
    close(){
        window.close()
    },

     authChange(){
        firebase.auth().onAuthStateChanged((user) => {
            // 사용자의 인증상태에 변화가 생기면 이 안의 코드가 실행 (로그인/로그아웃/새로고침)
            // isNewUser == false
            if(user) {
            console.log(user.uid)
            console.log(user.displayName)
            console.log(user.email)
            }
        })
    },
    

    },
   
}
</script>

<style scope>
.loginForm {
  display: flex; 
  justify-content: center;
  width: 100%;
  height: 70vh;
  flex-direction: row;
  background: transparent;
}
.container {
  padding: 70px 20px 30px 20px ;
  margin: 10px;
  border-radius: 10%;
  border: 1px dotted rgb(173, 173, 173);

}
.btn {
display: flex;
flex-direction: row;
align-content: flex-start;
justify-content: center;
align-items: baseline;
}

</style>