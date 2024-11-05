<template>
    <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <h3 class="heading">Make Appointments</h3>
              </div>
              <div class="breadcrumb__inner">
                <ul>
                  <li><a href="#">{{ $t("home") }}</a></li>
                  <li>{{ $t("page_appoint") }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-3 py-md-4 py-lg-5 appcontent">
     <FormStep1></FormStep1>
    </div>
    <div class="container">
        <p>Note: For information about standard procedure to get driving license, please click here: <span><a href="" class="text-primary">Driving license prodedure</a></span></p>
    </div>
</template>
<script  setup>
import { useAuthStore } from '@/stores/auth';
import FormStep1 from '@/components/appointment/make/FormStep1.vue';
import { AppointmentsStore } from '@/stores/appointment';


   definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})

const auth = useAuthStore();
  const router = useRouter();
  const store = AppointmentsStore();
await store.fetchDltType()
store.user_id = auth.user_id;

  if(auth.formdetail.verify_account == 'system_active'){
    router.push('/appointment/make-form');
   }else {
    router.push('/appointment/make');
   }

</script>
<style>
    .appcontent{
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
</style>