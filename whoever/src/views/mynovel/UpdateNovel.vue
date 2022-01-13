<template>
    <q-layout class="updatenovel bg-grey-9 text-white">
        <h3> UpdateNovel Page</h3>
        <div class="row">
          <q-btn color="pink-3" @click="$router.push('/main')">메인</q-btn>
       </div>
    </q-layout>
</template>

<script>
export default {
    name: 'UpdateNovel'
}
</script>

<style lang="sass" scope>
.updatenovel
    display: grid
    place-items: center
    padding: 20rem
</style>