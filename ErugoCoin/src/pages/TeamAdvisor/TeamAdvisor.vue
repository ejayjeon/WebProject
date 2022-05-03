<template>
  <div>
    <Header />
    <q-layout class="teamadvisor">
      <div class="teamadvisor-title">TEAM</div>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        arrows
        infinite
        prev-icon="img:assets/images/team_btn_02.png"
        next-icon="img:assets/images/team_btn_01.png"
        class="team-carousel"
      >
        <q-carousel-slide
          :name="1"
          class="teamadvisor-carousel teamadvisor-card"
        >
          <div class="row fit no-wrap">
            <q-img
              v-for="(q, i) in 3"
              :key="i"
              :class="`rounded-borders full-height front${i + 1}`"
              :src="`assets/images/team0${i + 1}.png`"
              @mouseover="flipCardFun(i + 1)"
              @mouseleave="flipCardBack(i + 1)"
            >
              <img
                src="assets/images/team-arrow-01.png"
                class="teamadvisor-arrow"
                :id="`arrowBtn${i + 1}`"
              />
              <h4 class="title">{{ card[i].title }}</h4>
              <h6 class="content">{{ card[i].name }}</h6>
              <!-- v-show -->
              <div :class="`row fit no-wrap toggleBack${i + 1}`">
                <q-img
                  :class="`rounded-borders full-height back${i + 1}`"
                  src="assets/images/team07.png"
                  v-show="flipCard"
                >
                  <h6 class="content2">
                    <h6 class="cardtitle">
                      {{ card[i].title }} <br />
                      <h6 class="cardtitle2">{{ card[i].name }} <br /></h6>
                    </h6>
                    {{ card[i].content }}
                  </h6>
                  <img
                    src="assets/images/teamadvisor-back.png"
                    class="teamadvisor-arrow hide"
                    :id="`arrowBtn${i + 1}`"
                    @click="flipCardFun(i + 1)"
                  />
                </q-img>
              </div>
              <!-- v-show -->
            </q-img>
          </div>
        </q-carousel-slide>

        <!-- 두번쨰 -->
        <q-carousel-slide :name="2" class="teamadvisor-carousel">
          <div class="row fit no-wrap">
            <q-img
              v-for="(q, i) in 3"
              :key="i"
              :class="`rounded-borders full-height front${i + 4}`"
              :src="`assets/images/team0${i + 4}.png`"
              @mouseover="flipCardFun(i + 4)"
              @mouseleave="flipCardBack(i + 4)"
            >
              <img
                src="assets/images/team-arrow-01.png"
                class="teamadvisor-arrow"
              />
              <h4 class="title">{{ card[i + 3].title }}</h4>
              <h6 class="content">{{ card[i + 3].name }}</h6>
              <!-- v-show -->
              <div :class="`row fit no-wrap toggleBack${i + 4}`">
                <q-img
                  :class="`rounded-borders full-height  back${i + 4}`"
                  src="assets/images/team07.png"
                  v-show="flipCard"
                >
                  <h6 class="content2">
                    <h6 class="cardtitle">
                      {{ card[i + 3].title }} <br />
                      <h6 class="cardtitle2">{{ card[i + 3].name }} <br /></h6>
                    </h6>
                    {{ card[i + 3].content }}
                  </h6>
                  <img
                    src="assets/images/teamadvisor-back.png"
                    class="teamadvisor-arrow hide"
                    @click="flipCardFun(i + 4)"
                  />
                </q-img>
              </div>
              <!-- v-show -->
            </q-img>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="teamadvisor-title">ADVISOR</div>
      <div class="advisor">
        <img src="assets/images/advisor_01.png" />
        <img src="assets/images/advisor_02.png" />
        <img src="assets/images/advisor_03.png" />
      </div>
      <div class="teamadvisor-title">PARTNER</div>
      <div class="partner">
        <img src="assets/images/partner_01.png" />
        <img src="assets/images/partner_02.png" />
        <img src="assets/images/partner_03.png" />
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
import TACard from "../../components/TACard/TACard.vue";
import { ref } from "vue";
export default {
  components: { Header, PageController, TACard },
  data() {
    return {
      card: [
        {
          key: "ceo",
          title: "CEO",
          name: "Jung su Kim",
          content:
            "I started my career at a law firm and grew my career at an asset management firm. When I worked for a law firm, I was interested in IT business while developing web software to optimize my work. I learned how money moves while working for an asset management company. These two thing naturally served as an opportunity for me to participate in the cryptocurrency business. I am currently leading the development of metaverse 'ErugoWorld' suitable for Web 3.0. I believe I am the most reasonable in this job.",
        },
        {
          key: "techadvisor",
          title: "TECH ADVISOR",
          name: "Gyeong su Ham",
          content:
            "Erugoworld: Apr. 2022 ~ Tech Adviser KoreaHudiLab: Sep. 2021 ~Director or R&D institute DataCommand Inc.: Jun. 2017 ~ Aug. 2021 Director or R&D institute AgileSoDA: Mar. 2016 ~ May. 2017 Director or R&D institute the world's best design team for 'ErugoWorld.' Datastreamst: Jun. 2013 ~ Feb. 2016 Director or R&D institute",
        },
        {
          key: "techadvisor",
          title: "TECH ADVISOR",
          name: "Kwang je Cho",
          content:
            "Erugoworld: Apr. 2022 ~  Tech Adviser INNORULES CO.,LTD: Apr. 2018 ~  Development Project Leader DataCommand Inc: May. 2017 ~ Mar. 2018 Development of solutions Codelab: Jan. 2015 ~ Jan. 2017 Development Team Leader JDF: Sep. 2009 ~ Dec. 2014 Development Team Leader",
        },
        {
          key: "design",
          title: "DESIGN TEAM",
          name: "",
          content:
            "Our design team is currently recruiting. The team is working on various and unique designs for 'ErugoWorld.' In addition, the team is participating in EWC and all related design works. We are confident that we are the world's best design team for 'ErugoWorld.' Please cheer for the developing 'ErugoWorld' design team.",
        },
        {
          key: "development",
          title: "DEVELOPMENT TEAM",
          name: "",
          content:
            "Our design team is currently recruiting. The team is working on various and unique designs for 'ErugoWorld.' In addition, the team is participating in EWC and all related design works. We are confident that we are the world's best design team for 'ErugoWorld.' Please cheer for the developing 'ErugoWorld' design team.",
        },
        {
          key: "you",
          title: "... & YOU",
          name: "",
          content: "you are the next member of our team",
        },
      ],
    };
  },
  methods: {
    flipCardFun(e) {
      var front = document.querySelector(`.front${e}`);
      //var back = document.querySelector(`.back${e}`);
      var toggleBack = document.querySelector(`.toggleBack${e}`);
      front.classList.toggle("toggleCard");
      console.log(front);
      toggleBack.classList.toggle("toggleCard");
    },
    flipCardBack(e) {
      var front = document.querySelector(`.front${e}`);
      var back = document.querySelector(`.back${e}`);

      console.log(back);
      var toggleBack = document.querySelector(`.toggleBack${e}`);

      front.classList.remove("toggleBack");
      toggleBack.classList.add("toggleBack");
      back.removeAttribute("style");
      back.classList.toggle("toggleCard");
    },
  },
  setup() {
    const flipCard = ref(false);
    return {
      flipCard,
      slide: ref(1),
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scope>
.teamadvisor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.team-carousel {
  width: 90%;
  margin: 0 auto;
  height: 33vw;
  img {
    padding: 7%;
  }
}
.q-carousel__arrow .q-icon img {
  width: 4vw;
  height: 4vw;
}
.teamadvisor-title {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.teamadvisor-carousel {
  overflow: hidden;
  div {
    text-align: center;
  }
}

.teamadvisor-arrow {
  width: 28%;
  position: absolute;
  bottom: 5%;
  right: 5%;
  cursor: pointer;
}
.q-panel > div {
  width: 85%;
  margin: 0 auto;
}
.q-img__image {
  position: relative;
  object-fit: contain;
}
.title,
.content,
.content2 {
  position: absolute;
  font-family: "S-coreDream7";
  font-size: 2vw;
  width: 80%;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -40%);
  line-height: 2vw;
}
.content {
  font-size: 1.5vw;
  top: 72%;
}
.content2 {
  font-family: "S-coreDream4";
  color: #707070;
  text-align: left;
  align-items: flex-start;
  font-size: 0.8vw;
  top: 40%;
  line-height: 1.89;

  .cardtitle {
    font-family: "S-coreDream7";
    color: #000;
    padding-bottom: 10%;
    .cardtitle2 {
      font-family: "S-coreDream4";
      font-size: 1vw;
    }
  }
}
.q-carousel__slide {
  padding: 0;
}
.q-img__content > div {
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 0;
}
.advisor,
.partner {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  img {
    width: 25vw;
  }
}
.toggleCard {
  visibility: collapse;
}
.toggleBack {
  visibility: visible;
}
.hide {
  visibility: visible;
}
@for $i from 1 to 7 {
  // .front#{$i}:hover {
  //   visibility: collapse;
  // }
  // .toggleBack {
  //   background: #000;
  // }

  // #teamadvisor-img#{$i}:after {
  //   content: "";
  //   // background: url("./images/team07.png") no-repeat center;
  //   background-size: contain;
  //   background: #000;
  // }
}

@media all and (max-width: 1024px) {
  .teamadvisor-title {
    font-size: 5vmax;
  }
  .advisor,
  .partner {
    img {
      width: 30vw;
    }
  }
}
@media all and (max-width: 420px) {
  .teamadvisor-title {
    font-size: 4vmax;
    margin-top: 15%;
  }
  .title {
    width: 80%;
    font-size: 1.7vw;
    line-height: 3vw;
    font-family: "S-coreDream6";
  }
  .content {
    font-size: 1.2vw;
    font-family: "S-coreDream4";
  }
  .q-carousel__arrow .q-icon img {
    width: 5vw;
    height: 5vw;
  }
}
</style>
