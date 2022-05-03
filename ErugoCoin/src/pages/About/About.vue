<template>
  <div>
    <Header />
    <q-layout class="about">
      <span>
        <img
          src="assets/images/going-left.png"
          class="about-going"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          data-aos-anchor-placement="top-center"
        />
        <img
          src="assets/images/going-right.png"
          class="about-going"
          style="right: 0"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          data-aos-anchor-placement="top-center"
        />
      </span>
      <div class="about-title">ABOUT</div>
      <div class="line" />
      <div class="about-subtitle text-h2">ERUGO WORLD</div>
      <p class="about-content text-h5">{{ readmore[0].content }}</p>
      <div class="line" />
      <div class="about-subtitle text-h2">Principles</div>
      <p class="about-content2 text-h4">ERUGO WORLD and EWC Promotion Clip</p>
      <div class="readmore-bg">
        <ReadMore v-for="(r, i) in readmore" :key="i">
          <template #numbering>
            <div class="text-h4 numbering">{{ r.number }}</div>
          </template>
          <template #title>
            <div class="text-h6 q-mt-sm q-mb-xs readmoreTitle">
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
      <p class="about-content text-h5">
        {{ readmore[1].content }},{{ readmore[2].content }}
      </p>
      <div class="line" />
      <div class="about-subtitle text-h2">Promotion Clip</div>
      <p class="about-content2 text-h4">ERUGO WORLD and EVC Promotion Clip</p>
      <div class="q-pa-md promotion-video">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/u-vHf6TX0k8"
        />
      </div>
      <div class="line" />
      <div class="about-subtitle text-h2">Rugo</div>
      <p class="about-content2 text-h4">ERUGO WORLD and EWC Promotion clip</p>

      <div class="about-img" v-for="(a, i) in aboutImage" :key="i">
        <img
          :src="a.path"
          :ratio="16 / 9"
          v-bind:style="a.deg"
          style="width: 80%"
          data-aos="zoom-in"
          data-aos-offset="500"
          data-aos-duration="500"
          :data-aos-delay="500 * i"
        />
      </div>

      <p class="about-content3 text-h5">{{ readmore[0].content }}</p>
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          number: "02",
          title:
            "Create a low barrier to entry in which anyone can easily participate",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          number: "03",
          title:
            "Create a low barrier to entry in which anyone can easily participate",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
          number: "04",
          title:
            "Create a low barrier to entry in which anyone can easily participate",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
      ],
      aboutImage: [
        {
          path: "assets/images/about-img1.png",
          deg: "transform: rotate(0deg)",
        },
        {
          path: "assets/images/about-img2.png",
          deg: "transform: rotate(5deg)",
        },
        {
          path: "assets/images/about-img3.png",
          deg: "transform: rotate(-5deg)",
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
.about {
  width: 100%;
  height: 100%;
  position: relative;
}
.about-title {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.about-going {
  position: absolute;
  width: 20%;
}
.about-subtitle {
  font-family: "S-CoreDream6";
  margin: 2% auto;
  text-align: center;
  width: 100%;
}
.about-content,
.about-content2,
.about-content3 {
  width: 50%;
  margin: 3% auto;
  line-height: 3rem;
  text-align: center;
  font-family: "S-CoreDream4";
  color: #727272;
}
.about-content2 {
  font-family: "S-CoreDream6";
  color: #363636;
}
.line {
  border-right: 1px solid #363636;
  height: 150px;
  width: 50%;
  margin: 3% 0;
}
.readmore-bg {
  display: flex;
  font-family: "S-CoreDream4";
  justify-content: center;
  width: 100%;
  padding: 0;
}
.numbering {
  font-family: "S-CoreDream7";
  font-size: 2vmin;
  min-height: 1.5vw;
  line-height: 1.5vw;
  max-height: 1.5vw;
}
.promotion-video,
.about-img {
  width: 70%;
}
.promotion-video {
  margin: 1% auto;
}

.about-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: inline;
  text-align: center;
}
.about-content3 {
  position: relative;
  margin-top: 45%;
}

// 미디어쿼리
@media screen and (max-width: 1280px) {
  .about-subtitle {
    font-size: 4vmin;
  }
  .about-content,
  .about-content2,
  .about-content3 {
    font-size: 1.8vmin;
  }
  .readmoreTitle {
    font-size: 1.5vmin;
  }
}
@media screen and (max-width: 1024px) {
  .line {
    height: 100px;
  }
  .about-content,
  .about-content2,
  .about-content3 {
    font-size: 1.7vmin;
    width: 70%;
  }
  .readmoreTitle {
    line-height: 2.5vmin;
  }
}
@media screen and (max-width: 768px) {
  .about-title {
    margin-top: 20%;
  }
  .readmore-bg {
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
  .about-content,
  .about-content2,
  .about-content3 {
    font-size: 1.8vmax;
    line-height: 5vmin;
    width: 70%;
  }
  .numbering {
    font-size: 3vmin;
  }
  .readmoreTitle {
    font-size: 2.5vmin;
    line-height: 3vmin;
  }
  .readmore-img {
    height: 20%;
    .q-img__image {
      width: 100%;
    }
  }
}
@media screen and (max-width: 576px) {
  .line {
    height: 80px;
  }
  .about-content,
  .about-content2,
  .about-content3 {
    font-size: 1.7vmax;
    line-height: 5vmin;
    width: 75%;
  }
  .about-content {
    font-size: 1.4vmax;
  }
  .readmoreTitle {
    font-size: 4vmin;
    line-height: 6vmin;
  }
}
@media screen and (max-width: 440px) {
  .about-title {
    font-size: 4vmax;
  }
}
</style>
