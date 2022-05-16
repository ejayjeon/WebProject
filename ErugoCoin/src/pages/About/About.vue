<template>
  <div>
    <Header />
    <q-layout class="about">
      <span>
        <img
          src="assets/images/going-left.png"
          class="about-going going1"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          data-aos-once="true"
        />
        <img
          src="assets/images/going-right.png"
          class="about-going going2"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          data-aos-once="true"
        />
      </span>
      <div class="about-title">ABOUT</div>
      <div class="line" />
      <div class="about-subtitle">ERUGOWORLD</div>
      <p class="about-content text-h5">
        To overcome the limitation of previous mass-type Metaverse platforms
        that only focus on the value of digital assets and transaction volumes,
        ERUGOWORLD aims to be the sustainable Metaverse platform which connects
        with reality by providing valuable services to our investors.
      </p>
      <div class="line" />
      <div class="about-subtitle">Principles</div>
      <p class="about-content2 text-h4">
        The Metaverse that ERUGOWORLD pursue follows principles.
      </p>
      <div class="readmore-bg">
        <ReadMore v-for="(r, i) in readmore" :key="i" style="flex: 1">
          <template #numbering>
            <div class="numbering">{{ r.number }}</div>
          </template>
          <template #title>
            <div class="q-mt-sm q-mb-xs readmoreTitle">
              {{ r.title }}
            </div>
          </template>
          <template #content>
            <div class="text-caption text-grey">
              {{ r.content }}
            </div>
          </template>
        </ReadMore>
      </div>
      <p class="about-content3 text-h5">
        The ERUGO Team defines the above four as the team's mission and attempts
        to achieve innovation through the linkage between Metaverse and reality
        by implementing them through blockchain technology. So far, the ERUGO
        Team has listed ERUGOWORLD Coin (EWC) on the exchange, and has been
        preparing for a gas station business, internet shopping mall, new
        concept laundry app business, and construction business to link with
        ERUGOWORLD. The ERUGO Team devised the “ERUGOWORLD Ecosystem Model” to
        successfully implement these missions. This model will enable companies
        and users joining the ERUGOWORLD to enjoy life in the strongly
        integrated virtual world and real world and will create the ERUGOWORLD
        ecosystem to establish itself as a block chain project that encompasses
        not only Korea but also the world.
      </p>
      <div class="line" />
      <div class="about-subtitle">Promotion clip</div>
      <p class="about-content2 text-h4">ERUGOWORLD and EVC Promotion Clip</p>
      <div class="q-pa-md promotion-video">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/u-vHf6TX0k8"
        />
      </div>
      <div class="line" />
      <div class="about-subtitle">Rugo</div>
      <p class="about-content2 text-h4">ERUGOWORLD and EWC Promotion clip</p>

      <div class="img-container">
        <div class="about-img" v-for="(a, i) in aboutImage" :key="i">
          <img
            :src="a.path"
            :ratio="16 / 9"
            v-bind:style="a.deg"
            data-aos="zoom-in"
            data-aos-offset="500"
            data-aos-duration="500"
            data-aos-anchor=".about-content2"
            :data-aos-delay="600 * i"
          />
        </div>
      </div>

      <div class="about-content4 text-h5">
        <p>
          ERUGOWORLD COIN is the digital asset which can be transacted to invest
          on real estates, products, services, and items in the Metaverse.
        </p>
        <p>
          Rugo, is the token issued and distributed by ERUGOWORLD based on EWC
          (ERUGOWORLD COIN). Token acquired by various work and effort in
          Metaverse can be exchanged and deposited into EWC anytime, and finally
          it is possible to cashify by disposing of the EWC.
        </p>
        <p>
          Also, the entry cost, advertising cost and sales incentives
          compensated by the businesses in EROGO WORLD are transacted and
          operated in Rugo and will be the source to power the ecosystem of
          ERUGOWORLD.
        </p>
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import ReadMore from "../../components/ReadMore/ReadMore.vue";
import PageController from "../../components/PageController/PageController.vue";
import { ref } from "vue";
export default {
  components: { Header, ReadMore, PageController },
  data() {
    return {
      readmore: [
        {
          number: "01",
          title:
            "Create a low barrier to entry in which anyone can easily participate",
          content:
            "In general, Metaverse and NFT-related platform games adopt a method that enables actual start only when you purchase essential items with virtual assets in the marketplace in the first game. However, ERUGOWORLD makes it possible to secure coins (virtual assets) for living in virtual reality through the quest given within Metaverse.",
        },
        {
          number: "02",
          title:
            "Create an economic ecosystem operated and developed on its own",
          content:
            "In ERUGOWORLD aiming to construct its own economic ecosystem, you can conduct economic activities like the real world. For example, you can hire other users for construction and pay salaries, secure coins by providing labor, and provide intelligent services to design other users' houses and secure coins. Rather than just playing for no purpose, people can “live” with a job just like in reality.",
        },
        {
          number: "03",
          title: "Seek a stronger connection with reality",
          content:
            "Focus on the connection with reality, a characteristic of Metaverse. Not just simply watching a performance and decorating an avatar, it increases the immersion in the life of Metaverse by linking with various offline businesses. For example, if you refuel a vehicle in Metaverse to increase your abilities, you can receive a refueling voucher through SNS in real life, or if you buy and drink soda in real life, your avatar in Metaverse can also drink the same soda.",
        },
        {
          number: "04",
          title:
            "Create a low barrier to entry in which anyone can easily participate",
          content:
            "Various companies' showrooms, billboards, experience halls, and SHOPs can be entered in the map of ERUGOWORLD, which is made similar to the earth of the real world. At this time, the entering companies pay the entrance fee and advertising cost with coins, and the coins secured in this way are accumulated and paid to users as a reward for quests or used for the development of the ecosystem.",
        },
      ],
      aboutImage: [
        {
          path: "assets/images/about-img1.png",
          deg: "transform: rotate(0deg)",
        },
        {
          path: "assets/images/about-img2.png",
          deg: "transform: rotate(-5deg)",
        },
        {
          path: "assets/images/about-img3.png",
          deg: "transform: rotate(8deg)",
        },
        {
          path: "assets/images/about-img4.png",
          deg: "transform: rotate(0deg)",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scope>
.row {
  display: flex;
  flex-direction: row;
}
.about {
  width: 100%;
  height: 100%;
  position: relative;
}
.about-title {
  font-family: "S-CoreDream9";
  font-size: 5.5vmax;
  margin: 0 auto;
  margin-top: calc(100px + 5vmax);
  text-align: center;
}
.about-going {
  position: absolute;
  top: 3%;
  width: 20%;
}
.going1 {
  left: 0;
}
.going2 {
  right: 0;
}
.about-subtitle {
  font-family: "S-CoreDream6";
  margin: 3% auto;
  margin-bottom: 2%;
  text-align: center;
  font-size: 3.5vmax;
  width: 100%;
}
.about-content,
.about-content2,
.about-content3,
.about-content4 {
  width: 100%;
  margin: 3% auto;
  line-height: 3.5rem;
  text-align: center;
  font-family: "S-CoreDream4";
  color: #000;
  font-size: 1.2vmax;
}
.about-content {
  width: 42%;
}
.about-content2 {
  margin: 2% auto;
  width: 50%;
  font-size: 1.2vmax;
  margin-bottom: 3%;
}
.about-content3 {
  font-family: "S-CoreDream2";
  font-size: 0.8vmax;
  width: 53.5%;
  line-height: calc(15px + 1vmax);
}
.about-content4 {
  position: relative;
  font-family: "S-CoreDream2";
  font-size: 1vmax;
  width: 55%;
  margin: 5% auto;
  margin-bottom: 10%;
}
.line {
  border-right: 1px solid #363636;
  height: 150px;
  width: 50%;
  margin: 0;
}
.readmore-bg {
  display: flex;
  font-family: "S-CoreDream4";
  justify-content: space-around;
  align-items: flex-start;
  width: 95%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
}
.readmore-bg > div:nth-child(3) .readmoreTitle {
  padding: calc(10px + 0.2vmax) 0;
}
.text-caption {
  font-size: 0.7vmax;
  line-height: 1.8;
}
.numbering {
  font-family: "S-CoreDream7";
  font-size: 1.5vmax;
  min-height: 1.5vmax;
  line-height: 1.5;
  max-height: 1.5vmax;
}
.promotion-video,
.about-img {
  width: 70%;
}
.promotion-video {
  margin: 1% auto;
}
.img-container {
  position: relative;
  height: 35vmax;
}
.about-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline;
  text-align: center;
}
.about-img > img {
  width: 60%;
}
// 미디어쿼리
@media screen and (max-width: 1280px) {
  .about-subtitle {
    margin: 1% auto;
    font-size: 3vmax;
  }
  .line {
    height: 5vmax;
  }
  .about-content {
    width: 42%;
    line-height: calc(15px + 1vmax);
  }
  .about-content2 {
    margin: 1% auto;
    width: 50%;
    font-size: 1.2vmax;
  }
  .about-content3 {
    font-size: 1.2vmax;
    width: 60%;
    line-height: calc(15px + 1vmax);
  }
  .about-content4 {
    font-size: 1.2vmax;
    width: 80%;
    margin-bottom: 10%;
    line-height: calc(15px + 1vmax);
  }
  .readmoreTitle {
    font-size: 1.5vmin;
  }
}
@media screen and (max-width: 1024px) {
  .about-content {
    width: 55%;
  }
}
@media screen and (max-width: 768px) {
  .about-content2 {
    font-size: 1.8vmax;
    line-height: 5vmin;
    width: 70%;
  }
  .about-content3 {
    width: 75%;
    font-size: 1.2vmax;
  }
  .readmore-bg {
    display: block;
    width: 60%;
    margin: 0 auto;
  }
  .numbering {
    font-size: 2.5vmax;
    line-height: 1.2;
  }
  .readmoreTitle {
    font-size: 1.5vmax;
    line-height: 1.5;
  }
  .readmore-img {
    height: 20%;
    .q-img__image {
      width: 100%;
    }
  }
}
@media screen and (max-width: 420px) {
  .q-layout {
    overflow: hidden;
  }
  .about-title {
    margin-top: calc(50px + 5vmax);
    font-size: 5vmax;
  }
  .readmore-bg {
    width: 90%;
  }
  .about-going {
    top: 5%;
    width: 40%;
  }
  .going1 {
    left: -25%;
  }
  .going2 {
    right: -25%;
  }
  .about-content {
    width: 75%;
    font-size: 2vmax;
  }
  .about-content2 {
    line-height: 1.5;
    font-size: 2vmax;
    width: 70%;
  }
  .readmore-bg > div:nth-child(3) .readmoreTitle {
    padding: 0;
  }
  .about-content3 {
    width: 90%;
    font-size: 1.8vmax;
  }
  .text-caption {
    font-size: 1.8vmax;
    line-height: 1.8;
  }
  .numbering {
    font-size: 2.5vmax;
    line-height: 1.2;
  }
  .readmoreTitle {
    font-size: 2vmax;
    line-height: 1.5;
  }

  .img-container {
    height: 30vmax;
  }
  .about-img > img {
    width: 100%;
  }
  .about-content4 {
    width: 80%;
    font-size: 1.8vmax;
    line-height: calc(10px + 1.5vmax);
  }
}
</style>
