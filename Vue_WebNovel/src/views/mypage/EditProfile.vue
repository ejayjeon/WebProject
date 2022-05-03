<template>
    <q-layout class="editprofile bg-grey-9 text-white">
        <h3> EditProfile Page</h3>
        <div class="row">
          <q-btn color="pink-3" @click="$router.push('/mypage/mynovel')">나의 소설</q-btn>
       </div>
    </q-layout>
</template>

<script>
export default {
    name: 'EditProfile'
}
</script>

<style lang="sass" scope>
.editprofile
    display: grid
    place-items: center
    padding: 20rem
</style>