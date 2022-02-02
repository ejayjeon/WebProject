<template>
    <q-layout class="writerprofile bg-grey-9 text-white">
        <h3> WriterProfile Page</h3>
        <div class="row">
          <q-btn color="pink-3" @click="$router.push('/mypage/mynovel')">나의 소설</q-btn>
       </div>
    </q-layout>
</template>

<script>
export default {
    name: 'WriterProfile'
}
</script>

<style lang="sass" scope>
.writerprofile
    display: grid
    place-items: center
    padding: 20rem
</style>