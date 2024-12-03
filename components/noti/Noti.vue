<template>
      <div class="container">
 

    <div class="row">
      <div class="gridarea__heading">
        <h5> ການແຈ້ງເຕືອນ ທັງໝົດ</h5>
      </div>
      <div
        class="col-xl-12 col-lg-12 col-md-12 col-12"
      
      >
        <div
          class="tab-content tab__content__wrapper with__sidebar__content"
          id="myTabContent"
        >
          <div v-for="index in 10" :key="index"
            class="gridarea__wraper gridarea__wraper__1 gridarea__course__list"
            data-aos="fade-up" style="
    margin-bottom: 5px;"

          >
            <div class="gridarea__img">
              <span class="cursor-pointer"
                >
                <img src="../../assets/img/brand/brand_3.png" alt="blog"  >
            
            </span>
            </div>
            <div class="gridarea__content">
              <div class="gridarea__heading">
                <p class="fw-bold mb-0">ໃບຂັບຂີ່ປະເພດ AB ຂອງທ່ານຈະໝົດອາຍຸ ໃນວັນທີ 30/04/2024</p>
              </div>
              <div class="gridarea__heading">
                <p class="fw-bold mb-0">ກະລຸນາ ຕິດຕໍ່ຫາກອງຄຸ້ມຄອງພາຫະນະ ແລະ ການຂັບຂີ່ແຂວງ ເພື່ອຕໍ່ອາຍຸໃບຂັບຂີ່</p>
              </div>
             
            </div>
            <div class="gridarea__content_footer">
              <div class="gridarea__heading">
                <p class="fw-bold mb-0">01/04/2024 08:00:01</p>
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

import { ResultStore } from "@/stores/result";
import ApiService from "@/services/api.service";
import { Bar } from "vue-chartjs";
import moment from "moment";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const store = ResultStore();
const storeapp = AppointmentsStore();

const router = useRouter();

const del = async () => {};

const format = (item) => {
  return moment(item).format("YYYY-MM-DD HH:SS");
};

const covertdtl = (x) => {
  let item = storeapp.dlt.filter((o) => o.dlt_code == x);
  return item[0];
};
</script>

<style scoped>



@media only screen and (min-device-width: 768px){
  .gridarea__wraper.gridarea__course__list .gridarea__img {
    margin-bottom: 0;
    width: 100% !important;

}

}

  @media only screen and (min-device-width: 320px){
    .gridarea__wraper.gridarea__course__list .gridarea__img {
    margin-bottom: 0;
    width: 100% !important;

}

  }


  @media only screen and (min-width : 992px) {

}

/* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {

  .gridarea__wraper.gridarea__course__list .gridarea__img {
    margin-bottom: 0;
    width: 20% !important;
}

}

</style>
