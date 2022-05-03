<template>
  <div id="app">
    <Header />
    <q-layout class="container announcement">
      <div id="media-list">
        <div class="announcement-title">Announcement</div>
        <ul>
          <li>
            <div class="announcement-list title row text-right">
              <span class="col-1" style="text-align: left">NO</span>
              <span class="col-9" style="text-align: center">Notice</span>
              <span class="col-2">Date</span>
            </div>
          </li>
          <li
            v-show="type === '' || type === a.type"
            v-for="(a, i) in announcement"
            :key="i"
            v-on:click="toggleDetail(a)"
          >
            <div class="announcement-list row text-right">
              <span class="col-1 font-bold" style="text-align: left">{{
                i + 1
              }}</span>
              <span class="col-9" style="text-align: center">{{
                a.title
              }}</span>
              <span class="col-2 font-bold">{{ a.date }}</span>
            </div>
            <div v-show="a.showDetail" class="announcement-detail">
              <!-- <p v-html="summaryFun(i)"></p> -->
              <p style="white-space: pre-line">{{ announcement[i].summary }}</p>
            </div>
          </li>
        </ul>
        <div class="row q-pa-md flex flex-center">
          <q-pagination
            class="announcement_page"
            v-model="pagination.page"
            color="grey-6"
            active-color="black"
            :max="pagesNumber"
            size="2vmin"
            direction-links
            flat
            padding="1vmax"
            icon-prev="img:assets/images/announcement_btn_01.png"
            icon-next="img:assets/images/announcement_btn_02.png"
          />
        </div>
      </div>
      <PageController />
    </q-layout>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
import { ref, computed } from "vue";
let now = new Date();
let date = now.toLocaleDateString();
const columns = [
  {
    name: "NO",
    required: true,
    label: "NO",
    align: "center",
    field: (row) => row.no,
    format: (val) => `${val}`,
    sortable: true,
    style: "width: 10%; height: 5vmax; font-size: 1.2vmax",
  },
  {
    name: "Notice",
    align: "center",
    label: "Notice",
    field: (row) => row.notice,
    sortable: true,
    required: true,
    style: "font-size: 1.2vmax",
  },
  {
    name: "Date",
    label: "Date",
    field: (row) => row.date,
    align: "center",
    sortable: true,
    required: true,
    style: "width: 10%; font-size: 1.2vmax;",
  },
];
const rows = [
  {
    no: 1,
    notice: "Announcement",
    date: date,
  },
  {
    no: 2,
    notice: "I'm a really great person.2",
    date: date,
  },
  {
    no: 3,
    notice: "I'm a really great person.3",
    date: date,
  },
];
console.log(now);
export default {
  components: { Header, PageController },
  data() {
    return {
      type: "",
      announcement: [
        {
          title:
            "[Notice] Erugo World Coin (EWC) listed in Coin Market Cap (CMC), Cryptocurrency site",
          date: "2022.01.27",
          summary:
            "Erugo World Coin (EWC) was listed on Coin Market Cap (CMC), the world's largest cryptocurrency information site, on January 27, 2022. \n Coin Market Cap (CMC) is a website that provides trading volume, white papers, and rankings of the world's largest cryptocurrency and cryptocurrency exchanges established in 2013. It is currently the most reliable cryptocurrency site. \n ERUGO INC CEO Kim Jung-soo said “I am happy to be able to give more trust and faith to everyone who accompanies the EWC by registering it on a trusted cryptocurrency site.” Also, he said “I will continue to deliver better news through continuous updates and project announcements” too.",
          type: "nonfiction",
        },
        {
          title: "[Notice] ErugoWorldCoin will be list on Bittrex Global",
          date: "2022.01.19",
          summary: `Erugo World Coin will be listed on Bittrex Global at 07:00 on January 20, 2022(KST). As a result, you will be able to create a wallet for transactions from 07:00 on January 19th(KST). \n Bittrex is an American cryptocurrency exchange that opened on February 28, 2014, and has considerable public confidence. \n Bittrex is one of Forbes' top 10 cryptocurrency exchanges in the world. In 2019, they entered the European cryptocurrency market by establishing Bittrex Global in Lichtenstein. \n Kim Jung-soo, CEO of Erugo INC, said Erugo World Coin chose Bittrex as its first listed exchange in 2022. As stated in the roadmap, we will continue to be listed so that the base of Erugo World Coin can be expanded. \n In the future, we, Erugo World Coin, will continue to create a reasonable value for Erugo World Coin through a continuous base expansion strategy.`,
          type: "nonfiction",
        },
        {
          title: "[Notice] Erugo World Coin staking policy change.",
          date: "2022.01.18",
          summary: `Hello, this is the official blog of Erugo World Coin. \n The EWC Staking Option will change from 00:00 on January 20, 2022(KST) \n The 'three-month option' disappears from the existing EWC Staking Option, and the overall interest rate is lowered. The minimum quantity of the EWC Staking Option also changes. \n Existing users and those who applied by 24:00 on January 19, 2022 will be subject to the existing EWC Staking Option. \n ■ Existing \n 12 months = 12% / year \n 9 months = 9% / year \n 6 months = 6% / year \n 3 months = 3% / year \n ■ New 12 months = 6% / year (0.5% / month) \n 9 months = 4.5% / year (0.325% / month) \n 6 months = 3% / year (0.25% / month) \n 3 months = Cancelled \n The minimum deposit start at 5,000`,
          type: "nonfiction",
        },
        {
          title: "[Notice] ErugoWorldCoin will be list on LBank.",
          date: "2022.03.25",
          summary: `Hello, this is "Erugo World Coin". \n 
          Erugo World Coin (EWC) will be listed on L Bank on March 29, 2022 at 5:00 PM. \n Deposit time: 28th Mar 5pm (KST) \n Trading start: 29th Mar 5pm (KST) \n 
          Withdrawal time: 30th Mar 5pm (KST) \n L Bank is a global exchange in Singapore established in October 2017. As of May 2019, it is a large global exchange that ranks 16th in the ‘Adjusted Volume’ chart and 20th in the ‘Reported Volume’ chart. \n
          In the future, we, Erugo World Coin, will continue to create a reasonable value for Erugo World Coin through a continuous base expansion strategy. \n thank you.\n`,
          type: "nonfiction",
        },
        {
          title: "[Notice] ErugoWorldCoin will be list on Coinsbit",
          date: "2022.03.25",
          summary: `Hello, this is "Erugo World Coin". \n
          Erugo World Coin (EWC) will be listed on Coinsbit on March 29, 2022 at 5:00 PM. \n
          Deposit time: 29th Mar 6pm (KST) \nTrading start: 29th Mar 6pm (KST) \nWithdrawal time: 29th Mar 6pm (KST) \n
          Coinsbit is a global exchange established in 2018 and provides 24/7 multilingual services. Coinsbit currently supports services in over 38 countries. \n We would like to thank those who have been waiting for the news of EWC for a long time, and we will continue to develop and ourselves to it. \n
          thank you. \n`,
          type: "nonfiction",
        },
        {
          title: "[Notice] ErugoWorldCoin will be list on Azbit",
          date: "2022.03.25",
          summary: `Hello, this is "Erugo World Coin". \n
          Erugo World Coin (EWC) will be listed on Azbit on March 31, 2022 at 3:00 AM(KST). \n
          Deposit time: 31th Mar 3am (KST) \nTrading start: 31th Mar 3am (KST) \nWithdrawal time: 31th Mar 3am (KST) \n
          Azbit is an exchange that opened in December 2019 and has grown to be one of the top 50 exchanges in the world. It provides a variety of services such as spot trading, staking, and OTC. \nGoing forward, we will continue to expand our Erugo World Coin according to the public roadmap.\n
          thank you.\n`,
          type: "nonfiction",
        },
        {
          title: "[Notice] ErugoWorldCoin will be list on Okx.",
          date: "2022.04.08",
          summary: `Hello, this is "Erugo World Coin". \n
          Erugo World Coin (EWC) will be listed on Okx on April 11, 2022 at 19:00 PM(KST). \n
          Okx is a cryptocurrency exchange founded in June 2014 in Beijing, China, and is currently based in Hong Kong. \n
          It is ranked 5th in the exchange ranking based on ‘Daily trading volume (24h)’ as of April 2022, and is a large global exchange that can respond to ‘travel rules’, which are currently an issue in Korea. \n
          In the future, we will continue to work hard to provide improved convenience to our holders.\n
          thank you.`,
          type: "nonfiction",
        },
        {
          title: "[Notice] ErugoWorldCoin will be list on Mexc.",
          date: "2022.04.25",
          summary: `Hello, this is "Erugo World Coin". \n
          Erugo World Coin (EWC) will be listed on Mexc on April 26, 2022 at 12:00 PM(KST). \n
          EWC Listing Schedule \n
          Deposit: 18:00, April 25 (KST) \nAnnouncement: 18:00, April 25 (KST) \nListing: 12:00, April 26 (KST) \n 
          Launched in April 2018, MEXC is a centralized cryptocurrency exchange registered in Seychelles. The exchange supports USD, GBP, EUR, AUD and VND deposit and withdrawal. \nIn the future, we will continue to work hard to deliver good news to everyone who is interested in our company. \n
          thank you.​`,
          type: "nonfiction",
        },
      ],
    };
  },
  methods: {
    toggleDetail(a) {
      a.showDetail = !a.showDetail;
    },
    filterList() {
      this.type = event.target.value;
    },
  },
  computed: {
    uniqueItemsList: function () {
      var types = [];
      this.announcement.forEach((item) => {
        if (!types.includes(item.type)) {
          types.push(item.type);
        }
      });
      return types;
    },
  },
  setup() {
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 3,
    });
    const isTogglePage = ref(false);
    const modal = ref(false);
    return {
      pagination,
      columns,
      rows,
      isTogglePage,
      modal,
      pagesNumber: computed(() =>
        Math.ceil(rows.length / pagination.value.rowsPerPage)
      ),
    };
  },
};
</script>
<style lang="scss" scope>
* {
  padding: 0;
  margin: 0;
}
.q-layout {
  min-height: 100% !important;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "S-CoreDream4";
  text-align: center;
  margin: 3vmax auto;
}
.announcement {
  width: 100%;
  position: absolute;
  top: 0;
  background: url("images/announcement_bg.png") no-repeat;
  background-size: 200% 200%;
  animation: gradient 5s ease-in-out infinite;
}
.announcement-title {
  font-family: "S-CoreDream9";
  font-size: 5vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.title > span {
  font-family: "S-CoreDream5";
  font-size: 1vmax;
}
.announcement-list,
.announcement-detail {
  position: relative;
  font-size: 1vmax;
  border-bottom: 1px solid grey;
  width: 70%;
  margin: 0 auto;
  font-family: "S-CoreDream5";
}
.announcement-list {
  padding: 1.5% 0;
}
.announcement-detail {
  font-size: 1.5vmin;
  font-family: "S-CoreDream4";
  line-height: 1.5;
  padding: 2% 0;
  p {
    margin: 0;
  }
}
.font-bold {
  font-family: "S-CoreDream7";
}
ul > li:first-child {
  position: relative;
}
ul > li:first-child::before {
  content: "";
  display: block;
  position: absolute;
  width: 70%;
  border-bottom: 3px solid #6b6b6b;
  left: 50%;
  transform: translateX(-50%);
  bottom: 5%;
}
li {
  border: none;
  text-align: left;
}
.announcement_page {
  margin-right: 5%;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@media screen and (max-width: 1024px) {
  .announcement-title {
    font-size: 5vmax;
    margin-top: 10%;
  }
  .announcement-list,
  .announcement-detail {
    font-size: 1vmax;
    width: 85%;
  }
  ul > li:first-child::before {
    width: 85%;
  }
  .announcement-list {
    padding: 2% 0;
  }
  @media screen and (max-width: 768px) {
    .announcement-title {
      font-size: 4vmax;
      margin-top: 20%;
    }
    .announcement-list {
      padding: 3% 0;
    }
  }
  @media screen and (max-width: 440px) {
    .announcement-title {
      font-size: 4vmax;
      margin-top: 20%;
    }
    .title > span {
      font-size: 1.7vmax;
    }
    .announcement-list,
    .announcement-detail {
      font-size: 1vmax;
      width: 90%;
    }
    #media-list > ul {
      margin-top: 10%;
      margin-bottom: 5%;
    }
    ul > li:first-child::before {
      width: 90%;
    }
  }
}
</style>
