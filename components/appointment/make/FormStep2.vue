<template>
  <section class="justify-content-center">
    <div class="row" >
    <div>
      <label for="classType" class="form-label mb-0">Class Type:</label>
        <input type="text" class="form-control" id="fname" placeholder="Enter full name" >
    </div>
  </div>
  <div class="row">
    <div>
      <label for="classType" class="form-label mb-0">Full name:</label>
        <input type="text" class="form-control" id="fname" placeholder="Enter full name" >
    </div>
  </div>

  <div class="row">
    <div>
      <label for="classType" class="form-label mb-0">Citizen ID / Passport Number:</label>
        <input type="text" class="form-control" id="fname" placeholder="Enter full name" >
    </div>
  </div>



  <div class="mb-3">
                    <label for="location" class="form-label mb-0">Location: </label>
                    <input type="text" class="form-control" id="location" placeholder="Enter your location">
                    <p><a href="" class="text-primary" style="font-size: 12px;">Click here for location on Map</a></p>
                </div>
                <hr>
                <p>Please select your preferred time.</p>
                
                <div class="mb-3">
                    <label for="apptime" class="form-label mb-0">Appointment time:</label>
                    <select class="form-select" id="apptime" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div> 

  </section>



</template>
<script  setup>
import { useAuthStore } from "@/stores/auth";
import { AppointmentsStore } from "@/stores/appointment";
import { useI18n } from "vue-i18n";
import Swal from "sweetalert2";
definePageMeta({
  middleware: "auth", // this should match the name of the file inside the middleware directory
});

const auth = useAuthStore();
const router = useRouter();
const store = AppointmentsStore();
await store.fetchDltType();
await store.History();

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

const { locale, setLocale } = useI18n();
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