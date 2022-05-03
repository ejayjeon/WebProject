<template lang="">
  <div>
    <q-carousel-control
      position="bottom"
      :offset="[0, 0]"
      class="carousel-ctrl2"
    >
      <!-- 좌우 버튼 -->
      <q-btn flat @mousewheel="$refs.carousel.next()">
        <img src="assets/images/roadmap_arrow_01.png" style="width: 75px" />
      </q-btn>
      <q-slider
        v-model="model"
        :name="1"
        :min="0"
        :max="3"
        color="grey-4"
        thumb-color="grey-1"
        track-color="grey-3"
        track-size="1px"
        class="slider"
        thumb-size="75px"
        dense
        label
        label-always
      />
      <q-btn flat>
        <img src="assets/images/roadmap_arrow_02.png" style="width: 75px" />
      </q-btn>
    </q-carousel-control>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.carousel-ctrl,
.carousel-ctrl2 {
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  width: 100%;
  bottom: 0;
}
.carousel-ctrl2 {
  width: 50%;
  height: 0;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
}
</style>
