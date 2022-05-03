<template lang="">
  <div
    :class="[
      'g-cursor',
      { 'g-cursor_hover': hover },
      { 'g-cursor_hide': hideCursor },
    ]"
  >
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint">Start</div>
  </div>
</template>
<script>
export default {
  name: "StartCursor",
  data: () => {
    return {
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      hideCursor: true,
    };
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
    cursorPoint() {
      return `transform: translateX(${this.xChild - 3}px) translateY(${
        this.yChild - 3
      }px) translateZ(0) translate3d(0, 0, 0);`;
    },
  },
  methods: {
    async moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      await setTimeout(
        () => {
          this.xParent = e.clientX - 15;
          this.yParent = e.clientY - 15;
        },
        100,
        { passive: true }
      );
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor, { passive: true });
    document.addEventListener(
      "mouseleave",
      (e) => {
        this.hideCursor = true;
      },
      { passive: true }
    );
    document.addEventListener(
      "mouseenter",
      (e) => {
        this.hideCursor = false;
      },
      { passive: true }
    );
  },
};
</script>
<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.g-cursor {
  &_hide {
    opacity: 0;
    width: 60px;
    height: 60px;
    transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  }

  &__circle {
    pointer-events: none;
    user-select: none;
    top: 0;
    left: 0;
    position: fixed;
    //   width: 100px;
    //   height: 100px;
    //   border: 2px solid #fff;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
  }

  &__point {
    top: -4%;
    left: -2%;
    position: fixed;
    pointer-events: none;
    user-select: none;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 2px solid #fff;
    color: white;
    font-family: "racing";
    font-size: 32px;
    line-height: 95px;
  }

  &_hover {
    .g-cursor__circle {
      opacity: 0;
      width: 60px;
      height: 60px;
      transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
    }
  }
}
</style>
