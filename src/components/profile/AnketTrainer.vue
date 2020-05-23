<template>
  <div class="col-lg-8 profile__main_anketa d-flex ml-3 mb-5">
    <div class="profile__main--anketa--left">
      <img
        src="../../assets/img/ava.png"
        alt="photo"
        class="profile__main_anketa_photo img-fluid ml-3"
      />
      <div class="mt-3 text-center">
        <span class="profile__main_anketa_first ml-2 d-inline-block">Пол:</span>
        <span class="profile__main__anketa_last ml-2 d-inline-block mb-5">
          {{ allInfoTrainer.gender }}qeqwe
        </span>
      </div>
    </div>

    <div class="profile__main_anketa_text ml-4">
      <div class="main__profile_text_wrapper d-flex justify-content-around">
        <h3 class="h3">
          {{ allInfoTrainer.first_name }} {{ allInfoTrainer.second_name }}
        </h3>
        <button
          class="main__profile_anketa_btn ml-4 mt-5"
          @click="openRedactFormTrainer"
        >
          <span>Изменить</span>
        </button>
      </div>
      <div class="profile__main_text_items mt-3">
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Возраст:</span
        >
        <span class="profile__main__anketa_last ml-2 d-inline-block">{{
          allInfoTrainer.age
        }} лет</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block">Вес:</span>
        <span class="profile__main__anketa_last ml-2 d-inline-block"
          >{{ allInfoTrainer.weight }} кг</span
        >
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Рост:</span
        >
        <span class="profile__main__anketa_last ml-2 d-inline-block"
          >{{ allInfoTrainer.height }} см</span
        >
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Образование:</span
        >
        <br />
        <span class="profile__main__anketa_last ml-2 d-inline-block mb-5">
          {{ allInfoTrainer.infoSelf }}
        </span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Стаж:</span
        >
        <span class="profile__main__anketa_last ml-2 d-inline-block"
          >{{ allInfoTrainer.experience }}</span
        >
        <br />
        <span class="profile__main__anketa_last ml-2 d-inline-block mb-5">
          {{ allInfoTrainer.infoSelf }}
        </span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Заслуги:</span
        >
        <span class="profile__main__anketa_last ml-2 d-inline-block"
          >{{ allInfoTrainer.description }}</span
        >
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['allInfoTrainer'])
  },
  methods: {
    openRedactFormTrainer() {
      console.log(' здесь открывает через экшен другая форма')
      this.$store.dispatch('openFormAnketTrainer')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/registers.scss';
</style>
