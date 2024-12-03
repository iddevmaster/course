<template>
    <div style="background-color: var(--dotColor);">
      <div class="container py-3">
        <div class="row">
          <div class="col-xl-12">
            <div class="breadcrumb__content__wraper" data-aos="fade-up">
              <div class="breadcrumb__title">
                <h3 class="heading">Exam Appointments</h3>
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
      <header class="header text-center">
        <h5>Your current appointment to take driving exam:</h5>
      </header>
      <article class="text-center">
        <section>
          <p>You do not have any appointment to take driving exam yet.</p>
        </section>
        <section>
          <button class="btn btn-primary" @click="goToMenu()">Add New Appointment</button>
        </section>
      </article>
    </div>
    <div class="container">
        <p>Note: For information about standard procedure to get driving license, please click here: <span><a href="" class="text-primary">Driving license prodedure</a></span></p>
    </div>
</template>

<script  setup>
import { useAuthStore } from '@/stores/auth';
   definePageMeta({
  middleware: 'auth' // this should match the name of the file inside the middleware directory 
})

const auth = useAuthStore();
  const router = useRouter();

 await auth.getProfile() 
 
  const goToMenu = async () => {

   if(auth.formdetail.verify_account == 'system_active'){
    router.push('/appointment/make-form');
   }else {
    router.push('/appointment/make');
   }
  //  router.push(meun);
  };
</script>
<style>
  .appcontent{
    min-height: 400px;
  }
</style>