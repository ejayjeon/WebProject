<template>
    <q-layout class="fantasy bg-grey-9 text-white">        
        <div class="row">
           
                 <Book v-for="(m, i) in 12" :key="i"/>
                 <Book @click="$store.dispatch('getNovelList')"/>
         
       </div>
    </q-layout>
</template>

<script>
import Book from '@/components/Book.vue'
export default {
    name: 'Fantasy',
    components: {Book},
}
</script>

<style lang="sass" scope>
.fantasy
    display: grid
    place-items: center
</style>