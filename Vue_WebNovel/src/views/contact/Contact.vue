<template>
    <q-layout class="contact bg-grey-9 text-white">
        <h3> Contact </h3> 
         <q-btn color="pink-3" @click="$router.push('/main')">메인</q-btn>
        <q-page-container>
        <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style lang="sass" scope>
.contact
    display: grid
    place-items: center
     padding: 20rem
</style>