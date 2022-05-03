<template>
  <div>
    <Header />
    <q-layout class="whitepaper">
      <div class="whitepaper-title">WHITE PAPER</div>
      <p class="whitepaper-content text-h4">
        ERUGO WORLD COIN, <br />
        The new concept of digital assets.
      </p>
      <p class="whitepaper-content2 text-h5">{{ whitepaper.content }}</p>
      <div class="whitepaper-file">
        <div
          class="whitepaper-img1 paper-box"
          @click="
            pdfDownload('/assets/pdf/220421_EWC_WHITEPAPER_ver_2.2(KOR).pdf')
          "
        >
          <p class="img-text">
            WHITE PAPER <br />
            (KOR)
          </p>
        </div>
        <div
          class="whitepaper-img2 paper-box"
          @click="
            pdfDownload('/assets/pdf/220421_EWC_WHITEPAPER_ver_2.2(ENG).pdf')
          "
        >
          <p class="img-text">
            WHITE PAPER <br />
            (ENG)
          </p>
        </div>
        <div
          class="whitepaper-img3 paper-box"
          @click="pdfDownload('/assets/pdf/210930+WC(Wins).pdf')"
        >
          <p class="img-text">
            LEGAL REVIEW <br />
            (Wins)
          </p>
        </div>
        <div class="whitepaper-img4 paper-box">
          <p class="img-text">
            LEGAL REVIEW <br />
            (J.W)
          </p>
        </div>
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
export default {
  data() {
    return {
      whitepaper: {
        content:
          "ERUGO WORLD with 'ERUGO WORLD Ecosystem Model' which connects Metaverse, business and user based on blockchain pursues sustainable growth via an independent economic ecosystem.",
      },
    };
  },
  components: { Header, PageController },
  methods: {
    pdfDownload(url) {
      fetch(url, {
        method: "get",
      })
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          let a = document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = url.split("/assets/")[1];
          a.click();
          window.URL.revokeObjectURL(a.href);
        });
    },
  },
};
</script>
<style lang="scss" scope>
* {
  margin: 0;
  padding: 0;
}
.whitepaper {
  width: 100%;
  height: 100%;
  min-height: 100% !important;
  position: relative;
}
.whitepaper-title {
  font-family: "S-CoreDream9";
  font-size: 6rem;
  margin: 10% auto;
  margin-bottom: 0;
  text-align: center;
}
.whitepaper-content,
.whitepaper-content2 {
  width: 45%;
  margin: 3% auto;
  line-height: 3rem;
  text-align: center;
  font-family: "S-CoreDream4";
  color: #363636;
}
.whitepaper-content {
  font-size: 1.8vmax;
  line-height: 3vmax;
  margin-top: 1%;
}
.whitepaper-content2 {
  font-family: "S-CoreDream4";
  color: #727272;
}
.whitepaper-file {
  width: 65%;
  margin: 0 auto;
  padding-bottom: 5%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  cursor: pointer;
}
.paper-box {
  position: relative;
  border-radius: 10px;
  width: 23vmax;
  max-height: 250px;
  min-height: 15vmin;
  margin: 5% 0;
}
.img-text {
  position: absolute;
  width: 100%;
  font-size: 1.5vmax;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "S-CoreDream6";
}
.whitepaper-img1 {
  box-shadow: 0 0 70px 0 rgba(239, 1, 1, 0.4);
}
.whitepaper-img2 {
  box-shadow: 0 0 70px 0 rgba(1, 104, 239, 0.4);
}
.whitepaper-img3 {
  box-shadow: 0 0 70px 0 rgba(20, 6, 217, 0.4);
}
.whitepaper-img4 {
  box-shadow: 0 0 70px 0 rgba(177, 1, 239, 0.4);
}
.whitepaper-img1:hover {
  background-color: #ffa1a1;
}
.whitepaper-img2:hover {
  background-color: #99c4fe;
}
.whitepaper-img3:hover {
  background-color: #9b94ff;
}
.whitepaper-img4:hover {
  background-color: #e7a2ff;
}
@media screen and (max-width: 920px) {
  .whitepaper-title {
    margin-top: 15%;
    font-size: 5rem;
  }
  .whitepaper-content,
  .whitepaper-content2 {
    width: 80%;
  }
  .whitepaper-file {
    margin-top: 10%;
    width: 80%;
  }
}
@media screen and (max-width: 720px) {
  .whitepaper-title {
    margin-top: 15%;
    margin-bottom: 5%;
    font-size: 6vmax;
  }
  .whitepaper-content,
  .whitepaper-content2 {
    width: 90%;
  }
  .whitepaper-content2 {
    line-height: 4vmax;
  }
  .whitepaper-file {
    display: block;
    width: 100%;
  }
  .paper-box {
    margin: 7% auto;
  }
}
@media screen and (max-width: 420px) {
  .whitepaper-title {
    margin-top: 25%;
    margin-bottom: 2%;
    font-size: 4.5vmax;
  }
  .whitepaper-content {
    margin: 5% auto;
    font-size: 2.2vmax;
  }
  .whitepaper-content2 {
    font-size: 2vmax;
    line-height: 2.6vmax;
  }
  .whitepaper-file {
    margin-top: 15%;
  }
  .paper-box {
    margin: 10% auto;
    width: 30vmax;
    max-height: 250px;
    min-height: 18vmin;
  }
  .img-text {
    font-size: 2vmax;
    line-height: 1.2;
  }
}
</style>
