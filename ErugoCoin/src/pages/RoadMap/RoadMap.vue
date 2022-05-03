<template>
  <div>
    <Header />
    <q-layout class="roadmap">
      <div class="roadmap-title">ROAD MAP</div>
      <div class="line" />
      <div class="roadmap-subtitle text-h2">OF LISTING</div>
      <!-- Listing -->
      <div class="roadmaplist" @mousewheel="$refs.carousel.next()">
        <q-carousel
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          draggable
          v-model="slide"
          ref="carousel"
          infinite
          height="50vh"
          transition-duration="1200"
          style="background-color: transparent"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div class="row justify-center items-center q-col-gutter no-wrap">
              <q-img
                v-for="(r, i) in roadmap"
                :key="i"
                :name="i"
                class="col-3 list-item"
                :id="r.title"
                :src="r.src"
              >
                <div class="roadmap-title2">2022</div>
                <div class="roadmap-title3">({{ r.title }})</div>
              </q-img>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap">
            <div class="row justify-center items-center q-col-gutter no-wrap">
              <q-img
                v-for="(r, i) in roadmap2"
                :key="i + 4"
                :name="i + 4"
                class="col-3 list-item"
                :id="r.title"
                :src="r.src"
              >
                <div class="roadmap-title2">2022</div>
                <div class="roadmap-title3">({{ r.title }})</div>
              </q-img>
            </div>
          </q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control
              position="bottom"
              :offset="[0, 60]"
              class="carousel-ctrl"
            >
              <!-- 좌우 버튼 -->
              <q-btn flat @click="$refs.carousel.previous()">
                <img
                  src="assets/images/roadmap_arrow_01.png"
                  style="width: 75px"
                />
              </q-btn>

              <q-btn flat>
                <img src="assets/images/roadmap_btn.png" style="width: 75px" />
              </q-btn>

              <q-btn flat @click="$refs.carousel.next()">
                <img
                  src="assets/images/roadmap_arrow_02.png"
                  style="width: 75px"
                />
              </q-btn>
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
      <!-- Listing -->
      <div class="roadmap-subtitle2 text-h2">OF METAVERSE</div>
      <q-img src="assets/images/roadmap_map.png">
        <div class="line-vertical" />
        <!-- Metaverse -->
        <div class="roadmapmeta">
          <q-carousel
            swipeable
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            draggable
            v-model="slide"
            ref="metaverse"
            infinite
            height="100vh"
            transition-duration="1200"
            style="background-color: transparent"
          >
            <q-carousel-slide v-model="model" :name="1" class="column no-wrap">
              <div class="row flex-center items-center q-col-gutter no-wrap">
                <q-img class="col-2 meta-top" :src="roadmap3[0].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_01.png"
                  />
                  <p class="meta-text">{{ roadmap3[0].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap3[1].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_02.png"
                  />
                  <p class="meta-text">{{ roadmap3[1].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap3[2].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_03.png"
                  />
                  <p class="meta-text">{{ roadmap3[2].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap3[3].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_04.png"
                  />
                  <p class="meta-text">{{ roadmap3[3].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap3[4].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_05.png"
                  />
                  <p class="meta-text">{{ roadmap3[4].text }}</p>
                </q-img>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="2" class="column no-wrap">
              <div class="row flex-center items-centerq-col-gutter no-wrap">
                <q-img class="col-2 meta-down" :src="roadmap4[0].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_06.png"
                  />
                  <p class="meta-text">{{ roadmap4[0].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap4[1].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_01.png"
                  />
                  <p class="meta-text">{{ roadmap4[1].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap4[2].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_02.png"
                  />
                  <p class="meta-text">{{ roadmap4[2].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap4[3].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_03.png"
                  />
                  <p class="meta-text">{{ roadmap4[3].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap4[4].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_04.png"
                  />
                  <p class="meta-text">{{ roadmap4[4].text }}</p>
                </q-img>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="3" class="column no-wrap">
              <div class="row flex-center items-center q-col-gutter no-wrap">
                <q-img class="col-2 meta-top" :src="roadmap5[0].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_05.png"
                  />
                  <p class="meta-text">{{ roadmap5[0].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap5[1].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_06.png"
                  />
                  <p class="meta-text">{{ roadmap5[1].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap5[2].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_01.png"
                  />
                  <p class="meta-text">{{ roadmap5[2].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap5[3].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_02.png"
                  />
                  <p class="meta-text">{{ roadmap5[3].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap5[4].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_03.png"
                  />
                  <p class="meta-text">{{ roadmap5[4].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap5[5].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_04.png"
                  />
                  <p class="meta-text">{{ roadmap5[5].text }}</p>
                </q-img>
              </div>
            </q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control
                position="bottom"
                :offset="[0, 30]"
                class="carousel-ctr2"
              >
                <q-btn flat @click="$refs.metaverse.previous()">
                  <img
                    src="assets/images/roadmap_arrow_01.png"
                    style="width: 75px"
                  />
                </q-btn>
                <q-btn flat>
                  <img
                    src="assets/images/roadmap_btn.png"
                    style="width: 75px"
                  />
                </q-btn>
                <q-btn flat @click="$refs.metaverse.next()">
                  <img
                    src="assets/images/roadmap_arrow_02.png"
                    style="width: 75px"
                  />
                </q-btn>
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
        <!-- Metaverse -->
      </q-img>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
// :img-src="`assets/images/roadmap_0${i + 1}.png`"
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";

import { ref } from "vue";

export default {
  data() {
    return {
      roadmap: [
        { title: "XEXC", src: "assets/images/roadmap_01.png" },
        { title: "LBANK", src: "assets/images/roadmap_02.png" },
        { title: "CONSBIT", src: "assets/images/roadmap_03.png" },
        { title: "BITTREX", src: "assets/images/roadmap_04.png" },
      ],
      roadmap2: [
        { title: "coinUtop", src: "assets/images/roadmap_05.png" },
        { title: "TENNTEN", src: "assets/images/roadmap_06.png" },
        { title: "Btrade", src: "assets/images/roadmap_07.png" },
        { title: "XTCOM", src: "assets/images/roadmap_08.png" },
      ],
      roadmap3: [
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_0.png",
          text: "Concept design development",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_1.png",
          text: "Concept design Open",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_2.png",
          text: "Main character production and confirmation",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_3.png",
          text: "Main character open",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_4.png",
          text: "Background concept, character, 3D build(3D, Making a model)",
        },
      ],

      roadmap4: [
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_5.png",
          text: "Write a storyboard for the alpha test",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_6.png",
          text: "Alpha test technology demonstration._Movie clip",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_7.png",
          text: "Alpha test Prototype production",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_8.png",
          text: "Alpha version prototype test",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_9.png",
          text: "Alpha version prototype revealed",
        },
      ],
      roadmap5: [
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_10.png",
          text: "Planning the revised version of Alpha(storyboard)",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_11.png",
          text: "Alpha version revision development",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_12.png",
          text: "Developing Alpha User Playable version development",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_13.png",
          text: "Alpha User Playable version revealed",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_14.png",
          text: "Write a storyboard for the Beta version",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_15.png",
          text: "'ErugoWorld' will participate in the G-Star in 2022.",
        },
      ],
    };
  },
  components: { Header, PageController },

  setup() {
    return {
      slide: ref(1),
      model: ref(8),
    };
  },
};
</script>
<style lang="scss" scope>
.roadmap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.list-item {
  display: flex;
  width: 50px;
}
.roadmap-title,
.roadmap-title2 {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.roadmap-title2 {
  font-size: 1vmin;
}
.roadmap-title3 {
  font-family: "S-CoreDream6";
  top: 80%;
  width: 0;
}
.roadmap-subtitle,
.roadmap-subtitle2 {
  font-family: "S-CoreDream6";
  margin: 0% auto;
  font-size: 5vmax;
  text-align: center;
  width: 100%;
}
.roadmap-subtitle2 {
  margin: 5% auto;
}
.line {
  border-right: 1px solid #363636;
  height: 150px;
  width: 50%;
  margin: 3% 0;
}
.line-vertical {
  position: relative;
  border-top: 0.5px solid black;
  position: absolute;
  width: 100vw;
  top: 50%;
  z-index: 1;
}

.roadmaplist {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  top: 50%;
  overflow: hidden;
}

// 메타버스
.roadmapmeta {
  display: grid;
  width: 100%;
  height: 100%;
  grid-area: span 10;
}
.q-panel {
  width: 100vw;
  // height: 50vw;
  overflow: hidden;
}
.carousel-ctrl,
.carousel-ctr2 {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.carousel-ctr2 {
  position: fixed;
}

.q-img__content > div {
  position: absolute;
  background: transparent;
  color: #363636;
  font-family: "S-CoreDream6";
  left: 50%;
  transform: translateX(-50%);
}
.meta-arrow-top,
.meta-arrow-down {
  position: absolute;
  width: 8%;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
}
.meta-arrow-down {
  top: 10%;
}
.meta-top {
  top: 50%;
  transform: translateY(-15%);
  p {
    width: 90%;
    text-align: center;
    margin-top: 100%;
  }
}
.meta-down {
  top: 90%;
  p {
    width: 90%;
    text-align: center;
  }
}
@media all and (max-width: 1024px) {
}
</style>
