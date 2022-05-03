<template>
<div class="book">
    <!-- axios로 데이터를 가져온 다음에, $store.dispatch 로 받아온 아이템들을 셋팅할 것 -->
   <q-card dark class="my-card" style="cursor: pointer">
     <q-card class="coverImg">
      <q-img src="@/assets/illu7.jpeg" id="img">
      <q-btn flat rounded icon="favorite_border" class="likeBtn" 
      @click="$store.commit('likes')"/>
      </q-img>
      <!-- 신작 3일 동안 New -->
      <q-badge color="red" floating label="new"/>
      </q-card>
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
           <q-btn class="contentInfo" flat @click="$router.push(`${$route.fullPath}/detail/:id`)"> >></q-btn>
        </div>
      </q-card-section>
   </q-card>
    </div>
</template>
<script>
export default {
    name: 'Book',
    data(){return{
        stars: 0,
        ratingColors: ['pink-2', 'pink-3', 'pink-4', 'pink-5', 'pink-6']
    }},
}
</script>

<style lang="sass" scoped>
*
  font-family: GowunDodum-Regular
.book
  padding: 10px
.my-card
  width: 100%
  max-width: 180px
  height: auto
  max-height: 250px
#img
  width: 180px
  height: 120px
  object-fit: fill
.bookTitle
    font-size: 15px
    font-weight: bold
.contentInfo
    font-size: 10px
    overflow-y: auto
.likeBtn
    position: absolute
    left: -5%
</style>