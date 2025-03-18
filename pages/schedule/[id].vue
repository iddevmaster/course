<script setup lang="ts">
definePageMeta({
  layout: "blank"
});
import ApiService from "@/services/api.service";
import { NotifiStore } from '@/stores/notification';
import { useRoute } from 'vue-router';
const store = NotifiStore();
const route = useRoute();
const id = route.params.id; // Accessing dynamic route parameter

store.ap_number = id
await store.fetchDltType()
await store.fetchAppointdata()

function coverimage(i) {
  let im = ApiService.image(i);
  return im;
}

const coverdlt = (code) => {
  
  let dt = store.dlt.find((item) => item.dlt_code == code);
  console.log(dt);
  return dt;
};

</script>

<template>
  <div class="unauthorized-container" v-if="store.data_app == ''">
    <h1>ລາຍລະອຽດນັດ
    </h1>
    <p>No Data</p>
  </div>

  <div class="container">
    <h1>ລາຍລະອຽດນັດ
    </h1>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ຂໍ້ມູນ</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{ $t('fname') }} - {{ $t('lname') }}</th>
      <td>{{ store.data_app.user_firstname }} {{ store.data_app.user_lastname }}</td>
     
    </tr>
    <tr>
      <th scope="row">{{ $t('tel') }}</th>
      <td>{{ store.data_app.user_phone }}</td>
     
    </tr>
    <tr>
      <th scope="row">Appointment ID  </th>
      <td colspan="2">{{ store.data_app.ap_number }}</td>
    </tr>
    <tr>
      <th scope="row">{{ $t('page_profile_type_dlt') }}</th>
      <td colspan="2">{{ coverdlt(store.data_app.dlt_types).dlt_name_lo }}</td>
    </tr>
    <tr>
      <th scope="row">{{ $t('page_appoint') }}</th>
      <td colspan="2">{{ store.data_app.ap_date_start }} - {{ store.data_app.today }}</td>
    </tr>

    <tr>
      <th scope="row">ສະຖານທີ່</th>
      <td colspan="2">{{ store.data_app.address }}</td>
    </tr>
    <tr>
 
      <td colspan="2" style="text-align: center;">
        <img :src="coverimage(store.data_app.real_image)" width="200" alt="blog">
      </td>
    </tr>
  </tbody>
</table>
</div>

  
</template>

<style scoped>
.unauthorized-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

</style>