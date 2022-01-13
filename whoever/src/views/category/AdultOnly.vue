<template>
    <q-layout class="adultonly bg-grey-9 text-white">
        <h3> AdultOnly Page</h3>
        <div class="row">
          <q-btn color="pink-3" @click="$router.push('/main/category')">카테고리</q-btn>
       </div>
    </q-layout>
</template>

<script>
export default {
    name: 'AdultOnly'
}
</script>

<style lang="sass" scope>

</style>