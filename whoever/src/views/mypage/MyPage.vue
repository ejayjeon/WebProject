<template>
    <q-layout view="lHh Lpr lff" container style="height: 944px" class="mypage bg-grey-9 text-white">
      <q-header class="bg-transparent">
          <q-breadcrumbs separator=" > " class="text-white q-pa-md" active-color="pink-3" style="cursor: pointer">
            <q-btn flat @click="drawer = !drawer" dense icon="menu" />
      <q-breadcrumbs-el label="메인" icon="home" @click="$router.push('/main')"/>
      <q-breadcrumbs-el label="나의 서재" icon="home" @click="$router.push('/mypage')"/>
      <div v-if="menu.children">
      <q-breadcrumbs-el :label="menu.name" icon="widgets"/>
      </div>
    </q-breadcrumbs>
      </q-header>
      <q-page-container>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="300"
        class="bg-grey-10"
       dark>
        <q-scroll-area style="height: calc(100% - 200px); margin-top: 200px; border: none">
      <q-list padding v-for="(m, i) in menu" :key="i">
          <q-expansion-item
          :duration="800"
          expand-separator
          :icon="menu[i].icon"
          :label="m.name"
          v-if="m.children">
            <q-item dense class="bg-grey-10 text-white" v-for="(c, i) in m.children" :key="i">
              <q-item-section>
                <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>
              <q-item-section @click="$router.push(`/mypage/${m.path}/${c.path}`)">
                {{c.name}}
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
                {{m.name}}
              </q-item-section>
            </q-item>
      </q-list>
        </q-scroll-area>
        <q-img class="absolute-top" src="@/assets/pink5.jpeg" style="height: 180px">
          <div class="absolute-bottom bg-transparent">
             <div v-if="$store.state.googleUser.token">
            <q-avatar size="70px" class="q-mb-sm avatar">
               <img :src="$store.state.googleUser.image">
            </q-avatar>
            <div class="text-weight-bold">{{$store.state.googleUser.displayName}}님 </div>
            <div>@닉네임</div>
          </div>
          </div>
        </q-img>
      </q-drawer>
          <router-view/>
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'MyPage',
    setup () {
    return {
      drawer: ref(false),
      menu: ref([
        {
          name: '나의 프로필', path: 'myprofile', icon: 'account_circle', children: [
          {name: '작가 프로필 등록', path: 'writerprofile'},
          {name: '내 프로필 수정', path: 'editprofile'}, 
          ]},
        {
          name: '내 소설 관리', path: 'mynovel', icon: 'menu_book', children: [
            {name: '작품 관리', path: 'managingnovel'},
            // {name: '소설 쓰기', path: 'postnovel'},
            {name: '회차 관리', path: 'managingturn'},
            {name: '작가 게시판', path: 'boardnovel'},
            {name: '리더스 파티', path: 'readersparty'},
            {name: '독자별 통계', path: 'readerschart'},
          ]},
        {
          name: '나의 구독함', path: 'mysubscribe', icon: 'subscriptions',
        },
        {
          name: '후에버 리스트', path: 'whoeverlist', icon: 'view_list',
        },
      ]),
    }
  }
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
.avatar 
  display: absolute
  left: 34%
</style>