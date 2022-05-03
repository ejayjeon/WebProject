<template>
    <q-layout class="myprofile bg-grey-9 text-white">
        <q-page-container>
        <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'MyProfile'
}
</script>

<style lang="sass" scope>
.myprofile
    display: grid
    place-items: center
     padding: 20rem
</style>