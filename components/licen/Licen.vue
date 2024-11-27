<template>
  <div class="container">
    <div class="row">
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
        <div class="table-responsive shadow-sm rounded">
          <table class="table table-hover mb-0" v-if="store.dlt_all.length > 0">
            <thead class="table-light">
              <tr>
                <th scope="col" style="text-align: center">#</th>
                <th scope="col" style="text-align: center">
                  {{ $t("result_score") }}
                </th>
                <th scope="col" style="text-align: center">
                  {{ $t("result_type") }}
                </th>

                <th scope="col" style="text-align: center">
                  {{ $t("result_details") }}
                </th>
                <th scope="col" style="text-align: center">
                  {{ $t("result_time") }}
                </th>
                <th scope="col" style="text-align: center">ສະຖານທີ່</th>
                <th scope="col" style="text-align: center">
                  {{ $t("result_status") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in store.dlt_all">
                <th style="text-align: center">
                  {{ index + 1 }}
                </th>
                <th style="text-align: center">
                  {{ item }}
                </th>
              </tr>
            </tbody>
          </table>

          <div v-else>
            <div class="border p-3" style="text-align: center">
              {{ $t("page_no_data") }}
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-12 col-lg-12 col-md-12 col-12" v-for="(item, index) in store.dlt_all">
        <div
          class="tab-content tab__content__wrapper with__sidebar__content"
          id="myTabContent"
        >
         
          <div
            class="gridarea__wraper gridarea__wraper__1 gridarea__course__list"
            data-aos="fade-up"
          >
            <div class="gridarea__img">
              <span class="cursor-pointer"
                ><img

                  :src="coverimage(item.front_img)"
                
                  alt="grid"
              /></span>
            </div>
            <div class="gridarea__content">
              <div class="gridarea__heading">
            <p class="fw-bold mb-0">ເລກທີ: {{item.number_licen}}</p>
              </div>
              <div class="gridarea__heading">
                <p class="fw-bold mb-0">ອອກຊື່: {{item.dlt}}</p>
              </div>
              <div class="gridarea__heading">
                <p class="fw-bold mb-0">ປະເພດອະນຸຍາດ:  {{item.dlt}}</p>
              </div>
            </div>
                    <div class="gridarea__content">
              <div class="gridarea__heading">
            <p class="fw-bold mb-0">ໝົດອາຍຸ: {{item.expiry_date}}</p>
              </div>
              <div class="gridarea__heading">
                <p class="fw-bold mb-0">ອອກທ:{{item.etc}}</p>
              </div>
           
            </div>

                    <div class="gridarea__content">
              <div class="gridarea__heading">
          
            <span class="fw-bold mb-0">ສະຖານະ:</span>   <span style="color:red"> ໝົດອາຍຸ</span>
              </div>
           
            </div>
          </div>
        
        </div>
     
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";

import { DltStore } from "@/stores/dlt";
import ApiService from "@/services/api.service";
import { Bar } from "vue-chartjs";
import moment from "moment";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const store = DltStore();

const router = useRouter();

const del = async () => {};

const format = (item) => {
  return moment(item).format("YYYY-MM-DD HH:SS");
};

const covertdtl = (x) => {
  let item = storeapp.dlt.filter((o) => o.dlt_code == x);
  return item[0];
};


function coverimage(i) {
  let im = ApiService.image(i);
  return im;
}
</script>

<style>
.xt3e5 {
  padding: 30px 50px 10px 10px;
}

.hover-button:hover {
  border: 2px solid #b217b4;
  padding: 5px 40px;
}

.sec-l {
  border-style: groove !important;
  border-color: red !important;
  #choice {
    background-color: #4caf50;
    color: white;
    #card-index {
      color: white;
    }
  }
}

.sec-choice {
  border-style: groove !important;
  border-color: red !important;

  #answer {
    background-color: #4caf50;
    color: white;
    #card-index {
      color: white;
    }
  }
}
#answer {
  background-color: #4caf50;
}

.exma {
  background-color: #5f2ded;
  color: white;
}
.send {
  background-color: #e06512;
  color: white;
}
#choice-container {
  /* border: 2px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
#choice {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  transition-duration: 0.4s;
  display: flex;
}
#choice:hover {
  background-color: #4caf50; /* Green */
  color: white;
  #card-index {
    color: white;
  }
}
#choice-card {
  padding: 5px;
  border: unset !important;
}

#answer {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  background-color: white;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice {
  background-color: rgb(247, 247, 247);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-success {
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-danger {
  background-color: rgb(227, 52, 21);
  border-radius: 20px;
  padding: 10px 10px 0px 15px;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  display: flex;
}

#answer-card {
  padding: 5px;
  border: unset !important;
}
#card-index {
  margin-right: 10px;
}
</style>
