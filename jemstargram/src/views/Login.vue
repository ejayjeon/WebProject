<template>
  <q-layout class="q">
    <q-page-container class="login">
        <q-img class="logo" src="@/assets/jem2.svg"/>
      <h2> Jemstagram</h2>
      <q-btn color="indigo-8" class="loginBtn" @click="$store.commit('facebookLogin')">Facebook 으로 로그인</q-btn>
      <q-btn color="red-7" class="loginBtn" @click="$store.commit('googleLogin')">Google 로 로그인</q-btn>
    </q-page-container>
    <q-page-container>
    <q-separator/>
    <q-item>
        <q-item-section clickable v-ripple class="others"> 또는
        <q-item-section flat class="others signup text-deep-purple-6" @click="signup"> 이메일로 가입하기 </q-item-section>
        </q-item-section>
        </q-item>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
    name : 'Login',
    methods: {
        signup(){
           window.open('/signup', 'Email로 가입하기', 'width=450, height=600', 'replace=true')
        }
    },
}
</script>

<style scoped>
.q {
    display: grid;
}
.logo {
  width: 50px;
  display: block;
  position: absolute;
  cursor: pointer;
  top: 50px;
}
.login {
    display: grid;
    place-items: center;
    margin: 30px;
    font-family: Italianno-Regular;
}
.loginBtn {
    display: absolute;
    width: 450px;
    font-family: OpenSans-Regular;
}
.others {
    display: grid;
    text-align: center;
    margin: 30px;
}
.signup {
    cursor: pointer;
}
</style>