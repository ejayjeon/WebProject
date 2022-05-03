<template>
  <div>
    <Header />
    <q-layout class="staking">
      <div class="staking-title">STAKING</div>
      <div class="staking-num">
        <q-img class="staking-img">
          <p class="stakingNum"></p>

          <span>Total Staking</span>
        </q-img>
        <q-img class="staking-img">
          <p class="interestNum"></p>
          <span>Total Interest</span>
        </q-img>
      </div>
      <div class="staking-subtitle text-h3">Introducing EWC Staking</div>
      <p class="staking-content text-h5">{{ staking.content }}</p>
      <div class="line" />
      <div
        class="q-pb-md row q-gutter-sm"
        style="width: 85%; margin: 0 auto; text-align: start"
      >
        <div class="col col-md-6 col-sm-12 staking-bottom">
          <div class="staking-subtitle2 text-h3">
            Precautions upon Staking Option Selection
          </div>
          <p class="staking-content2 text-h5">{{ staking.content }}</p>
          <ul>
            <li>{{ staking.content }}</li>
            <li>{{ staking.content }}</li>
            <li>{{ staking.content }}</li>
          </ul>
          <div class="row q-col-gutter-lg" @click="stakingPopup">
            <q-img class="staking-btn"></q-img>
          </div>
        </div>
        <div class="col col-md-5 col-sm-12 staking-box">
          <BarChart style="width: 90%; height: 550px; margin: auto" />
        </div>
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
import BarChart from "../../components/BarChart/BarChart.vue";
export default {
  data() {
    return {
      count: 2487461,
      count2: 164923,
      staking: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
    };
  },
  components: { Header, PageController, BarChart },
  methods: {
    stakingNum() {
      const stakingMaxCount = 2487267;
      let stacking = 1800000;

      function formatNumber(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }

      let totalStaking = document.querySelector(".stakingNum");

      let timer = setInterval(
        () => {
          if (stacking <= stakingMaxCount) {
            totalStaking.innerHTML = formatNumber(Math.ceil(stacking));
            stacking =
              stacking +
              (stakingMaxCount - stacking) /
                Math.ceil(stakingMaxCount / 150000) +
              0.1;
          } else {
            clearInterval(timer);
          }
        },
        50,
        { passive: true }
      );
    },
    interestNum() {
      const interestMaxCount = 164923;
      let interest = 120000;
      function formatNumber(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
      }
      let totalInterest = document.querySelector(".interestNum");
      let timer = setInterval(
        () => {
          if (interest <= interestMaxCount) {
            totalInterest.innerHTML = formatNumber(Math.ceil(interest));
            interest =
              interest +
              (interestMaxCount - interest) /
                Math.ceil(interestMaxCount / 6000) +
              0.1;
          } else {
            clearInterval();
          }
        },
        50,
        { passive: true }
      );
    },
    stakingPopup() {
      open(
        "https://erugocoin.com/stacking",
        "Staking",
        "width=1400,height=750"
      );
    },
  },

  mounted() {
    this.stakingNum();
    this.interestNum();
  },
};
</script>
<style lang="scss" scope>
.staking {
  width: 100%;
  height: 100%;
  position: relative;
}
.staking-title {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.staking-subtitle,
.staking-subtitle2 {
  font-family: "S-CoreDream6";
  margin: auto;
  margin-top: 10%;
  text-align: center;
  width: 100%;
  font-size: 4vmax;
  line-height: 5vmax;
}
.staking-subtitle2 {
  text-align: start;
}
.staking-content,
.staking-content2 {
  width: 60%;
  margin: 3% auto;
  line-height: 3vmax;
  text-align: center;
  font-family: "S-CoreDream4";
  color: #727272;
}
.staking-content2 {
  width: 100%;
  text-align: start;
  color: #363636;
}
.staking-num {
  position: relative;
  width: 75%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.staking-img {
  width: 35%;
  background: url("images/staking_btn_01.png") no-repeat center center;
  background-size: contain;
  height: 20vw;
  p,
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: "S-CoreDream6";
  }
  p {
    font-size: 3vw;
  }
  span {
    font-family: "S-CoreDream4";
    font-size: 2.1vw;
    top: 85%;
    height: 20%;
  }
}
.line {
  border-right: 1px solid #363636;
  height: 150px;
  width: 50%;
  margin: 3% 0;
}
li,
ul {
  list-style: disc;
  color: #727272;
  margin-bottom: 2vw;
}
.staking-btn {
  height: 12vw;
  background: url("images/staking_btn_03.png") no-repeat center center;
  background-size: contain;
}
.staking-btn:hover {
  height: 12vw;
  background: url("images/staking_btn_04.png") no-repeat center center;
  background-size: contain;
}
.staking-box {
  margin: auto;
}
@media screen and (max-width: 1024px) {
  .staking-content,
  .staking-content2 {
    font-size: 2vmax;
    line-height: 2.5vmax;
  }
  @media screen and (max-width: 768px) {
    .staking-title {
      margin-top: 15%;
    }
    .staking-subtitle,
    .staking-subtitle2 {
      font-size: 3vmax;
    }
    .staking-content,
    .staking-content2 {
      font-size: 1.5vmax;
      line-height: 2.5vmax;
    }
    .staking-btn {
      margin-top: 5%;
    }
    .staking-box {
      height: 500px;
    }
  }
}
</style>
