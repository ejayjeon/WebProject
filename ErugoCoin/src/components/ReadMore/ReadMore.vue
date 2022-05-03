<template>
  <div class="q-pa-md row readmore">
    <q-card class="my-card" flat bordered>
      <q-img src="assets/images/readmore.png" class="readmore-img">
        <div>
          <slot name="numbering"></slot>
        </div>
      </q-img>
      <q-card-section>
        <div class="readmore-title">
          <slot name="title"></slot>
        </div>
      </q-card-section>
      <div v-show="expanded">
        <q-card-section class="readmore-font">
          <div>
            <slot name="content"></slot>
          </div>
          <div class="readmore-padding" />
          <q-separator />
        </q-card-section>
      </div>

      <q-slide-transition>
        <q-card-actions>
          <q-space />

          <q-img
            :src="
              expanded
                ? 'assets/images/readmore-up.png'
                : 'assets/images/readmore-down.png'
            "
            @click="expanded = !expanded"
            class="readmore-btn"
          />
        </q-card-actions>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  setup() {
    return {
      expanded: ref(false),
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-width: 400px;
  box-shadow: 10px 10px 10px black;
}
.q-img__content > div {
  font-family: "S-CoreDream7";
  font-weight: 700;
  background: transparent;
}
.readmore-title {
  font-family: "S-CoreDream7";
}
.readmore-content {
  font-family: "S-CoreDream4";
}

.readmore-btn {
  width: 50px;
  text-align: center;
  cursor: pointer;
}
.row {
  display: flex;
  flex-direction: column-reverse;
}
@media screen and (max-width: 768px) {
  .readmore-btn {
    width: 40px;
  }
  .readmore-padding {
    margin-top: 5%;
  }
}
</style>
