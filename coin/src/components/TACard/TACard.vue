<template>
  <q-layout class="tacard">
    <q-img src="assets/images/team01.png" class="tacard">
      <img
        src="assets/images/team-arrow-01.png"
        class="tacard-arrow"
        @click="flipcard"
      />

      <slot name="title"></slot>
      <slot name="content"></slot>
    </q-img>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      data: "안녕",
    };
  },
  methods: {
    flipcard() {
      this.emitter.emit("flipcard", this.data);
      console.log("클릭");
    },
  },
};
</script>
<style lang="scss">
.tacard {
  width: 50%;
  position: relative;
}
.tacard-arrow {
  width: 20%;
  position: absolute;
  bottom: 5%;
  right: 5%;
}
.tacard-title,
.tacard-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  text-align: center;
  line-height: 1.1;
}
.tacard-title {
  position: relative;
  background: transparent;
  color: #363636;
  font-family: "S-coreDream7";
  font-size: 2.5vw;
  margin-top: 5%;

  //   top: calc(100% - 12.5vw);
}
.tacard-content {
  font-family: "S-coreDream4";
  font-size: 1.6vw;
  margin-top: 20%;
}
</style>
