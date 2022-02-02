<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-9 text-white">
    <q-header elevated class="bg-grey-9">
        <q-btn
          flat
          dense
          round
          @click="toggle"
          aria-label="Menu"
          icon="menu"
        />
    </q-header>
    <q-drawer
      v-model="navBar"
      show-if-above
      class="bg-grey-10"
    >
        
        <q-item-label header>WHOEVER</q-item-label>
        <q-avatar size="70px" class="avatar">
        <img src="https://cdn.quasar.dev/img/avatar3.jpg">
        </q-avatar>
        <q-space class="q-py-sm q-px-md"/>
        <div class="info"><strong> @ {{ $store.state.localStorageName }} </strong><small> ({{$store.state.localStorageEmail}})</small></div>
        <q-space class="q-py-sm q-px-md"/>
        <q-space class="q-py-sm q-px-md"/>

        <!-- Nav 내용 -->
        <q-list dark v-for="(m, i) in menu" :key="i">
        <!-- <q-item clickable target="_blank" rel="noopener" :href="m.path"> -->
        <!-- <q-item clickable target="_blank" rel="noopener"> -->
        <q-item clickable>
          <q-item-section avatar>
            <q-icon :name="m.icon" />
          </q-item-section>
          <!-- <q-item-section> -->
          <q-item-section @click="routePage(i)">
            <q-item-label>{{m.menu}}
                <!-- 하위 메뉴 아이템 -->
                <q-menu v-if="m.children" 
                auto-close
                transition-show="scale"
                transition-hide="scale"
                fit anchor="bottom right" self="top right">
                <q-icon name="arrow_drop_down" size="20px" />
                <q-list v-for="(c, i) in m.children" :key="i" style="min-width: 100px" >

                <q-item clickable>
                <q-item-section @click="$router.push(`/${m.path}/${c.path}`)">
                {{c.menu}}
                </q-item-section>
                </q-item>
                </q-list>
                </q-menu>

            </q-item-label>
             <!-- <q-item-label caption>5 min ago</q-item-label> -->
          </q-item-section>
        </q-item>
        <!-- </q-item> -->
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- 카로셀 -->
    <q-space class="q-pb-md"/>
    <q-carousel
      width="80%"
      class="bg-grey-9"
      animated
      v-model="slide"
      navigation
      infinite
      autoplay
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      padding
    >
    <q-carousel-slide :name="1" class="column no-wrap">
      <div class="row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap">
         <!-- <q-img v-for="(img, i) in 6" :key="i" class="rounded-borders col-2 full-height" :src="`https://github.com/JemmaJeon/kkotgalpi/blob/main/write${i}.jpeg`" /> -->
         <q-img v-for="(img, i) in 6" :key="i" class="rounded-borders col-2 full-height" src="https://cdn.quasar.dev/img/linux-avatar.png" />
      </div>
    </q-carousel-slide>

     <q-carousel-slide :name="2" class="column no-wrap">
      <div class="row fit justify-center items-center q-gutter-sm q-col-gutter no-wrap">
         <!-- <q-img v-for="(img, i) in 6" :key="i" class="rounded-borders col-2 full-height" :src="`https://github.com/JemmaJeon/kkotgalpi/blob/main/write${i}.jpeg`" /> -->
         <q-img v-for="(img, i) in 6" :key="i" class="rounded-borders col-2 full-height " src="https://cdn.quasar.dev/img/linux-avatar.png" />
      </div>
    </q-carousel-slide>

      </q-carousel>
        <!-- 검색창 -->
        <div class="searchForm">
        <div class="q-gutter-y-md column" style="justify-content: center; width: 60%;">
        <q-input cleable dense flat color="pink-3" v-model="search" input-class="text" class="q-ml-md" style="width: 100%">
        <template v-slot:append>
        <q-icon v-if="search === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
        </template>
        </q-input>
        </div>
        </div>  
        <!-- 검색창 -->

      <!-- tabs -->
<div class="q-pa-md">
<q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="pink-3"
          indicator-color="bg-gray-3"
          align="justify"
          narrow-indicator>
          <q-tab name="실시간인기작" label="실시간인기작" icon="celebration"/>
          <q-tab name="후에버인기작" label="후에버인기작" icon="favorite"/>
          <q-tab name="업데이트신작" label="업데이트신작" icon="star"/>
          <q-tab name="연재완료작" label="연재완료작" icon="try"/>
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
         <q-tab-panel class="bg-grey-9" name="실시간인기작">
            <Book/>
          </q-tab-panel>
          
          <q-tab-panel class="bg-grey-9" name="후에버인기작">
            <Book/>
          </q-tab-panel>

          <q-tab-panel class="bg-grey-9" name="업데이트신작">
             <Book/>
          </q-tab-panel>

          <q-tab-panel class="bg-grey-9" name="연재완료작">
             <Book/>
          </q-tab-panel>

        </q-tab-panels>
</div>

 <!-- 빠른 플로팅 버튼 -->
        <q-page-sticky position="bottom-right" :offset="offset">
        <q-fab
        icon="add"
        direction="up"
        color="pink-3"
        :disable="dragBtn"
        v-touch-pan.prevent.mouse="moveBtn"
        >
        <q-fab-action @click="floatingBtn" color="pink-3" icon="person_add" :disable="dragBtn"/>
        <q-fab-action @click="floatingBtn" color="pink-3" icon="mail" :disable="dragBtn"/>
        </q-fab>
        </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import Book from '@/components/Book.vue'
import cors from 'cors'
export default {
  name: 'Block',
  components: {
    Book,
  },
  setup () {
    const navBar = ref(false)
    const offset = ref([ 18, 18 ])
    const dragBtn = ref(false)
  

    function toggle () {
      navBar.value = !navBar.value
    }
    // function routePage(i) {
    //     switch(i) {
    //       case 0 : this.$router.push('/main'); break;
    //       case 1 : this.$router.push('/main/category'); break;
    //       case 2 : this.$router.push('/mypage'); break;
    //       case 3 : this.$router.push('/whoever'); break;
    //       case 4 : this.$router.push('/chat'); break;
    //       case 5 : firebase.auth().signOut(); 
    //                 this.$store.commit('delInfo')
    //                 this.$router.push('/main'); break;
    //     }
    // }
    return {
      navBar,
      toggle,
      search : ref(''),
      dragBtn,
      offset,
      menu: ref([
          {menu: '메인페이지', icon: 'home', path: '/main'},
          {menu: '카테고리', icon: 'category', path: 'main/category', children: [
            {menu: '판타지', path: 'fantasy'},
              {menu: '로맨스', path: 'romance'},
              {menu: 'SF', path: 'sf'},
              {menu: '스릴러', path: 'thriller'},
              {menu: '역사/무협', path: 'history'},
              {menu: '성인19+', path: 'adultonly'},
              {menu: '기타', path: 'etc'},
          ]},
          {menu: '나의 서재', icon: 'account_circle', path: 'mypage', children: [
              {menu: '나의 프로필', path: 'myprofile'},
              {menu: '나의 구독함', path: 'subscribe'},
              {menu: '나의 소설', path: 'mynovel'},
              {menu: '설정', path: 'settings'},
          ]},
          {menu: 'WHOEVER', icon: 'edit', path: '/whoever'},
          {menu: 'Chat Novel', icon: 'rate_review', path: '/chat'}]),
          moveBtn(e){
            dragBtn.value = e.isFirst !== true && e.isFinal !== true

            offset.value = [
            offset.value[ 0 ] - e.delta.x,
            offset.value[ 1 ] - e.delta.y
        ]
      },
      // tabMenus: ref([
      //   {name: '실시간 인기작',icon:'celebration'},
      //   {name: '후에버 인기작',
      //   icon: 'favorite'},
      //   {name: '업데이트 신작',
      //   icon: 'star'},
      //   {name: '연재완료작',
      //   icon: 'try'}
      // ]),
      tab: ref('실시간인기작'),
      slide: ref(1),
      cors,
    }
  },
  methods: {
      routePage(i) {
        switch(i) {
          case 0 : this.$router.push('/main'); break;
        //   case 1 : this.$router.push('/main/category'); break;
        //   case 2 : this.$router.push('/mypage'); break;
          case 3 : this.$router.push('/whoever'); break;
          case 4 : this.$router.push('/chat'); break;
        //   case 5 : firebase.auth().signOut(); 
        //             this.$store.commit('delInfo')
        //             this.$router.push('/main'); break;
        }
    },
    floatingBtn() {

    }
  },
}
</script>
<style scoped>
.avatar {
display: absolute;
left: 36%;
}
.info {
    text-align: center;
}
.searchForm{
  display: grid;
  place-items: center;
  padding: 3rem;
  height: 40vh;
}
</style>
