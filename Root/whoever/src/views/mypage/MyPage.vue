<template>
    <q-layout view="lHh Lpr lff" container style="height: 940px" class="shadow-2">
      <q-header elevated class="bg-deep-purple-8">
        <q-toolbar>
          <q-toolbar-title>{{myPageMenu.key}}</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" icon="menu" />
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item v-for="(m, i) in myPageMenu" :key="i" clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="m.value" />
              </q-item-section>
              <q-item-section>
               {{m.key}}
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">
              {{$store.state.localStorageName}}
            </div>
            <div>{{$store.state.localStorageEmail}}</div>
          </div>
        </q-img>
      </q-drawer>

      <q-page-container>
        <q-page padding class="pageForm">
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page>
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
    name : 'myPage',
    data() { return {
      myPageMenu : [{key: '나의 프로필', value: 'account_box'}, {key: '나의 서재', value: 'local_library'}, {key: '나의 소설', value:'menu_book'}, {key:'설정', value:'settings'}]
    }},
    setup () {
    return {
      drawer: ref(false)
    }
  },
}
</script>

<style scope>
.pageForm {
  overflow-y: auto;
}
</style>