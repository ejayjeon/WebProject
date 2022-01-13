/* eslint-disable */
<template>
  <q-layout view="lHh Lpr lFf" class="main bg-grey-9 text-white">
   <q-header class="bg-grey-9">
          <q-breadcrumbs separator=" > " class="text-white q-pa-md" active-color="pink-3" style="cursor: pointer">
            <q-btn flat @click="drawer = !drawer" dense icon="menu" />
      <q-breadcrumbs-el label="메인" icon="home" @click="$router.push('/main')" />
    </q-breadcrumbs>
         
      </q-header>

      <q-drawer
      v-model="drawer"
      show-if-above
      class="bg-grey-10"
      >
      <q-list dark>
      <q-item-label header>WHOEVER</q-item-label>
      <!-- 만약에 googleLogin 유저가 있다면 -->
      <div v-if="$store.state.googleUser.token">
      <q-avatar size="70px" class="avatar" style="cursor: pointer">
      <img :src="$store.state.googleUser.image">
      <q-menu
      auto-close
      transition-show="scale"
      transition-hide="scale"
      fit anchor="bottom right" self="top left">
      <q-icon name="arrow_drop_down" size="20px" />
      <q-list style="min-width: 100px" >
      <q-item clickable>
      <div @click="$store.commit('setGoogleLogOut')">로그아웃</div>
      </q-item>
      </q-list>
      </q-menu>
      </q-avatar>
      <q-space class="q-py-sm q-px-md"/>
      <div class="info"><strong> @ {{ $store.state.googleUser.displayName }} </strong><small> ({{$store.state.googleUser.email}})</small></div>
      </div>
      <!-- 만약에 이메일 유저가 있다면 -->
      <div v-else-if="$store.state.localStorageUid">
      <q-avatar size="70px" class="avatar" style="cursor: pointer" color="pink-3">
      {{$store.state.localStorageName}}
      <q-menu
      auto-close
      transition-show="scale"
      transition-hide="scale"
      fit anchor="bottom right" self="top left">
      <q-list style="min-width: 100px" >
      <q-item clickable>
      <div @click="$store.commit('setLogOut')">로그아웃</div>
      </q-item>
      </q-list>
      </q-menu>
      </q-avatar>
      <q-space class="q-py-sm q-px-md"/>
      <div class="info"><strong> @ {{ $store.state.localStorageUser.name }} </strong><small> ({{$store.state.localStorageUser.email}})</small></div>
      </div>
      <!-- 만약에 googleLogin유저가 없다면  -->
      <div class="q-py-sm q-px-md" v-else>
      <q-btn @click="$store.commit('setGoogleLogin')" icon-right="login" label="Google로 로그인" style="width: 270px" color="red" dark/>
      <q-space class="q-py-sm q-px-md"/>
      <q-btn @click="$store.commit('setFacebookLogin')" icon-right="login" label="facebook으로 로그인" style="width: 270px" color="indigo"/>
      <q-space class="q-py-sm q-px-md"/>
      <q-btn @click="$store.commit('setEmailLogin')" icon-right="login" label="이메일로 로그인" style="width: 270px" color="pink-3" />
      </div>
      <q-space class="q-py-sm q-px-md"/>
      <q-list padding v-for="(m, i) in menu" :key="i">
          <q-expansion-item
          :duration="800"
          expand-separator
          :icon="m.icon"
          :label="m.menu"
          v-if="m.children">
            <q-item dense class="bg-grey-10 text-white" v-for="(c, i) in m.children" :key="i">
              <q-item-section>
                <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
              <q-item-section @click="$router.push(`/${m.path}/${c.path}`)">
                {{c.menu}}
              </q-item-section>
            </q-item>
              </q-item-section>
            </q-item>
          </q-expansion-item>

           <q-item clickable v-ripple v-else>
              <q-item-section avatar>
                <q-icon :name="m.icon" />
              </q-item-section>
              <q-item-section @click="$router.push(`${m.path}`)">
                {{m.menu}}
              </q-item-section>
            </q-item>
      </q-list>
      </q-list>
      </q-drawer>

    <q-page-container>
      <router-view/>
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

      <!-- Tab -->
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
export default {
  name: 'Main',
  components: {Book, },
  setup () {
    const drawer = ref(false)
    const offset = ref([ 15, 15 ])
    const dragBtn = ref(false)

    function toggle () {
      drawer.value = !drawer.value
    }
    return {
      drawer,
      toggle,
      search : ref(''),
      dragBtn,
      offset,
      menu: ref([
          {menu: '메인페이지', icon: 'home', path: '/main'},
          {menu: '카테고리', icon: 'category', path: 'category', children: [
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
              {menu: '나의 구독함', path: 'mysubscribe'},
              {menu: '나의 소설', path: 'mynovel'},
              {menu: '설정', path: 'setting'},
          ]},
          {menu: 'WHOEVER', icon: 'edit', path: '/whoever'},
          {menu: '고객센터', icon: 'help', path: '/contact'}]),
          moveBtn(e){
            dragBtn.value = e.isFirst !== true && e.isFinal !== true
            offset.value = [
            offset.value[ 0 ] - e.delta.x,
            offset.value[ 1 ] - e.delta.y
        ]},
      tab: ref('실시간인기작'),
      slide: ref(1),
    }
  },
   methods: {
      routePage(i) {
        switch(i) {
          case 0 : this.$router.push('/main'); break;
          case 3 : this.$router.push('/whoever'); break;
          case 4 : this.$router.push('/contact'); break;
        }
    },
     floatingBtn() {},
   },
}
</script>
<style lang="sass">
::-webkit-scrollbar 
    width: 10px
::-webkit-scrollbar-track 
    background-color: transparent
::-webkit-scrollbar-thumb 
    box-shadow: transparent
.mynovel
    display: grid
    place-items: center
    padding: 20rem
.avatar 
  display: absolute
  left: 36%
.info 
    text-align: center
.searchForm
  display: grid
  place-items: center
  padding: 3rem
  height: 40vh

</style>