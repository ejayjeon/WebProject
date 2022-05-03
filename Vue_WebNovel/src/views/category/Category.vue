<template>
    <q-layout view="lHh Lpr lff" container style="height: 944px" class="category bg-grey-9 text-white">
        <q-splitter
      v-model="categorymenu"
      style="height: 100%">
      <template v-slot:before>
        <div v-for="(m, i) in menu" :key="i">
        <q-tabs
          v-model="tab"
          vertical
          :class="m.color"
          @click="$router.push(`/category/${m.path}`)"
          >
          <h5><q-tab :name="m.name" :icon="m.icon" :label="m.name" /></h5>
        </q-tabs>
         </div>
      </template>
      <template v-slot:after>
          <q-breadcrumbs separator=" > " class="text-white q-pa-md" active-color="pink-3" style="cursor: pointer">
      <q-breadcrumbs-el icon="home" label="메인" @click="$router.push('/main')"/>
      <q-breadcrumbs-el icon="category" label="카테고리" @click="$router.push('/category')"/>
    </q-breadcrumbs>
           <div v-for="(m, i) in menu" :key="i">
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          class="bg-grey-9 text-white">
          <q-tab-panel :name="m.name">
          <router-view/>
          <q-btn dark outline @click="$store.dispatch('seeMore', $route.path)" class="seeMoreBtn">더보기</q-btn>
          </q-tab-panel>
        </q-tab-panels>
         </div>
      </template>
    </q-splitter>
   
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
          {name: '판타지', icon: 'looks_one', path: 'fantasy', color: 'text-pink-1'},
          {name: '로맨스', icon: 'looks_two', path: 'romance', color: 'text-pink-2'},
          {name: 'SF', icon: 'looks_3', path: 'sf', color: 'text-pink-3'},
          {name: '스릴러', icon: 'looks_4', path: 'thriller', color: 'text-pink-4'},
          {name: '역사/무협', icon: 'looks_5', path: 'history', color: 'text-pink-5'},
          {name: '성인19+', icon: 'looks_6', path: 'adultonly', color: 'text-pink-6'},
          {name: '기타', icon: 'tag', path: 'etc', color: 'text-pink-7'},
      ]),
      tab: ref('fantasy'),
      categorymenu: ref(15),
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
.categoryForm
    display: grid
.seeMoreBtn
    display: grid
    place-items: center
</style>