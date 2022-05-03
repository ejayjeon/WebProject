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
      <div class="staking-content text-h5">
        <p>{{ staking.content }}</p>
        <p>{{ staking.content2 }}</p>
      </div>
      <div class="line" />
      <div class="stacking-container">
        <div class="staking-left">
          <div class="staking-subtitle2 text-h3">
            Precautions upon Staking Option Selection
          </div>
          <div class="staking-content2 text-h5">
            <p>
              Before applying for the staking option, EWC deposited in Tennten
              or Btrade account must be transferred to the security wallet.
            </p>
            <p
              class="link"
              @click="linkHandler('https://www.securitywallet.co.kr/')"
            >
              (https://www.securitywallet.co.kr/)
            </p>
          </div>
          <ul class="list">
            <li>{{ list.content1 }}</li>
            <li>{{ list.content2 }}</li>
            <li>{{ list.content3 }}</li>
            <li>{{ list.content4 }}</li>
          </ul>
          <div @click="stakingPopup">
            <q-img class="staking-btn"></q-img>
          </div>
        </div>
        <div class="staking-right">
          <div class="chart-title">Interest rate</div>
          <BarChart class="bar-chart" />
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
          "For the purpose of sustaining the stable development of the EWC ecosystem,the security wallet user will be rewarded when the user deposits the EWC for a promised period.",
        content2:
          "Automatic reward calculated as below will be transferred to the user account when the security wallet user deposits EWC. 12 months = 6% / year (0.5% / month), 9 months = 4.5% / year (0.375% / month), 6 months = 3% / year (0.25% / month), The minimum deposit start at 5,000. Coins will be deposited in the user’s account. fixed rewards will be installmentpayment will be processed in ERUGO WORLD COIN (EWC).",
      },
      list: {
        content1:
          " Withdrawal will be blocked during the promised deposit period.",
        content2:
          " The value of EWC may fluctuate during the promised deposit period.",
        content3:
          " Coins will be stored and saved in the user’s account during the promised deposit period.",
        content4:
          " EWC will be rewarded as a contribution to the stabilization of the ecosystem.",
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
      open("/assets/pdf/stacking.html", "Staking", "width=1400,height=750");
    },
    linkHandler(url) {
      window.open(url);
    },
  },
  mounted() {
    this.stakingNum();
    this.interestNum();
  },
};
</script>
<style lang="scss" scope>
*,
p {
  margin: 0;
  padding: 0;
}
ul,
li {
  list-style: "- ";
}
.link {
  cursor: pointer;
  margin: 0;
  padding: 0;
}
.line {
  border-right: 1px solid #363636;
  height: 5vmax;
  width: 50%;
  margin: 3% 0;
}
.staking {
  width: 100%;
  height: 100%;
  position: relative;
}
.staking-title {
  font-family: "S-CoreDream8";
  font-size: 5.5vmax;
  margin-top: calc(100px + 5vmax);
  margin-bottom: 3%;
  text-align: center;
}
.staking-num {
  position: relative;
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.staking-img {
  width: 45%;
  background: url("images/staking_btn_01.png") no-repeat center center;
  background-size: contain;
  p,
  span {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: "S-CoreDream6";
  }
  p {
    font-size: 2.5vmax;
  }
  span {
    font-family: "S-CoreDream4";
    font-size: 1.5vmax;
    top: 90%;
    height: 20%;
  }
}
.staking-subtitle,
.staking-subtitle2 {
  font-family: "S-CoreDream7";
  margin: 0 auto;
  margin-top: 5%;
  text-align: center;
  width: 100%;
  font-size: 2vmax;
}
.staking-content {
  width: 50%;
  margin: 2% auto;
  line-height: 2;
  text-align: center;
  font-family: "S-CoreDream2";
  color: #000;
}
.stacking-container {
  width: 80%;
  display: flex;
  margin: 0 auto;
  align-items: center;
}
.staking-left,
.staking-right {
  margin: 0 auto;
}
.staking-left {
  width: 40%;
}
.staking-right {
  width: 50%;
}
// staking-left
.staking-subtitle2 {
  text-align: start;
  line-height: 1.5;
}
.staking-content2 {
  width: 100%;
  text-align: start;
  font-family: "S-CoreDream4";
  line-height: 1.6;
  color: #000;
  margin: 5% auto;
}
.list {
  margin-left: 2%;
  font-family: "S-CoreDream2";
  font-size: 0.8vmax;
}
.list > li {
  padding-bottom: 1%;
}
.staking-btn {
  height: 12vmax;
  background: url("images/staking_btn_03.png") no-repeat center center;
  background-size: contain;
  cursor: pointer;
}
.staking-btn:hover {
  height: 12vmax;
  background: url("images/staking_btn_04.png") no-repeat center center;
  background-size: contain;
  cursor: pointer;
}
//staking-right
.chart-title {
  text-align: center;
  font-family: "S-CoreDream7";
  font-size: 1vmax;
}
.bar-chart {
  width: 90%;
  height: 24vmax;
  margin: auto;
}
@media screen and (max-width: 1920px) {
  .staking-content {
    width: 65%;
  }
}
@media screen and (max-width: 1024px) {
  .stacking-container {
    width: 90%;
  }
  .staking-subtitle,
  .staking-subtitle2 {
    font-size: 2.5vmax;
  }
  .staking-content {
    font-size: 2vmax;
    line-height: 1.5;
  }
  .staking-content2,
  .list,
  .chart-title {
    font-size: 1.5vmax;
  }
  .bar-chart {
    height: 40vmax;
  }
  .staking-btn {
    margin-top: 5%;
  }
  @media screen and (max-width: 920px) {
    .staking-content {
      width: 80%;
    }
    .staking-title {
      margin-top: 15%;
    }
    .staking-subtitle,
    .staking-subtitle2 {
      font-size: 2.5vmax;
    }
    .staking-content,
    .staking-content2 {
      font-size: 1.5vmax;
      line-height: 2.5vmax;
    }
    .staking-btn {
      margin-top: 5%;
    }
  }
  @media screen and (max-width: 720px) {
    .staking-title {
      margin-top: 10%;
      font-size: 7vmax;
    }
    .staking-num {
      margin: 4% auto;
      width: 80%;
    }
    .line {
      height: 10vmax;
      margin: 8% 0;
    }
    .stacking-container {
      display: block;
    }
    .staking-left,
    .staking-right {
      width: 100%;
    }
    .staking-subtitle2,
    .staking-content2 {
      text-align: center;
    }
    .staking-subtitle,
    .staking-subtitle2 {
      font-size: 3vmax;
    }
    .staking-content,
    .staking-content2,
    .list,
    .chart-title {
      font-size: 1.8vmax;
      line-height: 2;
    }
    .staking-content2,
    .list {
      width: 80%;
    }
    .staking-subtitle2 {
      width: 60%;
    }
    .list {
      margin: 0 auto;
      li {
        padding-bottom: 0;
      }
    }
    .staking-btn {
      height: 16vmax;
    }
    .chart-title {
      margin-top: 5%;
    }
    .bar-chart {
      margin-bottom: 10%;
    }
  }
  @media screen and (max-width: 420px) {
    .staking-title {
      margin-top: 20%;
      font-size: 6vmax;
    }
    .staking-num {
      margin: 5% auto;
    }
    .staking-img {
      p {
        font-size: 2vmax;
      }
    }
    .staking-subtitle,
    .staking-subtitle2 {
      font-size: 2.5vmax;
    }
    .staking-subtitle2 {
      width: 80%;
    }
    .staking-content2 {
      width: 100%;
    }
    .list {
      width: 90%;
      li {
        padding-bottom: 2vmin;
      }
    }
    .staking-btn {
      margin-top: 0;
    }
  }
}
</style>
