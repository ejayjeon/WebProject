<template>
    <q-layout class="mynovel bg-grey-9 text-white">
        <q-page-container>
            <div v-if="!$store.state.myContent">
            <creation/>
            </div>
            <div class="row space" v-else>
            <q-btn class="btn" outline dark q-pb-md @click="$router.push('/mypage/mynovel/creation')">새 작품 쓰기</q-btn>
            <q-btn class="btn" outline dark q-pb-md @click="$router.push('/mypage/mynovel/managingturn')">연재 작품 이어 쓰기</q-btn>
            {{title}}
            </div>
        </q-page-container>
        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
import Creation from './Creation.vue'
export default {
    name: 'MyNovel',
    components: {Creation},
    created(){
        this.$store.dispatch('getMyContent')
    }
}
</script>
<style lang="sass" scoped>
*
    width: 80%
.btn 
    display: grid
    place-items: center
    width: 300px
    margin: 30px
</style>
