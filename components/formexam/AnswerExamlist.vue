<template>
  <div
    class="tab-content tab__content__wrapper with__sidebar__content py-5"
    id="myTabContent"
    v-if="store.exam_complete == 1"
  >
    <div
      class="tab-pane fade"
      v-bind:class="{ active: getisActiveCourse, show: getisActiveCourse }"
      id="projects__one"
      role="tabpanel"
      aria-labelledby="projects__one"
    >
      <div class="row">
        <div class="blogarea__2">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="blog__details__content__wraper">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div>
                      <div class="contact__text">
                        <div class="d-flex justify-content-between flex-wrap">
                          <h2>
                            <i class="icofont-book-alt"></i
                            >{{ $t("page_exam_report") }} :
                           

                            {{
                    locale == "la"
                      ? store.exammain.em_name_lo
                      : store.exammain.em_name_eng
                  }}
                          </h2>
                        </div>
                        <br />

                        <div class="course-info" id="dis-pc">
                          <div class="contact__email d-flex">
                            <div class="icon">
                              <i class="bi bi-check-circle"></i>
                            </div>
                            <p style="font-size: 24px">
                              {{ $t("page_exam_report_score") }}<br />
                              <span style="font-size: 24px; font-weight: bold"
                                >{{ store.ec_score }} ໃນ {{ store.total }}</span
                              >
                              <span
                                v-if="
                                  store.exammain.em_measure <= store.ec_score
                                "
                                style="color: green"
                                class="px-4"
                                >{{ $t("page_type_test_pass") }}</span
                              >
                              <span
                                v-if="
                                  store.exammain.em_measure > store.ec_score
                                "
                                style="color: red"
                                class="px-4"
                                >{{ $t("page_type_test_fail") }}</span
                              >
                            </p>
                          </div>

                          <div class="contact__email d-flex">
                            <div class="icon">
                              <i class="bi bi-alarm-fill"></i>
                            </div>
                            <p style="font-size: 24px">
                              {{ $t("page_exam_report_time_all") }}
                              {{ store.timeall.em_time }} <br />
                              <span style="font-size: 24px"
                                >{{ $t("page_exam_report_time_use") }}
                                {{ store.timeall.er_use_time }}</span
                              >
                            </p>
                          </div>

                          <div class="contact__email d-flex">
                            <div class="icon"><i class="bi bi-boxes"></i></div>
                            <p style="font-size: 24px">
                              {{ $t("page_exam_report_time_create") }} <br />{{
                                store.timeall.er_start_time
                              }}
                              <br />
                            </p>
                          </div>
                        </div>

                        <div class="course-info" id="dis-mobile">
                          <div class="contact__email d-flex">
                            <div class="icon">
                              <i class="bi bi-check-circle"></i>
                            </div>
                            <p style="font-size: 24px">
                              {{ $t("page_exam_report_score") }}<br />
                              <span style="font-size: 24px; font-weight: bold"
                                >{{ store.ec_score }} ໃນ {{ store.total }}</span
                              >
                              <span
                                v-if="
                                  store.exammain.em_measure <= store.ec_score
                                "
                                style="color: green"
                                class="px-4"
                                >{{ $t("page_type_test_pass") }}</span
                              >
                              <span
                                v-if="
                                  store.exammain.em_measure > store.ec_score
                                "
                                style="color: red"
                                class="px-4"
                                >{{ $t("page_type_test_fail") }}</span
                              >
                            </p>
                          </div>
                          <br />
                          <div class="contact__email d-flex">
                            <div class="icon">
                              <i class="bi bi-alarm-fill"></i>
                            </div>
                            <p style="font-size: 24px">
                              {{ $t("page_exam_report_time_all") }}
                              {{ store.timeall.em_time }} <br />
                              <span style="font-size: 24px"
                                >{{ $t("page_exam_report_time_use") }}
                                {{ store.timeall.er_use_time }}</span
                              >
                            </p>
                          </div>
                          <br />
                          <div class="contact__email d-flex">
                            <div class="icon"><i class="bi bi-boxes"></i></div>
                            <p style="font-size: 24px">
                              {{ $t("page_exam_report_time_create") }} <br />{{
                                store.timeall.er_start_time
                              }}
                              <br />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <div class="btnRestart" style="text-align: center">
                      <button
                        type="button"
                        class="btn btn-primary mt-0"
                        @click="openanser()"
                      >
                        <i class="icofont-eye-open"></i>
                        {{ $t("page_exam_report_begin1") }}
                      </button>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="btnRestart" style="text-align: center">
                      <button
                        type="button"
                        class="btn btn-primary mt-0"
                        @click="backToTheort()"
                      >
                        <i class="icofont-list"></i>
                        {{ $t("page_exam_report_begin2") }}
                      </button>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="btnRestart" style="text-align: center">
                      <button
                        type="button"
                        class="btn btn-primary mt-0"
                        @click="reset()"
                      >
                        <i class="icofont-loop"></i>
                        {{ $t("page_exam_report_begin3") }}
                      </button>
                    </div>
                  </div>
                </div>

                <hr />

                <div v-if="store.AnswerOp">
                  <h4 class="mb-5">{{ $t("page_exam_report_ans") }}</h4>
                  <div v-if="store.examination">
                    <div
                      class="aos-init aos-animate"
                      data-aos="fade-up"
                      id="howto"
                    >
                      <h4 class="mb-0">
                        {{ $t("page_exam_report_cho1") }}
                        {{ store.answer_ind + 1 }} :
                        {{ store.examination[store.answer_ind].eq_name_eng }}
                      </h4>

                      <div v-if="store.examination[store.answer_ind].eq_image">
                        <img
                          :src="
                            coverimage(
                              store.examination[store.answer_ind].eq_image
                            )
                          "
                          alt="sidbar"
                          height="200"
                        />
                      </div>
                    </div>

                    <div
                      class="course__details__wraper aos-init aos-animate"
                      data-aos="fade-up"
                      id="answer-container"
                    >
                      <ul
                        v-for="(a, ins) in store.examination[store.answer_ind]
                          .choices"
                        style="border-style: groove"
                        id="answer-card"
                      >
                        <div
                          v-if="
                            a.ec_index ==
                            store.examination[store.answer_ind].eq_answer
                          "
                        >
                          <div
                            class="answer-choice-currect"
                            v-if="
                              a.ec_id ==
                                store.examination[store.answer_ind].ec_id &&
                              a.ec_index ==
                                store.examination[store.answer_ind].eq_answer
                            "
                          >
                            <!-- <li id="card-index">{{ ins + 1 }}.</li> -->
                            <hr />
                            <span class="choice-text"
                              >{{ choices[ins + 1] }}. {{ a.ec_name_lo }}</span
                            >

                            <span v-if="a.ec_image">
                              <img
                                :src="coverimage(a.ec_image)"
                                alt="sidbar"
                                width="80"
                                height="80"
                            /></span>
                            <i class="bi bi-check-circle-fill"></i>
                            <!-- <hr v-if="number % 2 === 0" /> -->
                          </div>
                          <div class="answer-choice-success" v-else>
                            <!-- <li id="card-index">{{ ins + 1 }}.</li> -->
                            <hr />
                            <span class="choice-text"
                              >{{ choices[ins + 1] }}. {{ a.ec_name_lo }}</span
                            >
                            <span v-if="a.ec_image">
                              <img
                                :src="coverimage(a.ec_image)"
                                alt="sidbar"
                                width="80"
                                height="80"
                            /></span>

                            <!-- <hr v-if="number % 2 === 0" /> -->
                          </div>
                        </div>

                        <div v-else>
                          <div
                            class="answer-choice-danger"
                            v-if="
                              a.ec_id ==
                              store.examination[store.answer_ind].ec_id
                            "
                          >
                            <!-- <li id="card-index">{{ ins + 1 }}.</li> -->
                            <hr />
                            <span class="choice-text"
                              >{{ choices[ins + 1] }}. {{ a.ec_name_lo }}</span
                            >
                            <span v-if="a.ec_image">
                              <img
                                :src="coverimage(a.ec_image)"
                                alt="sidbar"
                                width="80"
                                height="80"
                            /></span>
                            <i class="bi bi-x-circle-fill"></i>
                            <!-- <hr v-if="number % 2 === 0" /> -->
                          </div>

                          <div
                            class="answer-choice"
                            v-else="
                              a.ec_id !=
                              store.examination[store.answer_ind].ec_id
                            "
                          >
                            <!-- <li id="card-index">{{ ins + 1 }}.</li> -->
                            <hr />
                            <span class="choice-text"
                              >{{ choices[ins + 1] }}. {{ a.ec_name_lo }}</span
                            >
                            <span v-if="a.ec_image">
                              <img
                                :src="coverimage(a.ec_image)"
                                alt="sidbar"
                                width="80"
                                height="80"
                            /></span>
                            <!-- <hr v-if="number % 2 === 0" /> -->
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>

                  <nav
                    aria-label="Page navigation example"
                    v-if="store.examination.length > 0"
                  >
                    <ul class="pagination" style="justify-content: center">
                      <li class="page-item" @click="ans_prev()">
                        <a
                          class="page-link"
                          href="javascript:void(0);"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">&laquo;&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:void(0);"
                          >{{ store.answer_ind + 1 }} /
                          {{ store.examination.length }}</a
                        >
                      </li>
                      <li class="page-item" @click="ans_next()">
                        <a
                          class="page-link"
                          href="javascript:void(0);"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">&raquo;&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
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

import { ExamTestPostStore } from "@/stores/examtest";
import ApiService from "@/services/api.service";
import { useI18n } from "vue-i18n";
const store = ExamTestPostStore();
const { getisActiveCourse } = storeToRefs(store);

const { Updatechoice } = ExamTestPostStore(); //Action
const { Next } = ExamTestPostStore(); //Action
const { Previod } = ExamTestPostStore(); //Action
const { countDownTimer } = ExamTestPostStore(); //Action
const { locale, setLocale } = useI18n();
const router = useRouter();
store.answer_ind = 0;
const choices = ["", "ກ", "ຂ", "ຄ", "ງ"];

function image(i) {
  let im = ApiService.image(i);
  return im;
}

const choosechoice = async (choices, index) => {
  let upchoice = await Updatechoice(choices);
  await store.fetchExamTest();
  await nextt(index);
};

const example = async () => {
  store.isActive = true;
};

const openanser = async () => {
  store.AnswerOp = !store.AnswerOp;
};

const backToTheort = async () => {
  router.push("/exam");
};

const send = async () => {
  let send = await store.sendexam();
};

const reset = async () => {
  let resetexam = await store.ResetExam();
  if (resetexam == true) {
    await store.fetchExamTest();
  }
};

// const start = async () => {
//   store.isstart = true;
//   await store.fetchExamTest();
// };

const ans_prev = async () => {
  if (store.answer_ind != 0) {
    store.answer_ind -= 1;
  }
};

const ans_next = async () => {
  if (store.answer_ind != store.examination.length - 1) {
    store.answer_ind += 1;
  }
};

const previodd = async (index) => {
  if (store.ind > 0) {
    await Previod(index);
  }
};
const nextt = async (index) => {
  if (store.maxNext > store.ind) {
    await Next(index);
  }
  // await Next(index);
};

function coverimage(i) {
  let im = ApiService.image(i);
  return im;
}

function coverttime(date) {
  const datetime = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDatetime = datetime.toLocaleString(undefined, options);

  return formattedDatetime;
}
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css");
.xt3e5 {
  padding: 30px 50px 10px 10px;
}
#dis-mobile {
  display: none;
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

#choice-card {
  padding: 5px;
  border: unset !important;
}
.choice-text {
  width: 100%;
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
  padding: 10px 15px 10px 15px;
  color: black;
  border: 1px solid #868686;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-success {
  border-radius: 20px;
  padding: 10px 15px 10px 15px;
  color: black;
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
}

.answer-choice-danger {
  background-color: rgb(227, 52, 21);
  border-radius: 20px;
  padding: 10px 15px 10px 15px;
  color: black;
  border: 2px solid rgb(227, 52, 21);
  transition-duration: 0.4s;
  display: flex;
  color: white;
  display: flex;
  justify-content: space-between;
  #card-index {
    color: white;
  }
}
.answer-choice-currect {
  border-radius: 20px;
  padding: 10px 15px 10px 15px;
  background-color: #0fe50f;
  color: rgb(255, 255, 255);
  border: 2px solid #0fe50f;
  transition-duration: 0.4s;
  display: flex;
  display: flex;
  justify-content: space-between;
  #card-index {
    color: white;
  }
}
.answer-choice-currect > i {
  font-size: 125%;
  margin-left: 15px;
}
.answer-choice-danger > i {
  font-size: 125%;
  margin-left: 15px;
}

#answer-card {
  padding: 5px;
  border: unset !important;
}
#card-index {
  margin-right: 10px;
}
.course-info {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}
.course-info > .contact__email {
  padding: 10px;
  padding-left: 20px;
  min-height: 100px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 0.2px rgb(190, 190, 190);
  gap: 20px;
}
.contact__text {
  margin-bottom: 50px;
}
.contact__email > .icon {
  font-size: 50px;
  color: aqua;
}
@media (min-width: 1080px) {
  .course-info {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1080px) {
  .course-info {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .course-info {
    grid-template-columns: repeat(1, 1fr);
  }
  #dis-pc {
    display: none;
  }
  #dis-mobile {
    display: block;
  }
}

@media (max-width: 500px) {
  #dis-mobile {
    display: block;
  }
}

@media (max-width: 410px) {
  .btnRestart {
    width: 100%;
  }
  #dis-mobile {
    display: block;
  }
  #dis-pc {
    display: none;
  }
}
#howto {
  border-radius: 20px;
  padding: 10px 10px 15px 15px;
  background-color: white;
  color: black;
  border: 2px solid #040604;
  transition-duration: 0.4s;
  /* display: flex; */
  width: 100%;
}
</style>
