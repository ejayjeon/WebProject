<template>
  <div>
    <div id="popupWrapper">
      <div class="popupImg">
        <img :src="imgPath" style="width: 100%" />
      </div>
      <div class="popupBottom">
        <input type="checkbox" @change="closeCheck" class="closeCheck" />
        오늘하루 그만 보기
        <q-btn @click="closePopup" class="closePopup">CLOSE</q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
let now = new Date().getDate();
let endDay = new Date().getHours() + 24;

export default {
  props: {
    imgPath: {
      type: String,
      default: "",
    },
    display: {
      type: Number,
    },
  },
  setup() {
    const closeCheck = (e) => {
      e.stopPropagation();
      e.preventDefault();
      var popupWrapper = document.querySelector("#popupWrapper");
      let closeTime = localStorage.getItem("popup-close-time");
      let currentTime = new Date().getTime();
      let diff = currentTime - closeTime;
      console.log(
        `closetime: ${closeTime} currenttime: ${currentTime} diff: ${diff} `
      );
      if (diff >= 1000 * 60 * 60 * 24) {
        localStorage.setItem("popup-close-time", new Date().getTime());
        popupWrapper.classList.add("hidden");
      } else {
        localStorage.removeItem("popup-close-time");
        popupWrapper.classList.add("hidden");
      }
    };
    const closePopup = (e) => {
      var popupWrapper = document.querySelector("#popupWrapper");
      e.stopPropagation();
      e.preventDefault();
      popupWrapper.classList.add("hidden");
    };
    return {
      closeCheck,
      closePopup,
      showPopup: ref(false),
      // popUp,
    };
  },
};
</script>
<style lang="scss" scope>
$width: 400px;
$height: 700px;
$fontSize: 14px;
#popupWrapper {
  width: $width;
  height: $height;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  position: absolute;
  z-index: 1111111;
}
#popupWrapper::before {
  content: "";
  display: block;
  position: absolute;
  top: -50%;
  left: -300%;
  width: 2000vw;
  height: 200vh;
  background: rgba($color: #000000, $alpha: 0.5);
  z-index: -1;
  overflow: hidden;
}
.popupImg {
  width: 100%;
  background-size: contain;
  height: $height;
  background-repeat: no-repeat;
  overflow: hidden;
}
.popupBottom {
  width: $width;
  height: $fontSize * 4;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: $fontSize;
  padding-right: 10px;
  gap: 10px;
}
.closeCheck {
  width: $fontSize * 1.5;
  height: $fontSize * 1.5;
  cursor: pointer;
}
.closePopup {
  font-size: $fontSize;
  padding: 0 4px;
  cursor: pointer;
}
.hidden {
  display: none;
}
.block {
  display: block;
}
@media screen and (max-width: 420px) {
  #popupWrapper {
    width: $width * 0.8;
    height: $height * 0.8;
  }
  .popupImg {
    height: 100%;
  }
  .popupBottom {
    width: $width * 0.8;
  }
}
@media screen and (max-width: 380px) {
  #popupWrapper {
    width: $width * 0.68;
    height: $height * 0.68;
  }
  .popupBottom {
    width: $width * 0.68;
  }
}
</style>
