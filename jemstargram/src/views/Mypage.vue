<template>
  <q-layout view="lHh lpr lFf" class="mypage">
    <q-page-container> 
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section class="header">
           <div class="title">{{$store.state.google.email}}
             <q-icon name="expand_more"/>
             <q-btn flat dense icon="menu" class="btn-right"/>
             <q-btn flat dense icon="add" class="btn-right"/>
           </div>
          </q-item-section>
        </q-item>

        <q-item class="info">
          <q-item-section>
             <q-avatar size="100px" color="deep-purple-5" text-color="white">
               <img :src="`${$store.state.google.image}`"/>
             </q-avatar>
          </q-item-section>

          <q-item-section class="postInfo">
           <ul>
             <li>11</li>
              <li>게시물</li>
           </ul>
          </q-item-section>

        <q-item-section class="postInfo">
           <ul>
             <li>11</li>
              <li>팔로워</li>
           </ul>
          </q-item-section>

          <q-item-section class="postInfo">
           <ul>
             <li>11</li>
              <li>팔로잉</li>
           </ul>
          </q-item-section>

        </q-item>
        <q-item class="name">
          {{$store.state.google.displayName}}
        </q-item>
        <q-item>
          <q-btn flat class="btn-big"> 프로필 편집</q-btn>
          <q-btn flat icon="person_add"/>
        </q-item>
          <q-tabs
          v-model="tab"
          class="text-grey"
          active-color="deep-purple-6"
          indicator-color="deep-purple-6"
          narrow-indicator
          align="left">
         <q-tab name="photo" icon="auto_awesome_mosaic" />
          <q-tab name="alarms" icon="portrait" />
          </q-tabs>
           <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="photo">
            <div class="row">
              <div class="col-4 pic" v-for="(p, i) in posts" :key="i">
                <!-- <q-img src="https://placeimg.com/500/300/nature" :ratio="1"/> -->
                <q-img :src="`${$store.state.posts.imageUrl}`" :ratio="1"/>
              </div>
                <!-- {{$store.state.posts.imageUrl}} -->
                
            </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <!-- 더보기를 눌러야 비로소 데이터가 뜸 -->
            
          </q-tab-panel>
           </q-tab-panels>
           <q-btn flat dense class="seeMore" @click="$store.commit('setSeeMore', posts)">더보기</q-btn>
      </q-list>
    </q-page-container>
  </q-layout>
</template>

<script>
import {mapState } from 'vuex'
export default {
    name: 'Mypage',
    data(){ return {
      uid: this.$store.state.google.uid,
      tab: 'photo',
    }},
    methods: {  
    },
    computed: {
      ...mapState({
        posts: 'posts',
        seeMore: 'seeMore'
      })
    },
    beforeMount(){
      this.$store.dispatch('seeMore', this.uid)
    }
}
</script>

<style scoped>
body {
  margin: 0;
}
ul > :first-child {
  font-size: 20px;
  font-weight: 900;
  text-align: center;
}
.mypage {
  padding: 20px;
}
.postInfo {
  display: grid;
  place-items: center;
}
.title {
  font-size: 25px;
  font-family: Roboto-Regular;
  font-weight: 900;
  cursor: pointer;
}
.name{
  font-size: 15px;
  left: 6%;

}
.btn-left {
  margin: auto;
  display: absolute;
  float: left;
}
.btn-right {
  display: absolute;
  float: right
}
.btn-big{
  width: 450px;
  border: 1px solid #d3d3d3;
}
.pic {
  padding: 2px;
}
.seeMore {
  width: 450px;
  border: 1px solid #d3d3d3;
  left: 6%;
}
</style>