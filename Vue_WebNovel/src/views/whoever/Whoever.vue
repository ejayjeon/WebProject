<template>
    <q-layout class="whoever bg-grey-9 text-white">
         <q-btn flat color="pink-3" @click="$router.push('/main')">WHOEVER</q-btn>
        <q-page-container>
        <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'Whoever'
}
</script>

<style lang="sass" scope>
</style>