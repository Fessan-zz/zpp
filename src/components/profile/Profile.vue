<template>
  <div class="profile">
    <div class="container profile__wrapper">
      <nav-bar />
      <section class="profile__main">
        <div class="figure"></div>
        <div class="container profie__main_h1">
          <div class="row justify-content-center">
            <h2 class="col-lg-5 my-4">ЛИЧНЫЙ КАБИНЕТ</h2>
          </div>
          <div class="container">
            <div class="row">

<!-- Здесь анкета --> 
              <Anketa />
              <div class="col-lg-3 profile__main_water mb-5">
                <h3>Трекер воды</h3>
                <div class="profile__main_water_cont ml-5">
                  <div class="profile__water_items d-flex flex-wrap">
                    <div class="ml-2 mt-2">
                      <img
                        src="../../assets/img/blueWater.png"
                        alt="water"
                        class="profile__water_item_b mb-2"
                      />
                      <br />
                      <span>250 мл</span>
                    </div>
                    <div class="ml-2 mt-2">
                      <img
                        src="../../assets/img/blueWater.png"
                        alt="water"
                        class="profile__water_item_b mb-2"
                      />
                      <br />
                      <span>250 мл</span>
                    </div>
                    <div class="ml-2 mt-2">
                      <img
                        src="../../assets/img/blueWater.png"
                        alt="water"
                        class="profile__water_item_b mb-2"
                      />
                      <br />
                      <span>250 мл</span>
                    </div>
                    <div class="ml-2 mt-2">
                      <img
                        src="../../assets/img/blueWater.png"
                        alt="water"
                        class="profile__water_item_b mb-2"
                      />
                      <br />
                      <span>250 мл</span>
                    </div>
                    <div class="ml-2 mt-2">
                      <img
                        src="../../assets/img/water.png"
                        alt="water"
                        class="profile__water_item_b mb-2"
                      />
                      <br />
                      <span>250 мл</span>
                    </div>
                    <div class="ml-2 mt-2">
                      <img
                        src="../../assets/img/water.png"
                        alt="water"
                        class="profile__water_item_b mb-2"
                      />
                      <br />
                      <span>250 мл</span>
                    </div>
                    <div class="ml-2 mt-2 mb-4">
                      <img
                        src="../../assets/img/water.png"
                        alt="water"
                        class="profile__water_item_b mb-2"
                      />
                      <br />
                      <span>250 мл</span>
                    </div>
                    <div class="ml-2 mt-2 mb-4">
                      <img
                        src="../../assets/img/water.png"
                        alt="water"
                        class="profile__water_item_b mb-2"
                      />
                      <br />
                      <span>250 мл</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-4 profile__main_tracker ml-3 mb-5">
                <div class="m-4">
                  <div
                    class="profile__main_tracker_items d-flex justify-content-between mt-3"
                  >
                    <div
                      class="profile__main_tracker_item d-flex flex-column justify-content-center align-items-center"
                    >
                      <span class="profile__main_tracker_item_span"
                        >Набрано</span
                      >
                      <span class="profile__main_tracker_item_num">545</span>
                      <span class="profile__main_tracker_item_kkl">Ккал</span>
                    </div>
                    <div
                      class="profile__main_tracker_item d-flex flex-column justify-content-center align-items-center"
                    >
                      <span class="profile__main_tracker_item_span"
                        >Осталось</span
                      >
                      <span class="profile__main_tracker_item_num red">45</span>
                      <span class="profile__main_tracker_item_kkl">Ккал</span>
                    </div>
                    <div
                      class="profile__main_tracker_item d-flex flex-column justify-content-center align-items-center"
                    >
                      <span class="profile__main_tracker_item_span"
                        >Сброшено</span
                      >
                      <span class="profile__main_tracker_item_num">545</span>
                      <span class="profile__main_tracker_item_kkl">Ккал</span>
                    </div>
                  </div>
                  <div
                    class="profile__main_tracker_items d-flex justify-content-between mt-3"
                  >
                    <div
                      class="profile__main_tracker_item d-flex flex-column justify-content-center align-items-center"
                    >
                      <span class="profile__main_tracker_item_span">Белки</span>
                      <span class="profile__main_tracker_item_num"
                        >70
                        <span class="profile__main_tracker_item_kkl">гр</span>
                      </span>
                    </div>
                    <div
                      class="profile__main_tracker_item d-flex flex-column justify-content-center align-items-center"
                    >
                      <span class="profile__main_tracker_item_span">Жиры</span>
                      <span class="profile__main_tracker_item_num"
                        >70
                        <span class="profile__main_tracker_item_kkl">гр</span>
                      </span>
                    </div>
                    <div
                      class="profile__main_tracker_item d-flex flex-column justify-content-center align-items-center"
                    >
                      <span class="profile__main_tracker_item_span"
                        >Углеводы</span
                      >
                      <span class="profile__main_tracker_item_num"
                        >70
                        <span class="profile__main_tracker_item_kkl">гр</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7 profile__main_eat ml-5 mb-5">
                <span
                  class="profile__main_anketa_first ml-2 d-inline-block mt-4"
                  >Завтрак:</span
                >
                <span
                  class="profile__main__anketa_last ml-2 d-inline-block mt-4"
                  >Яйца вареные, молоко сгущеное</span
                >
                <br />
                <span
                  class="profile__main_anketa_first ml-2 d-inline-block mt-4"
                  >Обед:</span
                >
                <span
                  class="profile__main__anketa_last ml-2 d-inline-block mt-4"
                  >Рог коня, хвост гуся</span
                >
                <br />
                <span
                  class="profile__main_anketa_first ml-2 d-inline-block mt-4"
                  >Ужин:</span
                >
                <button type="button" class="profile__main_eat_btn ml-3">
                  <img src="../../assets/img/plus.png" alt="btn" />
                </button>
                <br />
                <span
                  class="profile__main_anketa_first ml-2 d-inline-block mt-4"
                  >Перекус:</span
                >
                <button type="button" class="profile__main_eat_btn ml-3">
                  <img src="../../assets/img/plus.png" alt="btn" />
                </button>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- <AnketaForm
      v-if="showAnket"
      @complitAnket="complit"
      @close="showAnket = false"
    /> -->
  </div>
</template>

<script>
import NavBar from './NavBarProfile.vue'
import Anketa from './Anketa.vue'

export default {
  components: { NavBar, Anketa },
  data() {
    return {
      showAnket: false
    }
  },
  methods: {
    complit() {
      this.showAnket = false
    }
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/profile.scss';
</style>
