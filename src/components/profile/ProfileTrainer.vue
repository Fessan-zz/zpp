<template>
  <div class="profile">
    <div class="container profile__wrapper">
      <!-- менюшка!!!!!! -->
      <NavBArProfileTrainer />
      <section class="profile__main">
        <div class="figure__trainer"></div>
        <div class="container profie__main_h1">
          <div class="row justify-content-center">
            <h2 class="col-lg-5 my-5 profile__main--h2 ml-5">ЛИЧНЫЙ КАБИНЕТ</h2>
          </div>
          <div class="container">
            <div class="row justify-content-center">
              <!-- Здесь анкета -->
              <AnketaTrainer v-if="showAnketTrainer" />
              <AnkerTrainerForm v-else />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </div>
</template>

<script>
import NavBArProfileTrainer from './NavBarProfileTrainer.vue'
import AnketaTrainer from './AnketTrainer.vue'
import AnkerTrainerForm from './AnkerTrainerForm.vue'
import Footer from './Footer.vue'
import { mapGetters } from 'vuex'

export default {
  components: { AnketaTrainer, Footer, AnkerTrainerForm, NavBArProfileTrainer },
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['showAnketTrainer'])
  }
}
</script>

<style lang="scss">
@import './src/assets/scss/profile.scss';
</style>
