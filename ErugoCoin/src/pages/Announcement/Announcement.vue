<template>
  <div>
    <Header />
    <q-layout class="announcement">
      <div class="announcement-title">ANNOUNCEMENT</div>
      <div class="q-pa-md announcement-table">
        <!-- 테이블 -->
        <table class="table" style="border-collapse: collapse">
          <thead>
            <tr style="width: 10%; height: 5vmax; font-size: 1.2vmax">
              <th>NO</th>

              <th>Notice</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody v-for="(a, i) in 3" :key="i">
            <tr
              data-toggle="collapse"
              :data-target="`#tr${i + 1}`"
              class="accordion-toggle"
            >
              <td>{{ i }}</td>

              <td>{{ announcement[0].notice }}</td>
              <td>{{ announcement[0].date }}</td>
            </tr>
            <tr>
              <td colspan="6" class="hiddenRow">
                <div class="accordian-body collapse" :id="`tr${i + 1}`">
                  {{ announcement[0].content }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- <q-table
          :rows="rows"
          :columns="columns"
          row-key="name"
          card-class="bg-transparent"
          v-model:pagination="pagination"
          hide-pagination
          binary-state-sort
          flat
          @click="modal = !modal"
        >
        </q-table>


        <q-card class="modal-card" v-show="modal">
          <q-card-section style="display: flex">
            <q-card-actions class="modal-card-header">
              <q-btn
                flat
                label="뒤로가기"
                color="secondary"
                v-close-popup
                @click="modal = !modal"
              />
            </q-card-actions>
            <div class="text-h6" style="width: 90%; text-align: center">
              {{ rows[0].notice }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 30vh" class="scroll">
            <p v-for="n in 15" :key="n">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
              perferendis totam, ea at omnis vel numquam exercitationem aut,
              natus minima, porro labore.
            </p>
          </q-card-section>

          <q-separator />
        </q-card> -->

        <div class="row q-pa-md flex flex-center">
          <q-pagination
            class="announcement_page"
            v-model="pagination.page"
            color="grey-6"
            active-color="black"
            :max="pagesNumber"
            size="1.5vmax"
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
  {
    no: 4,
    notice: "I'm a really great person.4",
    date: date,
  },
  {
    no: 5,
    notice: "I'm a really great person.5",
    date: date,
  },
  {
    no: 6,
    notice: "I'm a really great person.6",
    date: date,
  },
  {
    no: 7,
    notice: "I'm a really great person.7",
    date: date,
  },
  {
    no: 8,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 9,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 10,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 11,
    notice: "I'm a really great person.",
    date: date,
  },
];
export default {
  data() {
    return {
      announcement: [
        {
          notice: "I'm a really greate person",
          date: date,
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, corporis veritatis. Minus sed iste ipsam vel eius placeat fugiat perferendis ullam sapiente. Aliquam optio qui quia ut nesciunt perspiciatis sint tenetur minus accusamus consequatur. Placeat vitae, et iusto animi debitis maxime dolore deleniti beatae laboriosam, dicta harum voluptate ullam quibusdam perspiciatis corrupti autem minus! Est itaque reprehenderit, voluptas odit magnam suscipit cumque? Excepturi consequuntur quia inventore voluptas aliquam deleniti? Error, provident. Placeat harum saepe quis pariatur! Aliquid repudiandae autem libero quaerat, harum, vel ex omnis unde nisi ad assumenda deleniti placeat consequatur recusandae impedit quis ratione distinctio ipsa. Excepturi, autem.",
        },
      ],
    };
  },
  components: { Header, PageController },
  mounted() {
    $(".accordian-body").on("show.bs.collapse", function () {
      $(this)
        .closest("table")
        .find(".collapse.in")
        .not(this)
        .collapse("toggle");
    });
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
.table tr {
  cursor: pointer;
}
.announcement {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("images/announcement_bg.png") 100% 100% no-repeat;
  animation: gradient 4s ease-in-out infinite;
}
.announcement-title {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.q-table th {
  font-size: 1.4vw;
  border-bottom: 5px solid grey;
  padding-bottom: 0.5%;
  position: relative;
}
.q-table th.sortable {
  padding: 2vw;
}
.q-table th::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -8%;
  width: 100%;
  border-bottom: 3px solid #6b6b6b;
  margin-bottom: 1vw;
}
.q-icon > img {
  position: absolute;
  width: 5vmin;
  height: 5vmin;
}
.announcement-table {
  position: relative;
  margin: 1% 10%;
}
.announcement_page {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.modal-card {
  width: 100%;
  max-width: 80vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  background-color: rgba(255, 255, 255);
  .modal-card-header {
    width: 10%;
    text-align: center;
    padding: 0;
  }
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
  .q-table {
    tbody tr {
      height: 10vmax;
    }
    th {
      font-size: 3vmin;
    }
    td::after {
      font-size: 5vmin;
    }
  }
  .announcement-table {
    margin: 1% 5%;
  }
  .announcement_page {
    bottom: -10%;
  }
  @media screen and (max-width: 768px) {
    .announcement-title {
      font-size: 4vmax;
      margin-top: 20%;
    }
    .announcement-table {
      margin: 10% 2%;
    }
    .announcement_page {
      bottom: 0;
    }
  }
  @media screen and (max-width: 440px) {
    .announcement-title {
      font-size: 3vmax;
      margin-top: 20%;
    }
  }
}
</style>
