<template>
  <div @click="$router.push('/main')">
    <div class="landingVideo">
      <video
        src="assets/videos/ewc-landing-video.mp4"
        autoplay
        muted
        loop
      ></video>
    </div>
    <div class="landingTxt">
      <p>The strong link between the virtual and reality,</p>
      <p>ERUGO WORLD COIN will be a strong crypto assets that</p>
      <p>connects Metaverse with reality.</p>
    </div>
    <div class="landingFoot">ERUGO will be core of the metaverse.</div>
    <StartCursor />
  </div>
</template>
<script>
import StartCursor from "../../components/Cursor/StartCursor.vue";
export default {
  components: {
    StartCursor: StartCursor,
  },
};
</script>
<style lang="scss" scoped>
video {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  filter: saturate(150%) contrast(105%) brightness(0.9);
}
.landingVideo {
  opacity: 0.8;
}
.landingTxt,
.landingFoot {
  font-family: "racing";
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  color: white;
}
.landingTxt {
  top: 25%;
  width: 100%;
  text-align: center;
  font-size: 1.8vw;
  p {
    padding: 20px 0;
  }
}
.landingFoot {
  bottom: 5%;
  font-size: 0.8vw;
}
</style>
