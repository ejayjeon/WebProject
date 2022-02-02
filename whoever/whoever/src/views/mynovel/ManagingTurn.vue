<template>
    <q-layout class="managing bg-grey-9 text-white">
    <q-page-container>
    <q-markup-table 
    class="bg-grey-9 text-white managing" flat bordered
    :grid="$q.screen.xs"
    :filter="filter"
    hide-header
    >
      <thead class="bg-grey-8">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <q-img
                style="width: 100px"
                :ratio="1"
                class="rounded-borders"
                :src="`${store.state.myContent.coverUrl.substring(5)}/${store.state.myContent.img}`"
              />
              <div class="text-h4 q-ml-md text-white"> {{$store.state.myContent.title}}<small>/ {{$store.state.myContent.nickName}}</small> 
    <div class="q-gutter-y-md column">
        <q-rating v-model="stars" :max="5" size="15px" 
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
        no-dimming color="grey"
        :color-selected="ratingColors"
        @click="$store.commit('starRating', stars)"/>
    </div>
              </div>
            </div>
          </th>
        </tr>
        <tr>
            <th class="text-left"> 회차 </th>
            <th class="text-center"> 제목 </th>
            <th class="text-center"> 날짜 </th>
            <th class="text-center"> 태그 </th>
            <th class="text-center"> 평점 </th>
        </tr>
      </thead>
      <tbody class="bg-grey-9">
        <tr>
          <td class="text-left">1</td>
          <td class="text-center">어느 날 꿈을 꾸었는데 갑자기 고구려야</td>
          <td class="text-center">2022.01.13.</td>
          <td class="text-center">#시간여행</td>
          <td class="text-center">4.8</td>
        </tr>
        <!-- https://github.com/JemmaJeon/kkotgalpi/blob/main/typing.jpeg?raw=true -->
       {{$store.state.myContent.coverUrl.substring(5)}}/{{$store.state.myContent.img}}
       <!-- { "partyTF": "클로즈", "termCheck": "yes", "feedBackTF": "비공개", "genre": [ { "code": "RO", "value": "romance", "label": "로맨스" } ], "userUid": "lZ05TSD4lpe7WtaOPWOZPMbOgnn1", "contentNo": "RO264367275264367275", "coverUrl": "blob:http://localhost:8080/c6a6e414-ed4e-4c4c-bb5c-681a7d3b0911", "serialDate": [ "tue", "sat" ], "userEmail": "ejayjeon@gmail.com", "nickName": "문리버", "contentInfo": "달을 사랑한 시인의 이야기", "privateTF": "비공개", "createDate": { "seconds": 1642056130, "nanoseconds": 557000000 }, "title": "달과 시인" } -->
       
      </tbody>
    </q-markup-table>

  <!-- <div class="q-pa-md">
    <q-table class="bg-grey-9 text-white"
      :grid="$q.screen.xs"
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :filter="filter"
      hide-header
    >
      <template v-slot:top-right>
        <q-input dark borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </div> -->



        <router-view/>
      </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'ManagingTurn',
    data (){return{
        stars: 0,
        ratingColors: ['pink-2', 'pink-3', 'pink-4', 'pink-5', 'pink-6'],
    }},
    
  created(){
        this.$store.dispatch('getMyContent')
    },
    computed: {
          
    },
    // methods: {
    //   ...mapMutations({
    //     title: 'myContent.title',
    //     nickName: 'myContent.nickName'
    //   })
    // },
     setup () {
    return {
      filter: ref(''),
    }
  }
}
</script>

<style lang="sass" scope>
.managing
    width: 80vw
small
    font-size: 15px
</style>