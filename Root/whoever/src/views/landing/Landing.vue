<template>
  <q-layout>
    <div class="row">
      <div class="col-6 black">
        <q-btn class="btn" @click="$router.push('/main')">
        메인페이지 가기
        </q-btn>
      </div>

      <div class="col-6 red">
        <q-btn class="btn" @click="$router.push('/signup')">
        로그인하기
        </q-btn>
      </div>
      <router-view/>
             </div>
  </q-layout>
</template>

<script>

export default {
  name: 'Landing',
  components: {
  }
}
</script>
<style scope>
.black {background-color: beige; height: 1000px;}
.red {background-color: red;}
.btn {
  max-height: 100%
}
</style>
