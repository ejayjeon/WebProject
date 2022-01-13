<template>
    <q-layout class="manageturn bg-grey-9 text-white">
    <q-markup-table 
    class="bg-grey-9 text-white manageturn" flat bordered
    :grid="$q.screen.xs"
    :rows="회차"
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
                src="@/assets/illu8.jpeg"
              />
              <div class="text-h4 q-ml-md text-white">{{$store.state.novel.title}} <small>/ {{$store.state.novel.writer}}</small> 
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





    </q-layout>
</template>

<script>
import { ref } from 'vue'
const columns = [
  {
    name: 'desc',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
  { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
  { name: 'carbs', label: 'Carbs (g)', field: 'carbs' }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65
  }
]
export default {
    name: 'ManageTurn',
    data (){return{
         stars: 0,
        ratingColors: ['pink-2', 'pink-3', 'pink-4', 'pink-5', 'pink-6']
    }},
     setup () {
    return {
      filter: ref(''),
      columns,
      rows
    }
  }
}
</script>

<style lang="sass" scope>
.manageturn
    width: 90vw
small
    font-size: 15px
</style>