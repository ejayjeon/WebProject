<template>
    <q-layout class="mynovel bg-grey-9 text-white">
        <q-page-container>
            <!-- v-if : 만약에 해당 uid로 존재하는 creation이 없다면? (get collection) -->
            <creation/>
            <!-- v-else-if 
            새 연재하기 / 내 연재 작품 보기 
            버튼 클릭
            -->
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
import Creation from './Creation.vue'
export default {
    name: 'MyNovel',
    components: {Creation},
}
</script>
