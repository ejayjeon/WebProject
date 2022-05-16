<template>
  <!-- <div class="cont" id="cont_2"> -->
  <!-- <ul id="slider"> -->
  <li>
    <slot name="image"></slot>
    <slot name="dot"></slot>
    <slot name="titleyear"></slot>
    <slot name="titlename"></slot>
    <span class="redSpan"></span>
  </li>
  <!-- </ul>
    <div id="indicator">
      <div id="indi_bar"></div>
    </div> -->
  <!-- </div> -->
</template>
<script>
// const cont_2 = document.getElementById("cont_2");
// const slider = document.getElementById("slider");

//const s_wid = slider.offsetWidth;
//const s_li = slider.children;
// const indi_bar = document.getElementById("indi_bar");
let win_wid = window.innerWidth;
// console.log(slider);
//let s_move_max = (s_wid - win_wid / 2) * -1;
let s_pos = 0;
let li_pos = 0;
let pct = 0;
//console.log(slider.offsetWidth);
export default {
  methods: {
    move_slider(amount) {
      s_pos -= amount;
      if (s_pos < s_move_max) {
        s_pos = s_move_max;
        return;
      } else if (s_pos > 0) {
        s_pos = 0;
        return;
      }
      //   slider.style.transform = `translateX(${s_pos}px)`;
      li_upDown(amount);
    },
    li_upDown(amount) {
      li_pos += amount;
      for (let i = 0; i < s_li.length; i++) {
        if (i % 2 != 0) {
          s_li[i].style.transform = `translateY(${li_pos / (i * 5)}px)`;
        } else {
          s_li[i].style.transform = `translateY(${-li_pos / (i * 5)}px)`;
        }
      }
    },
    // on_indicator() {
    //   pct = (s_pos * 100) / s_move_max;
    //   indi_bar.style.clipPath = `
    //     polygon(0% 0%, ${pct}% 0%, ${pct}% 100%, 0% 100%)
    // `;
    // },
  },
  mounted() {
    // cont_2.addEventListener("wheel", function (e) {
    //   e.preventDefault;
    //   if (e.deltaY < 0 && s_pos >= 0) {
    //     setTimeout(() => {
    //       cont_2.style.top = `100%`;
    //     }, 500);
    //     return;
    //   }
    //   move_slider(e.deltaY);
    //   on_indicator();
    // });
  },
};
</script>
<style lang="scss">
// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }
// li {
//   list-style: none;
// }

// .cont {
//   position: absolute;
//   overflow: hidden;
//   width: 100%;
//   height: 100vh;
//   left: 0;
// }

// #cont_2 {
//   top: 0%;
//   /* top:100%; */
//   background: #fff;
//   transition: top 1s;
// }

// #slider {
//   display: flex;
//   align-items: flex-start;
//   position: absolute;
//   height: 300px;
//   top: calc(50% - 150px);
//   left: 10vw;
//   background: #eee;
//   transition: transform 0.3s;
// }

// #slider li {
//   flex: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   overflow: hidden;
//   height: 100%;
//   aspect-ratio: 1/1;
//   margin: 0 200px 0 0;
//   background: slategray;
//   border: 2px solid black;
//   transition: transform 0.2s;
// }

// #slider li:nth-child(2n) {
//   top: -30%;
// }
// #slider li:nth-child(3n) {
//   top: 30%;
// }

// #slider li div {
//   position: relative;
//   z-index: 5;
//   width: calc(100% - 4rem);
//   height: calc(100% - 4rem);
//   background: rgba(255, 255, 255, 0.5);
// }

// .redSpan {
//   display: block;
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 10px;
//   height: 10px;
//   background: salmon;
//   border-radius: 50%;
//   transform: scale(0.1);
//   transition: all 0.8s;
// }

// #indicator {
//   position: absolute;
//   left: 50%;
//   bottom: 10%;
//   transform: translateX(-50%);
//   width: 80%;
//   height: 10px;
//   background: #eee;
//   border: 1px solid #ccc;
// }

// #indi_bar {
//   position: absolute;
//   left: 0;
//   top: 0;
//   height: 100%;
//   width: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   clip-path: polygon(0% 0%, 10px 0%, 10px 100%, 0% 100%);
//   transition: all 0.2s;
// }
</style>
