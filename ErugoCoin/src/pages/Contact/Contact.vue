<template>
  <div>
    <Header />
    <div class="contact row">
      <div class="contact-left col-md-5 col-xs-12">
        <h2 class="contact-title">CONTACT</h2>
        <div class="contact-txt">
          If you have any questions or inquiries, please contact the following
          contact information.
        </div>
        <div class="sns row">
          <div class="col-6 sns-left">
            <div
              v-for="(c, idx) in contact"
              :key="idx"
              class="link row"
              @click="linkHandler(c.url)"
            >
              <img
                :src="`assets/images/icon${idx + 1}.png`"
                :alt="c.name"
                class="col-3 cImg"
                style="background-size: contain; background-position: 100%"
              />
              <p class="col-9">{{ c.name }}</p>
            </div>
          </div>
          <div class="col-6 sns-right">
            <div
              v-for="(c2, idx) in contact2"
              :key="idx"
              class="link row"
              @click="linkHandler(c2.url)"
            >
              <img
                :src="`assets/images/icon${idx + 4}.png`"
                :alt="c2.name"
                class="col-3 cImg"
                style="background-size: contain; background-position: center"
              />
              <p class="col-9">{{ c2.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-right col-md-7 col-xs-12">
        <div class="info-box">
          <table>
            <tr>
              <th>Address</th>
              <td>
                <address>
                  129, Seochojungang-ro 8-gil, Gangnam-gu, Seoul, Republic of
                  Korea
                </address>
              </td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>+82 2 545 0265</td>
            </tr>
            <tr>
              <th>E-Mail</th>
              <td>erugo@erugoworld.com</td>
            </tr>
            <tr>
              <th>FAX</th>
              <td>+82 2 6008 0265</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="footer row">
      <div class="foot-img col-md-4 col-xs-12"></div>
      <div class="foot-text col-md-4 col-xs-12">
        <h3 class="foot-title">Erugo</h3>
        <ul>
          <li>If you're curious about more business areas,</li>
          <li>please visit by clicking the link on the right.</li>
        </ul>
      </div>
      <div class="foot-links col-md-4 col-xs-12">
        <h3 class="foot-title">Links</h3>
        <ul>
          <li @click="linkHandler('https://www.erugoworld.co.kr/')">
            Erugo Asset Management
          </li>
          <li @click="linkHandler('https://www.erugoworld.co.kr/invest.html')">
            Erugo Investment &amp; Development Group
          </li>
          <li @click="linkHandler('https://erugoworld.com/')">Erugo World</li>
          <li @click="linkHandler('https://coinmarketcap.com/ko/')">
            CoinMarketCap
          </li>
          <li
            @click="
              linkHandler(
                'https://www.coingecko.com/ko/%EC%BD%94%EC%9D%B8/erugo-world-coin'
              )
            "
          >
            CoinGecko
          </li>
        </ul>
      </div>
      <div class="foot-copyright">
        Copyright © 2021 ERUGO World Coin All Right reserved
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
export default {
  data() {
    return {
      contact: [
        { name: "Telegram Channel", url: "https://www.securitywallet.co.kr/" },
        {
          name: "KaKaotalk Open Chatting",
          url: "https://open.kakao.com/o/gCeEqVzd",
        },
        {
          name: "Official Blog",
          url: "https://blog.naver.com/erugocoin_official",
        },
      ],
      contact2: [
        {
          name: "Telegram Community",
          url: "https://t.me/erugo",
        },
        { name: "Official Twitter", url: "https://twitter.com/ErugoWorldCoin" },
        {
          name: "Official Youtube Channel",
          url: "https://www.youtube.com/channel/UCj-Hyp1afwEgmSJ6gTYx4wA",
        },
      ],
    };
  },
  components: { Header },
  methods: {
    linkHandler(url) {
      window.open(url);
    },
  },
};
</script>
<style lang="scss" scope>
div,
p,
h1,
h2,
h3,
h4,
* {
  margin: 0;
  padding: 0;
}
.contact {
  width: 85%;
  height: 100%;
  margin: 10% auto;
}
.contact-left {
  display: flex;
  flex-direction: column;
}
.contact-title {
  font-family: "S-CoreDream8";
  line-height: normal;
  font-size: 5vmax;
  margin-bottom: 2%;
  text-align: left;
}
.contact-txt {
  font-family: "S-CoreDream7";
  font-size: 1.1vmax;
  margin-top: 3%;
  margin-right: 15%;
  line-height: 2.2vmax;
}
.sns {
  margin-top: 5%;
  margin-right: 30%;
}
.link {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
}
.link > p {
  margin: 0;
  color: #4b4b4b;
}

.contact-right {
  width: 100%;
  height: 100%;
}
.info-box {
  height: 50vmin;
  background: url(./images/contact-bg.png) no-repeat center;
  background-size: 95% 100%;
  position: relative;
}
table {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 60%;
  font-size: 1.8vmin;
  font-family: "S-CoreDream4";
}
table th {
  text-align: right;
  padding-right: 5%;
  width: 25%;
  font-size: 2vmin;
  font-family: "S-CoreDream7";
}
table td {
  border-bottom: 1px solid gray;
}
table td > address {
  font-weight: bold;
}

// footer
.footer {
  background-color: #2b2b2b;
  margin: 0 auto;
  position: relative;
  padding: 0 10%;
  color: white;
}
.foot-img {
  background: url(./images/footer-bg.png) no-repeat center;
  background-size: contain;
  height: 45vmin !important;
}

.foot-title {
  font-family: "NotoSansKR-Regular";
  font-size: 4.5vmin;
  line-height: normal;
  margin-bottom: 10%;
}
.foot-text,
.foot-links {
  padding: 4%;
  height: 100% !important;
}
.foot-text ul > li,
.foot-links ul > li {
  padding: 2% 0;
  font-size: 1vmax;
  cursor: pointer;
}

.foot-copyright {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;
  font-size: 1.5vmin;
}

@media all and (max-width: 1920px) {
  .link > p {
    font-size: 1.4vmin;
  }
}
@media all and (max-width: 1280px) {
  .sns {
    margin-right: 10%;
  }
  .link > p {
    font-size: 1.8vmin;
  }
}
@media all and (max-width: 1024px) {
  .contact {
    margin: 20% auto;
  }
  .contact-title,
  .contact-txt {
    width: 100%;
    text-align: center;
  }
  .contact-title {
    font-size: 8vmax;
  }
  .contact-txt {
    font-size: 3vmax;
    line-height: 6vmax;
  }
  .sns {
    width: 100%;
    margin: 10% auto;
  }
  .link > p {
    font-size: 2.5vmax;
  }
  .info-box {
    background-size: 100% 100%;
    height: 60vmin;
  }
  table {
    width: 90%;
    font-size: 2.5vmin;
  }
  table th {
    width: 25%;
    font-size: 3vmin;
  }
  table td {
    width: 60%;
  }
  .foot-title {
    margin-bottom: 5%;
    font-size: 3vmin;
  }
  .foot-text ul > li,
  .foot-links ul > li {
    padding: 1% 0;
    font-size: 2vmax;
  }
  .foot-links {
    padding-bottom: 25%;
  }
  .foot-copyright {
    bottom: 5%;
    width: 100%;
    left: 0;
    transform: translateX(0);
    text-align: center;
    font-size: 3.5vmin;
  }
}

@media all and (max-width: 420px) {
  .contact-title {
    font-size: 6vmax;
    margin-bottom: 7%;
  }
  .contact-txt {
    font-size: 1.7vmax;
    line-height: 4vmax;
    margin: 0;
  }
  .link > p {
    font-size: 1.3vmax;
  }
  .foot-title {
    margin-bottom: 5%;
    font-size: 4.5vmin;
  }
}
</style>
