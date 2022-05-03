<template>
  <!-- 이용 시 가장 상단을 div 대신 q-layout으로 감싸줘야함 : <div></div> => <q-layout></q-layout> -->
  <q-page-scroller
    position="bottom-right"
    :scroll-offset="150"
    :offset="[18, 18]"
    style="z-index: 100"
  >
    <q-img
      class="pagescroller"
      src="assets/images/TOP.png"
      style="width: 10vmin"
    />
  </q-page-scroller>
</template>
<script>
export default {};
</script>
<style lang="scss">
.pagescroller {
  display: inline-block;
}
</style>
