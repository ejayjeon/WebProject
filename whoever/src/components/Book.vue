<template>
<div class="book">
    <!-- axios로 데이터를 가져온 다음에, $store.dispatch 로 받아온 아이템들을 셋팅할 것 -->
   <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" class="coverImg">
      <q-btn flat rounded icon="favorite_border" class="likeBtn" 
      @click="$store.commit('likes')"/>
      {{$store.state.likes}}
      </q-img>
      <q-card-section>
        <div class="row no-wrap items-center">
          <div class="col ellipsis bookTitle">
            {{$store.state.novel.title}} <span class=" col-auto text-gray text-caption"> / {{$store.state.novel.writer}}</span>
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="15px" icon="star_border"
      icon-selected="star"
      icon-half="star_half"
      no-dimming color="grey"
        :color-selected="ratingColors"
        @click="$store.commit('starRating', stars)"/>
        <span class="text-caption text-grey q-ml-sm">{{$store.state.stars}} (551)</span>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-caption text-grey contentInfo">
          {{$store.state.novel.contentInfo}}
        </div>
      </q-card-section>
   </q-card>
    </div>
</template>

<script>
export default {
    name: 'Book',
    data(){return{
        stars: 5,
        ratingColors: ['deep-purple-2', 'deep-purple-3', 'deep-purple-4', 'deep-purple-5', 'deep-purple-6']
    }},
}
</script>

<style lang="sass" scoped>
*
  font-family: GowunDodum-Regular
.my-card
  width: 100%
  max-width: 180px
  height: auto
  max-height: 250px
.coverImg 
    position: relative
.bookTitle
    font-size: 15px
    font-weight: bold
.contentInfo
    font-size: 10px
.likeBtn
    position: absolute
    left: 75%
</style>