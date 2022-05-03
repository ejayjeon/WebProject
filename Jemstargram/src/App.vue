/* eslint-disable */
<template>
  <q-layout view="lHh lpr lFf">
    <q-header dark reveal elevated class="header bg-deep-purple-6 text-white">
      <q-btn flat dense icon="arrow_back_ios" class="header-button-left" @click="$router.go(-1)"/>
       <q-btn flat dense icon="arrow_forward_ios" class="header-button-right"/>
      <img src="./assets/jem.svg" class="logo text-white" @click="$router.push('/home')"/>
    </q-header>

    <q-page-container>
    <router-view/>
    </q-page-container>

    <q-footer dark reveal flat class="footer bg-white text-black">
      <ul class="footer-button">
      <q-btn flat dense :icon="f.name" v-for="(f, i) in icon" :key="i" @click="$router.push(`/${f.path}`)"/>
      </ul>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  naem: "App",
  data(){ return {
    icon : [
      {name: 'home', path: 'home'}, {name: 'search', path: 'search'}, {name: 'person_search', path: 'searchPerson'}, {name: 'mail_outline', path: 'sendMessage'} ,{name: 'person', path: 'mypage'}
      ]
  }},
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
#app {
  font-family: AppleSDGothicNeo-Regular, Roboto-Regular, sans-serif;
  box-sizing: border-box;
  margin-top: 60px;
  width: 100%;
  max-width: 550px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
.logo {
  width: 25px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 10px;
  cursor: pointer;
}
.header {
  position: relative;
  margin: auto;
  max-width: 550px;
  width: 100%;
  height: 50px;
  padding-bottom: 8px;
}
.header-button-left {
  float: left;
  width: 40px;
  margin: 5px 0 0 15px;
}
.header-button-right {
  float: right;
  width: 40px;
  margin: 5px 10px 0 0;
}
.footer {
  max-width: 550px;
  width: 100%;
  height: 50px;
  position: relative;
  margin: auto;
  border: 1px solid #eee;
}
/* .footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
} */
.footer-button {
  display: flex;
  justify-content:space-between;
  margin: auto;
  padding: 10px 30px 0 30px;
}

</style>