<template>
  <div>
    <Header />
    <div v-if="isChecked()" id="popupBg">
      <Popup imgPath="assets/images/popup-05.jpg" :display="{ display }" />
    </div>
    <div class="mainBg">
      <div class="main-container">
        <div class="cardBoxs">
          <div
            class="my-card justify-center menu-card"
            v-for="(m, i) in mainBox"
            :key="i"
            @mouseover="hover(m.key)"
            @mouseleave="leave(m.key)"
          >
            <img :src="m.src" :id="m.key" @click="$router.push(`/${m.key}`)" />
            <div
              class="absolute-center text-center mainTitle"
              @click="$router.push(`/${m.key}`)"
            >
              {{ m.name }}
            </div>
            <div class="bottomBtn" :id="m.name">
              <img :src="m.src2" @click="$router.push(`/${m.key}`)" />
            </div>
          </div>
        </div>

        <div class="arrows">
          <!-- <div class="arrowLeft" @click="toLeft()">
            <img src="assets/images/leftBtn.png" />
          </div> -->
          <div class="arrowLine">
            <q-slider
              v-model="slide"
              @mouseover="hover(mainBox[slide].key)"
              @mouseleave="leave(mainBox[slide].key)"
              @change="slideNum(slide)"
              :min="0"
              :max="6"
              :step="1"
              thumb-size="2.5vmax"
              track-size="5px"
              color="transparent"
              track-color="transparent"
              thumb-color="white"
              class="slide"
            />
          </div>
          <!-- <div class="inputLine">
            <input
              @mouseover="hover(mainBox[slide].key)"
              @mouseleave="leave(mainBox[slide].key)"
              @change="slideNum(slide)"
              type="range"
              min="0"
              max="6"
              class="slider"
              v-model="slide"
            />
          </div> -->
          <!-- <div class="arrowRight" @click="toRight()">
            <img src="assets/images/rightBtn.png" />
          </div> -->
        </div>
      </div>
      <TotalCursor />
    </div>
  </div>
</template>
<script>
import TotalCursor from "@/components/Cursor/TotalCursor.vue";
import Header from "../../components/Header/Header.vue";
import Popup from "../../components/Popup/Popup.vue";
import { ref } from "vue";
const screenWidth = screen.availWidth;
let cnum = parseInt(localStorage.getItem("popup-close-time"));
var expiredays = 1;
var todayDate = new Date();
var display = todayDate.setDate(todayDate.getDate() + expiredays);
var popup = document.getElementById("popupBg");
export default {
  data() {
    return {
      slide: 3,
      isPopupClose: false,
      mainBox: [
        {
          key: "about",
          name: "ABOUT",
          src: "assets/images/menu01.png",
          src2: "assets/images/01.png",
        },
        {
          key: "ecosystem",
          name: "ECOSYSTEM",
          src: "assets/images/menu02.png",
          src2: "assets/images/02.png",
        },
        {
          key: "teamadvisor",
          name: "TEAM",
          src: "assets/images/menu03.png",
          src2: "assets/images/03.png",
        },
        {
          key: "whitepaper",
          name: "WHITE PAPER",
          src: "assets/images/menu04.png",
          src2: "assets/images/04.png",
        },
        {
          key: "roadmap",
          name: "ROAD MAP",
          src: "assets/images/menu05.png",
          src2: "assets/images/05.png",
        },
        // {
        //   key: "staking",
        //   name: "STAKING",
        //   src: "assets/images/menu06.png",
        //   src2: "assets/images/06.png",
        // },
        {
          key: "announcement",
          name: "ANNOUNCEMENT",
          src: "assets/images/menu06.png",
          src2: "assets/images/06.png",
        },
        {
          key: "contact",
          name: "CONTACT",
          src: "assets/images/menu07.png",
          src2: "assets/images/07.png",
        },
      ],
    };
  },
  components: { Header, TotalCursor, Popup },
  methods: {
    hover(e) {
      var name = document.querySelector(`#${e}`);
      var bottomBtn = document.querySelector(`#${e} ~ .bottomBtn`);
      if (screenWidth > 1024) {
        name.style.setProperty("transform", "scale(1.1)");
        bottomBtn.style.setProperty("width", "40%");
      }
    },
    leave(e) {
      var name = document.querySelector(`#${e}`);
      var bottomBtn = document.querySelector(`#${e} ~ .bottomBtn`);
      if (screenWidth > 1024) {
        name.style.setProperty("transform", "scale(1)");
        bottomBtn.style.setProperty("width", "25%");
      }
    },
    slideNum(e) {
      var cardBoxs = document.querySelector(".cardBoxs");
      // var line = document.querySelector(".arrowLine");
      // var slideDot = document.querySelector(".slide");
      // var cardWidth = cardBoxs.clientWidth;
      // var dragWidth = line.clientWidth;

      //console.log(cardWidth);

      if (e == 0) {
        cardBoxs.style.setProperty("transform", `translateX(0%)`);
      } else if (e > 0 && e < 6) {
        cardBoxs.style.setProperty("transform", `translateX(-${e * 10}%)`);
        cardBoxs.style.setProperty("transition", `1.3s`);
      } else {
        cardBoxs.style.setProperty("transform", `translateX(-50%)`);
        cardBoxs.style.setProperty("transition", `1.3s`);
      }
    },
    isChecked() {
      if (isNaN(cnum)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang="scss" scope>
#popupBg {
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
}

.mainBg {
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #c5e0c4, #86b7b9, #aa7ccd, #947acf);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  position: relative;
  overflow: hidden;
}
.mainBg::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(./images/mainBg.png) no-repeat center;
  top: 0;
  background-size: cover;
  opacity: 0.5;
  z-index: 0;
}
.main-container {
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  position: absolute;
}
.menu-card {
  height: 100%;
  position: relative;
}
.menu-card img {
  width: 100%;
  margin: 0;
  transition: 0.4s;
}
.cardBoxs {
  display: flex;
  width: 200%;
  justify-content: space-between;
}

.my-card:first-child,
.my-card:first-child {
  margin-left: 3%;
}
.my-card:last-child,
.my-card:last-child {
  margin-right: 3%;
}
.mainTitle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0;
  font-family: "vitro";
  font-weight: 200;
  font-size: 2.3vmax;
  color: white;
  width: 100%;
}
.bottomBtn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -70%;
  width: 25%;
  transition: 0.4s;
  img {
    width: 100%;
  }
}
.main-container::after {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  bottom: -39%;
  border-bottom: 1.5px solid #313131;
  opacity: 0.3;
}
.arrows {
  width: 50%;
  margin: 0 auto;
  display: flex;
  position: relative;
  justify-content: space-evenly;
  margin-top: 5%;
  .arrowRight > img,
  .arrowLeft > img {
    width: 7vw;
  }
}
.arrowLine {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 55%;
  z-index: -1s;
}
.q-slider__inner {
  background-color: rgba(255, 255, 255, 0.1) !important;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
// 미디어쿼리
@media screen and (max-width: 768px) {
  .mainBg {
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .mainBg::after {
    background-size: 200% 200%;
    position: fixed;
  }
  .main-container {
    top: calc(60px + 3vmax);
    transform: translateY(0);
    overflow: hidden;
  }
  .cardBoxs {
    width: 80%;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  .my-card {
    margin-bottom: 10% !important;
  }
  .my-card:first-child,
  .my-card:nth-child(5),
  .my-card:last-child,
  .my-card:nth-child(4) {
    margin: 0;
  }
  .mainTitle {
    font-size: 3.7vmax;
    width: 100%;
  }
  .arrows,
  .bottomBtn {
    display: none;
  }
}
</style>
