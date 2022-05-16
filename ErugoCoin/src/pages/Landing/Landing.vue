<template>
  <div @click="$router.push('/main')">
    <div class="landingVideo">
      <video
        src="assets/videos/video.mov"
        autoplay
        muted
        loop
        playsinline
      ></video>
    </div>
    <h1 class="landingLogo">
      <img
        src="assets/images/logo.png"
        alt="ERUGOWORLD COIN"
        style="width: 60%"
      />
    </h1>
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
import { ref } from "vue";

export default {
  components: {
    StartCursor: StartCursor,
  },
  setup() {
    var UA = navigator.userAgent.toLowerCase();
    var uaMatch = UA.match(/iphone|ipad|ipod|android/);
    const videoEle = document.createElement("video");
    let video;
    setTimeout(() => {
      video = document
        .querySelector("div:first-of-type div div div")
        .appendChild(videoEle);
      /*
      video.src = "assets/videos/ewc-landing-video.mp4";
      video.muted = true;
      video.loop = true;
      video.autoplay = true;
      video.presinline = false;
      if (
        uaMatch[0] == "iphone" ||
        uaMatch[0] == "ipad" ||
        uaMatch[0] == "ipod"
      ) {
        video.setAttribute("presinline", "true");
        video.setAttribute("autoplay", "false");
      } else {
        video.setAttribute("presinline", "false");
        video.setAttribute("autoplay", "true");
      }
      if (uaMatch[0] == "android") {
        video.setAttribute("autoplay", "true");
        video.setAttribute("presinline", "false");
      } else {
        video.setAttribute("autoplay", "false");
        video.setAttribute("presinline", "true");
      }*/
    }, 1000);

    // 모바일 종류 체크
    function mobileCheck() {
      if (UA.indexOf("android") > -1) {
        return "android";
      } else if (
        UA.indexOf("iphone" > -1 || UA.indexOf("ipad") > -1) ||
        UA.indexOf("ipod") > -1
      ) {
        return "ios";
      } else if (UA.indexOf("linux") > -1) {
        return "linux";
      } else {
        return "others";
      }
    }
    return {
      mobileCheck,
      UA,
      video,
      videoEle,
      uaMatch,
    };
  },
};
</script>
<style lang="scss" scope>
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
.landingLogo {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
.landingTxt {
  top: 30%;
  width: 100%;
  text-align: center;
  font-size: 2vmax;
  p {
    padding: 15px 0;
  }
}
.landingFoot {
  bottom: 5%;
  text-align: center;
  width: 100%;
  font-size: 1.5vmax;
}
@media screen and (max-width: 770px) {
  .landingTxt {
    top: 45%;
    transform: translate(-50%, -50%);
    width: 70%;
    p {
      padding: 1vmin 0;
    }
  }
  .landingFoot {
    font-size: 2.5vmax;
  }
}
@media screen and (max-width: 420px) {
  .landingTxt {
    width: 80%;
    font-size: 3vmax;
    p {
      padding: 0.5vmin 0;
    }
  }
  .landingFoot {
    font-size: 2vmax;
  }
}
</style>
