<template>
  <div>
    <div class="Bigcontainer">
      <div class="headBar">
        <h2 class="logo" @click="$router.push('/main')"></h2>
        <div class="btnWrapper">
          <!-- back 버튼 -->
          <div class="webMenu">
            <div class="menu-btn" @click="$router.back()">BACK</div>
            <div class="menu-btn" @click="dialog = true">MENU</div>
          </div>
        </div>
        <!-- 화면 전체 메뉴 dialog -->
        <q-dialog
          v-model="dialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="scale"
          transition-hide="scale"
          transition-duration="1000"
        >
          <q-card class="bg-black text-white q-pt-lg">
            <q-bar>
              <q-space></q-space>
              <div class="closeBtnWrapper">
                <q-btn size="md" v-close-popup>
                  <div class="closeBtn">X</div>
                </q-btn>
              </div>
            </q-bar>

            <q-card-section class="fixed-center">
              <div class="q-pt-lg menuLink" v-for="(m, i) in mainMenu" :key="i">
                <router-link :to="m.path">{{ m.name }}</router-link>
              </div>

              <div class="row q-mt-xl snsBtn">
                <div
                  v-for="(h, i) in sns"
                  :key="i"
                  class="col-2"
                  @click="outlink(i)"
                >
                  <img
                    :src="`assets/images/${h.path}`"
                    style="width: 9vmin; padding: 0 1%"
                  />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      mainMenu: [
        { name: "About", path: "/about" },
        { name: "Ecosystem", path: "/ecosystem" },
        { name: "Team Advisor", path: "/teamadvisor" },
        { name: "White Paper", path: "/whitepaper" },
        // { name: "Partner", path: "/partner" },
        { name: "Road Map", path: "/roadmap" },
        // { name: "Staking", path: "/staking" },
        { name: "Announcement", path: "/announcement" },
        { name: "Contact", path: "/contact" },
      ],
      sns: [
        {
          name: "naver",
          path: "header_sns_01.png",
          link: "https://blog.naver.com/erugocoin_official",
        },
        {
          name: "kakaotalk",
          path: "header_sns_02.png",
          link: "https://open.kakao.com/o/gCeEqVzd",
        },
        {
          name: "telegram",
          path: "header_sns_03.png",
          link: "https://www.securitywallet.co.kr/auth/login?gourl=%2Foverview",
        },
        {
          name: "telegram2",
          path: "header_sns_04.png",
          link: "https://t.me/erugo",
        },
        {
          name: "twitter",
          path: "header_sns_05.png",
          link: "https://twitter.com/ErugoWorldCoin",
        },
        {
          name: "youtube",
          path: "header_sns_06.png",
          link: "https://www.youtube.com/channel/UCj-Hyp1afwEgmSJ6gTYx4wA",
        },
      ],
    };
  },
  methods: {
    outlink(e) {
      open(this.sns[e].link);
    },
  },
  setup() {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
    };
  },
};
</script>
<style lang="scss" scope>
.headBar {
  background-color: rgba($color: #fff, $alpha: 0.6);
  width: 100%;
  height: 5vmax;
  position: fixed;
  padding: 0.5% 0;
  z-index: 100;
  top: 0;
  border-bottom: 0.5px solid #707070;
}
.closeBtnWrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .row {
    flex-direction: none;
  }
}
.logo,
.btnWrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.logo {
  left: 5%;
  background: url("mainLogo.png") no-repeat center;
  background-position: left;
  background-size: contain;
  width: 100%;
  height: 50%;
  text-indent: -99999999999999px;
}
.btnWrapper {
  right: 5%;
  font-size: 1vw;
}
.menuLink {
  font-family: "S-CoreDream8";
  text-align: center;
  line-height: 7vmin;
}
.menuLink:hover > a {
  color: #ff6906;
}

.closeBtn::after {
  content: "";
  display: block;
  border: 1px solid #fff;
  position: absolute;
  width: 2.5vmax;
  height: 2.5vmax;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  right: 10%;
  border-radius: 50%;
}
.webMenu {
  width: 100%;
  display: flex;
  letter-spacing: 5px;
  line-height: 1.5vmax;
  font-size: 1.5vmax;
  text-align: center;
  font-family: "S-CoreDream8";
}
.snsBtn {
  display: flex;
  flex-direction: row !important;
}
.menu-btn {
  position: relative;
  display: inline-block;
  width: 8vmax;
  // background-color: yellowgreen;
}
.webMenu > div::after {
  content: "";
  display: block;
  border: 1px solid #707070;
  position: absolute;
  width: 3vmax;
  height: 3vmax;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  border-radius: 50%;
}

// 미디어쿼리
@media screen and (max-width: 920px) {
  .logo,
  .btnWrapper {
    line-height: 4vmax;
  }
  .closeBtn::after {
    content: "";
    width: 3.5vmax;
    height: 3.5vmax;
  }
}
@media screen and (max-width: 760px) {
  .logo {
    width: 50%;
  }
  .menuLink {
    font-size: 8vmin;
    line-height: 8vmin;
  }
  .closeBtn::after {
    content: "";
    width: 5vmax;
    height: 5vmax;
  }
}
@media screen and (max-width: 420px) {
  .menuLink {
    font-size: 4vmax;
    line-height: 13vmin;
  }
  .webMenu {
    letter-spacing: 2px;
  }
}
</style>
