<template>
<q-layout view="lHh lpr lFf">
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${$store.state.google.image})`}"></div>
      <span class="profile-name"><b>{{ $store.state.google.displayName }}</b><q-space/><small> 우리동네 맛집 </small> </span>
      <q-btn flat dense icon="more_vert" class="menu"/>
    </div>
    <q-space class="q-pb-md"/>
    <div class="post-body" :style="{ backgroundImage : `url(${$store.state.post[0].postImage})`}"></div>
    <div class="post-content">
      <q-btn flat dense icon="favorite_border" class="btn" @click="$store.commit('likes')"/>
      <q-btn flat dense icon="chat_bubble_outline" class="btn"/>
      <q-btn flat dense icon="send" class="btn" @click="share"/>
      <q-btn flat dense class="btn2" icon="bookmark_border"/>
      <q-space class="q-pb-md"/>
      <p>♥︎ {{ $store.state.likes }} likes</p>
      <p>
        <strong>{{ $store.state.post[0].name }}</strong>
        {{ $store.state.post[0].content }}
      </p>
      <p class="date">{{ $store.state.post[0].date }}</p>
    </div>
  </div>
  </q-layout>
</template>

<script>
export default {
  name: "Post",
  data(){return{
    uid: this.$store.state.google.uid,
  }},
  methods: {
    share(){
      window.open('/login', 'Email 로그인', 'width=450, height=600', 'replace=true')
    }
  },
  // beforeMount(){
  //   this.$store.dispatch('seeMore', this.uid)
  // }
};
</script>

<style scoped>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 35px;
  height: 35px;
  background-size: 100%;
  border-radius: 50%;
  margin-left: 5px;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  font-size: 14px;
}
.place-name {
  display:grid
}
.post-header {
  height: 30px;
  padding-top: 10px;
  margin: 10px 0 0 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  margin-top: 20px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-top: 8px;
  margin: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
.btn {
  margin: auto;
  display: absolute;
}
.btn2 {
  margin: auto;
  display: absolute;
  float: right;
}
.menu {
  float: right;
}
</style>
