<template>
    <q-layout class="sf bg-grey-9 text-white">
        <h3> SF Page</h3>
        <div class="row">
          <q-btn color="pink-3" @click="$router.push('/category')">카테고리</q-btn>
       </div>
    </q-layout>
</template>

<script>
export default {
    name: 'SF'
}
</script>

<style lang="sass" scope>
</style>