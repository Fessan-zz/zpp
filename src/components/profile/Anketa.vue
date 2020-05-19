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
          {{ allInfoUser.gender }}
        </span>
      </div>
    </div>

    <div class="profile__main_anketa_text ml-4">
      <div class="main__profile_text_wrapper d-flex justify-content-around">
        <h3 class="h3">{{ allInfoUser.first_name }} {{ allInfoUser.second_name }}</h3>
        <button
          class="main__profile_anketa_btn ml-4 mt-5"
          @click="showAnket = !showAnket"
        >
          <span>Изменить</span>
        </button>
      </div>
      <div class="profile__main_text_items mt-3">
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Возраст:</span
        >
        <span class="profile__main__anketa_last ml-2 d-inline-block">{{
          allInfoUser.age
        }}</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block">Вес:</span>
        <span class="profile__main__anketa_last ml-2 d-inline-block"
          >{{ allInfoUser.weight }} кг</span
        >
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Рост:</span
        >
        <span class="profile__main__anketa_last ml-2 d-inline-block"
          >{{ allInfoUser.height }} см</span
        >
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Физическая активность:</span
        >
        <span class="profile__main__anketa_last ml-2 d-inline-block">{{
          allInfoUser.activity
        }}</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Цель тренировок:</span
        >
        <span class="profile__main__anketa_last ml-2 d-inline-block">{{
          allInfoUser.target
        }}</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block"
          >Информация о себе:</span
        >
        <br />
        <span class="profile__main__anketa_last ml-2 d-inline-block mb-5">
          {{ allInfoUser.infoSelf }}
        </span>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['allInfoUser'])
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    complit() {
      console.log('yes !!!!')
    }
  },
  mounted() {
    console.log('allInfoUser')
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/registers.scss';
</style>
