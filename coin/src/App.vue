<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "App",
  created() {
    AOS.init();
  },
};
</script>
<style>
@font-face {
  font-family: "racing";
  src: url("assets/font/RacingSansOne-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}

/* 에스코어 폰트 */
@font-face {
  font-family: "S-CoreDream1";
  src: url("assets/font/SCDream1.otf") format("woff");
  font-weight: 100;
}
@font-face {
  font-family: "S-CoreDream2";
  src: url("assets/font/SCDream2.otf") format("woff");
  font-weight: 200;
}
@font-face {
  font-family: "S-CoreDream3";
  src: url("assets/font/SCDream3.otf") format("woff");
  font-weight: 300;
}
@font-face {
  font-family: "S-CoreDream4";
  src: url("assets/font/SCDream4.otf") format("woff");
  font-weight: 400;
}
@font-face {
  font-family: "S-CoreDream5";
  src: url("assets/font/SCDream5.otf") format("woff");
  font-weight: 500;
}
@font-face {
  font-family: "S-CoreDream6";
  src: url("assets/font/SCDream6.otf") format("woff");
  font-weight: 600;
}
@font-face {
  font-family: "S-CoreDream7";
  src: url("assets/font/SCDream7.otf") format("woff");
  font-weight: 700;
}
@font-face {
  font-family: "S-CoreDream8";
  src: url("assets/font/SCDream8.otf") format("woff");
  font-weight: 800;
}
@font-face {
  font-family: "S-CoreDream9";
  src: url("assets/font/SCDream9.otf") format("woff");
  font-weight: 900;
}

/* noto sans kr 폰트 */
@font-face {
  font-family: "NotoSansKr";
  src: url("assets/font/NotoSansKR-Thin.otf") format("woff");
  font-weight: 100;
}
@font-face {
  font-family: "NotoSansKr";
  src: url("assets/font/NotoSansKR-Regular.otf") format("woff");
  font-weight: 200;
}
@font-face {
  font-family: "NotoSansKr";
  src: url("assets/font/NotoSansKR-Medium.otf") format("woff");
  font-weight: 300;
}
@font-face {
  font-family: "NotoSansKr";
  src: url("assets/font/NotoSansKR-Light.otf") format("woff");
  font-weight: 400;
}
@font-face {
  font-family: "NotoSansKr";
  src: url("assets/font/NotoSansKR-Bold.otf") format("woff");
  font-weight: 500;
}
@font-face {
  font-family: "NotoSansKr";
  src: url("assets/font/NotoSansKR-Black.otf") format("woff");
  font-weight: 600;
}
@font-face {
  font-family: "vitro";
  src: url("assets/font/vitro-core.otf") format("woff");
  font-weight: 200;
}
@font-face {
  font-family: "vitro";
  src: url("assets/font/vitro-pride.otf") format("woff");
  font-weight: 100;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: content-box;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: none;
  text-decoration: none;
  color: inherit;
}
/* li 장식 제거 */
li,
ul,
ol {
  list-style: none;
}
/* 이미지 와 글자의 정렬로 생기는 여백 제거 */
img {
  vertical-align: top;
}
/* i,em,address */
i,
em,
address {
  font-style: normal;
}
input,
button {
  vertical-align: bottom;
}
.q-img {
  overflow: none !important;
}
</style>
