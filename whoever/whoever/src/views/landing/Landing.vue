<template>
<q-layout class="landing bg-grey-9 text-white">
    <q-resize-observer @resize="onResize" :debounce="0" />
    <q-splitter
      id="photos"
      v-model="splitterModel"
      :limits="[0, 100]"
      :style="splitterStyle"
      before-class="overflow-hidden"
      after-class="overflow-hidden"
      separator-class="bg-grey-6"
    >
      <template v-slot:before>
        <img
          src="https://github.com/JemmaJeon/kkotgalpi/blob/main/write0.jpeg?raw=true"
          :width="width"
          class="absolute-top-left"
        />
        <q-btn outline class="btn" color="pink-3" @click="$router.push('/main')">메인</q-btn>
      </template>
      <template v-slot:after>
        <img
          src="https://github.com/JemmaJeon/kkotgalpi/blob/main/write0.jpeg?raw=true"
          :width="width"
          class="absolute-top-right grayscale"
        />
          <q-btn outline class="btn" color="pink-3" @click="$router.push('/signup')">가입</q-btn>
      </template>
    </q-splitter>
</q-layout>
</template>

<script>
import { ref, computed } from 'vue'
export default {
    name : 'Landing',
    setup () {
    const width = ref(400)

    return {
      width,
      splitterModel: ref(30), // start at 50%
      splitterStyle: computed(() => ({
        height: Math.min(940, 0.66 * width.value) + 'px',
        width: width.value + 'px'
      })),
      onResize (info) {
        width.value = info.width
      }
    }
  }
}
</script>

<style lang="sass" scope>
.btn
   display: absolute
   left: 50%
   top: 50%
.grayscale
    -webkit-filter: grayscale(100%) 
    filter: grayscale(100%)
</style>