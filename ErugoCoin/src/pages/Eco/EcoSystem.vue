<template>
  <div>
    <Header />
    <q-layout class="eco">
      <div class="eco-title">ECOSYSTEM</div>
      <p class="eco-content text-h5">{{ content }}</p>
      <div class="imgBox">
        <img
          src="assets/images/eco-img2.png"
          class="eco-img"
          data-aos="zoom-out"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          data-aos-delay="400"
        />
        <img
          src="assets/images/eco-img.png"
          class="eco-img2"
          data-aos-delay="400"
        />
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
export default {
  components: { Header, PageController },
  data() {
    return {
      content:
        "To overcome the limitation of previous mass-type Metaverse platforms that only focus on the value of digital assets and transaction volumes, ERUGO WORLD aims to be the sustainable Metaverse platform which connects with reality by providing valuable services to our investors.",
    };
  },
};
</script>
<style lang="scss" scope>
* {
  margin: 0;
  padding: 0;
}
.eco {
  width: 100%;
  height: 100%;
  position: relative;
}
.eco-title {
  font-family: "S-CoreDream8";
  font-size: 6vmax;
  margin: 8% auto;
  margin-bottom: 3%;
  text-align: center;
}
.eco-content {
  width: 50%;
  margin: 3% auto;
  line-height: 4.5rem;
  text-align: center;
  font-family: "S-CoreDream4";
  font-size: 1.2vmax;
  color: #000;
}
.imgBox {
  width: 100%;
  position: relative;
}
.eco-img {
  display: block;
  margin: 0 auto;
}
.eco-img {
  width: 70%;
}
.eco-img2 {
  position: absolute;
  bottom: -23%;
  right: 0;
  width: 50%;
}
@media screen and (max-width: 1240px) {
  .eco-content {
    width: 60%;
    line-height: 3rem;
    font-size: 2vmax;
  }
}
@media screen and (max-width: 800px) {
  .eco-content {
    width: 80%;
  }
  .eco-title {
    margin: 20% auto;
    margin-bottom: 3%;
  }
}
@media screen and (max-width: 500px) {
  .eco-content {
    width: 90%;
  }
  .eco-content {
    line-height: 2.3rem;
    font-size: 2.2vmax;
  }
  .eco-title {
    font-size: 5.5vmax;
  }
  .eco-img {
    width: 90%;
  }
  .q-layout {
    overflow: hidden;
    padding-bottom: 20%;
  }
}
</style>
