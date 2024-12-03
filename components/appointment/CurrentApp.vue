<template>
  <div v-if="store.reservefisrt">
    <section
      class="px-4 py-3 border my-4"
      v-for="(item, index) in store.reservefisrt"
      :key="index"
    >
      <div class="row">
        <div class="col-12">
          <p class="mb-0">
            <b> {{ format(item.ap_date_first) }} {{ item.time }}   </b>
          </p>
          <p class="mb-0">
            <b> Class {{ item.dlt_code }} -</b> 
            {{ locale == "la" ? coverdlt(item.dlt_code).dlt_description_loas : coverdlt(item.dlt_code).dlt_description_english }}
          </p>
          <p class="mb-0">
            {{ $t("page_appoint_location") }} : {{item.group}} -  {{item.province_name}}
          </p>

          <p class="mb-0">
            <b> Appointment ID : {{ item.ap_number }} </b>
          </p>

          <p class="mb-0">
            <b
              >{{ auth.formuser.user_prefrix }} {{ auth.formuser.user_firstname }} {{ auth.formuser.user_lastname }}
           </b
            >
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-9">
       
      
        </div>
        <div class="col-3">
          <qrcode-vue
      :value="text"
      :size="size"
      :level="errorCorrectionLevel"
      :bg-color="bgColor"
      :fg-color="fgColor"
    />
      
        </div>
      </div>
      <p class="pt-3" style="font-size: 0.8rem">
        {{ $t("page_appoint_note") }},
      </p>
    </section>
  </div>
  <div class="col-12 col-md-6 py-2" v-if="store.reservefisrt">
              <button
                class="btn btn-danger"
                style="width: 50%; border-radius: 0px" @click="CancelApp()"
              >
              {{ $t("cancel_app") }}
              </button>
    </div>



         <div class="modal" v-if="store.popupcancelapp">
    <div class="modal-content" id="deleteConformationLabel">
      <div class="modal-header">
        
        <h5 class="modal-title" id="exampleModalLabel">ຍົກເລີກການນັດໝາຍ
?</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="">
         ຍົກເລີກການນັດໝາຍ
?
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal" @click="closeModal">
          ປິດ
        </button>
        <button type="button" class="btn btn-danger" data-remove="task" @click="confirm">
          ຢືນຢັນ
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from "@/stores/auth"; // import the auth store we just created
import { storeToRefs } from "pinia";
import { defineComponent } from "vue";
import { AppointmentsStore } from "@/stores/appointment";

import { useRoute } from "vue-router";
import QrcodeVue from 'qrcode.vue'
import moment from "moment";
import Swal from "sweetalert2";
import { useI18n } from "vue-i18n";
const { locale, setLocale } = useI18n();

const auth = useAuthStore();
const store = AppointmentsStore();
const route = useRoute();


const text = ref('https://example.com') // QR code content
const size = ref(200) // QR code size in pixels
const errorCorrectionLevel = ref('H') // Error correction level ('L', 'M', 'Q', 'H')
const bgColor = ref('#ffffff') // Background color
const fgColor = ref('#000000') // Foreground color


const CancelApp = async () => {
store.popupcancelapp = true;
//await store.CancelAp();
}

const closeModal = async () => {
store.popupcancelapp = false;
//await store.CancelAp();
}


const confirm = async () => {
store.popupcancelapp = false;
await store.CancelAp();

await store.fetchApppointRes();
await store.fetchApppointResCalulat();
}


const dayforma = (day) => {
  return moment(day).format("DD/MM/yyyy HH:mm");
};

const coverdlt = (code) => {
  let dt = store.dlt.find((item) => item.dlt_code == code);
  return dt;
};

const format = (time) => {
  return moment(time).format("DD/MM/YYYY");
};

const formatty = (i) => {
  if (i == 1) {
    return "08:00";
  } else {
    return "16:00";
  }
};

const calcu = (i, x) => {
  let a = i - x;
  return a;
};
</script>
<style scoped>
button {
  margin-top: 10px;
}

.nav-search {
  background-color: rgb(242 39 126);
}

.imgcard {
  width: 120px;
  height: 150px;
}
.imgcard > img {
  width: 120px;
  border-radius: 5px;
}

.btnContainer button {
  margin-right: 10px;
  width: 100px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  width: 50%;
}

.tooltip-container {
  position: relative;
}

.tooltip-trigger {
  cursor: pointer;
  display: inline-block;
}

.tooltip {
  position: absolute;
  background-color: #333;
  min-width: 300px;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s;
  pointer-events: none;
}

.tooltip-container:hover .tooltip {
  opacity: 1;
}

.qr-container {
  /* Custom styling for the container */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 5px solid #007bff; /* Blue border */
  border-radius: 10px;
  background-color: #f9f9f9;
}

.qr-container canvas {
  /* Additional styling for the QR code canvas */
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>