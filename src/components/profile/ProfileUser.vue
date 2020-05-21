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
              <Anketa v-if="showAnket" />
              <FormAnket v-else />
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
                    class="profile__main_tracker_items d-flex  flex-column justify-content-center align-items-center mt-3 mb-3"
                  >
                    <h4>Необходимая норма</h4>
                    <div class="profile__main__tracker--big--red">1500</div>
                    <div class="profile__main__tracker--big--item">Ккал</div>
                  </div>
                  <div
                    class="profile__main_tracker_items d-flex justify-content-between mt-5"
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
                <h4 class="mt-4 ">График изменения веса</h4>
                <img src="../../assets/img/grafik.png" alt="grafik" /><span
                  class="profile__main_eat_span mx-5 mb-5"
                  >Апрель</span
                >
                <span class="profile__main_eat_span  ml-3 active_span mb-5"
                  >Май</span
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBar from './NavBarProfileUser.vue'
import Anketa from './Anketa.vue'
import FormAnket from './AnketForm.vue'
import Footer from './Footer.vue'
import { mapGetters } from 'vuex'

export default {
  components: { NavBar, Anketa, Footer, FormAnket },
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['showAnket'])
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/profile.scss';
</style>
