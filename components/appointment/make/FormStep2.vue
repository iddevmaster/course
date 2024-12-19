<template>
  <section class="justify-content-center">
    <div class="row" >
    <div>
      <label for="classType" class="form-label mb-0">Class Type:</label>
      <select 
          class="form-select"
          id="classType"
          aria-label="Default select example"
          v-model="store.formselectapp.dlt_code" disabled 
        >
          <option selected disabled value="">
            {{ $t("page_appoint_type_label_select_dlt") }}
          </option>
          <option v-for="(item, index) in store.dlt" :value="item.dlt_code">
            {{ item.dlt_code }} :
            {{ locale == "la" ? item.dlt_name_lo : item.dlt_name_eng }}
          </option>
        </select>
    </div>
  </div>
  <div class="row">
    <div>
      <label for="classType" class="form-label mb-0">Full name:</label>
        <input type="text" class="form-control" id="fname" placeholder="Enter full name" v-model="store.formselectapp.user_full_name"  disabled>
    </div>
  </div>

  <div class="row">
    <div>
      <label for="classType" class="form-label mb-0">Citizen ID / Passport Number:</label>
        <input type="text" class="form-control" id="fname" placeholder=" Passport Number"  v-model="store.formselectapp.identification_number"  disabled>
    </div>
  </div>



  <div class="mb-3">
                    <label for="location" class="form-label mb-0">Location: </label>
                    <select class="form-select" id="apptime" aria-label="Default select example"  v-model="store.formselectapp.group_id"  @change="changeGroupId($event)">
                      <option selected disabled value="">
            {{ $t("page_appoint_type_label_select_dlt") }}
          </option>
          <option v-for="(item, index) in store.group" :value="item.group_id">
           {{ item.name }} - {{ item.province_name }}

          </option>
                    </select>
                    <p><a href="" class="text-primary" style="font-size: 12px;">Click here for location on Map</a></p>
                </div>
                <hr>
                <p>Please select your preferred time.</p>
               
                <div class="mb-3">
                    <label for="apptime" class="form-label mb-0">Appointment time:</label>
                    <select class="form-select" id="apptime" aria-label="Default select example"  v-model="store.events" >
                      <option selected disabled value="">
            {{ $t("page_appoint_type_label_select_dlt") }}
          </option>
          <option v-for="(item, index) in store.event" :value="item">
            {{format(item.ap_date_first)}} {{formatty(item.type)}}, Class {{item.dlt_code}} . Avalable: {{calcu(item.ap_quota,item.available)}} seats

          </option>
                    </select>
                </div> 


                <div class="d-flex gap-3 justify-content-center">
                     <button class="btn btn-primary" @click="BackApp()"><i class="icofont-double-left"></i> Back </button>
      <button class="btn btn-success" @click="SaveApp()">
        Next <i class="icofont-double-right"></i>
      </button>

      <!-- <button class="btn btn-success">Submit <i class="icofont-double-right"></i></button> -->
    </div>
  </section>



</template>
<script  setup>
import moment from "moment";
import { useAuthStore } from "@/stores/auth";
import { AppointmentsStore } from "@/stores/appointment";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2";


const auth = useAuthStore();
const router = useRouter();
const store = AppointmentsStore();
await store.fetchDltType();
await store.History();


const changeGroupId = async (item) => {
store.formselectapp.group_id = item.target.value
store.events = ""
await store.fetchAppointmentNewlist();
};


const RecheckApp = async () => {
  if (store.formselectapp.dlt_code == "") {
    await Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Select Dlt Type!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
 await store.checkleaning();


 if(store.leaning === true){
  //  router.push("/appointment/make-form-2");
 }



};

const Hide = async () => {
store.ModalRecheckApp = false;
};






const BackApp = async () => {
store.IsStep1 = true
store.IsStep2 = false
};
const SaveApp = async () => {

  if (store.formselectapp.group_id == "") {
    await Swal.fire({
      position: "center",
      icon: "error",
      title: "Select Location!",
      showConfirmButton: false,
      timer: 1500,
    });
    return false
  }

  if (store.events == "") {
    await Swal.fire({
      position: "center",
      icon: "error",
      title: "Select Appointment time!",
      showConfirmButton: false,
      timer: 1500,
    });
    return false
  }
let save = await store.saveAppointmentNew()
console.log(save);
if(save.status == 200){
  // await Swal.fire({
  //     position: "top-end",
  //     icon: "error",
  //     title: "Select Appointment time!",
  //     showConfirmButton: false,
  //     timer: 1500,
  //   });

    await Swal.fire({
      position: "center",
      icon: "success",
      title: "Complate!",
      showConfirmButton: false,
      timer: 1500,
    });

 await router.push('/appointmentlist');
}
if(save.status == 201){
  await Swal.fire({
      position: "center",
      icon: "error",
      title: "ລົ້ມເຫລວໃນການບັນທຶກຂໍ້ມູນ ມີຢູ່ແລ້ວ!",
      showConfirmButton: false,
      timer: 1500,
    });
}
if(save.status == 202){
  await Swal.fire({
      position: "center",
      icon: "error",
      title: "QUATA ເຕັມ!",
      showConfirmButton: false,
      timer: 1500,
    });
}
};

const { locale, setLocale } = useI18n();


const format = (time) => {
  return moment(time).format("DD/MM/YYYY");
};




const formatty = (i) => {
  if(i == 1){
    return '08:00';
  }else {
    return '16:00';
  }

};

const calcu = (i,x) => {

let a = i-x;
return a;
};

</script>
<style  scoped>


.appcontent {
  min-height: 400px;
}

.make-app-form {
  width: 50%;
}
@media screen and (max-width: 1199px) {
  .make-app-form {
    width: 70%;
  }
}
@media screen and (max-width: 991px) {
  .make-app-form {
    width: 80%;
  }
}
@media screen and (max-width: 767px) {
  .make-app-form {
    width: 100%;
  }
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

</style>