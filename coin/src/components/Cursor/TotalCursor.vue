<template lang="">
  <div
    :class="[
      'g-cursor',
      { 'g-cursor_hover': hover },
      { 'g-cursor_hide': hideCursor },
    ]"
  >
    <div :style="cursorCircle" class="g-cursor__circle"></div>
    <div class="g-cursor__point" ref="point" :style="cursorPoint">
      <img src="./images/logo.png" style="width: 40%" />
    </div>
  </div>
</template>
<script>
export default {
  name: "TotalCursor",
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
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;
      setTimeout(
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
    document.addEventListener("mousemove", this.moveCursor);
    document.addEventListener("mouseleave", (e) => {
      this.hideCursor = true;
    });
    document.addEventListener("mouseenter", (e) => {
      this.hideCursor = false;
    });
  },
};
</script>
<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
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
    width: 10%;
    height: 10%;
    // background-color: violet;
    // border: 2px solid palegreen;
    // background: url(./images/logo.png) no-repeat center;
    border-radius: 100%;
    z-index: 5555;
    backface-visibility: hidden;
    transition: opacity 0.6s ease;
  }

  &__point {
    top: -1%;
    left: -0.8%;
    position: fixed;
    width: 5%;
    height: 5%;
    pointer-events: none;
    user-select: none;
    border-radius: 100%;
    z-index: 55555555;
    backface-visibility: hidden;
    will-change: transform;
    img {
      animation: rotateImg 5s linear infinite;
      transform-origin: 50% 50%;
    }
  }
  @keyframes rotateImg {
    100% {
      transform: rotate(360deg);
    }
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
@media screen and (max-width: 780px) {
  .g-cursor {
    display: none;
  }
}
</style>
