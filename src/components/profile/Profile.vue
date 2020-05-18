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
                <div class="profile__main_water_items m-3 d-flex flex-wrap">
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/blueWater.png"
                      alt="water"
                      class="m-2"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/blueWater.png"
                      alt="water"
                      class="m-2"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/blueWater.png"
                      alt="water"
                      class="m-2"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/blueWater.png"
                      alt="water"
                      class="m-2"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/blueWater.png"
                      alt="water"
                      class="m-2"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/water.png"
                      alt="water"
                      class="m-2"
                    />
                    <img
                      src="../../assets/img/waterClose.png"
                      alt="close"
                      class="profile__main_water_close"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/water.png"
                      alt="water"
                      class="m-2"
                    />
                    <img
                      src="../../assets/img/waterClose.png"
                      alt="close"
                      class="profile__main_water_close"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/water.png"
                      alt="water"
                      class="m-2"
                    />
                    <img
                      src="../../assets/img/waterClose.png"
                      alt="close"
                      class="profile__main_water_close"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/water.png"
                      alt="water"
                      class="m-2"
                    />
                    <img
                      src="../../assets/img/waterClose.png"
                      alt="close"
                      class="profile__main_water_close"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/water.png"
                      alt="water"
                      class="m-2"
                    />
                    <img
                      src="../../assets/img/waterClose.png"
                      alt="close"
                      class="profile__main_water_close"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/water.png"
                      alt="water"
                      class="m-2"
                    />
                    <img
                      src="../../assets/img/waterClose.png"
                      alt="close"
                      class="profile__main_water_close"
                    />
                    <br />
                    <span>250 мл</span>
                  </div>
                  <div class="profile__main_water_item">
                    <img
                      src="../../assets/img/water.png"
                      alt="water"
                      class="m-2"
                    />
                    <img
                      src="../../assets/img/waterClose.png"
                      alt="close"
                      class="profile__main_water_close"
                    />
                    <br />
                    <span>250 мл</span>
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
                <h3 class="mt-4 ">График изменения веса</h3>
                <img src="../../assets/img/grafik.png" alt="grafik">
                <span class="profile__main_eat_span mx-5 mb-5">Апрель</span>
                <span class="profile__main_eat_span  ml-3 active_span mb-5">Май</span>
                <button type="button" class="justify-content-end"> <img src="../../assets/img/plus.png" alt="button"></button>
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
