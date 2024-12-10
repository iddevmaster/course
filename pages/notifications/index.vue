




<template>
  <div>
  

    <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                  <span style="font-size: 24px;font-weight: 400;"> {{ $t("noti_all") }} </span>
              </div>
              
              <div class="breadcrumb__inner">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

 <div class="coursearea sp_top_100 sp_bottom_100">
          <div class="container">
              <div class="row">
                  <div class="col-xl-12">
                    <Notifications></Notifications>
                  </div>
              </div>
              <div class="row">
                  <div class="col-xl-12">
                    <NotificationsNews></NotificationsNews>
                  </div>
              </div>
          </div>
      </div>
  </div>


</template>
<script lang="ts" setup>
 definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})

import Notifications from '@/components/noti/Noti.vue';
import NotificationsNews from '@/components/noti/NotiNew.vue';
import { useAuthStore } from '@/stores/auth'; // import the auth store we just created
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { NotifiStore } from '@/stores/notification';
import { useRoute } from "vue-router";

const auth = useAuthStore()
const route = useRoute();
const store = NotifiStore()

store.user_id = auth.user_id;


</script>
 <style scoped>
  
 
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
  
  button {
    margin-top: 10px;
  }
  
  </style>