<template>
  <div class="col-lg-8 profile__main_anketa d-flex ml-3 mb-5">
    <img
      src="../../assets/img/ava.png"
      alt="photo"
      class="profile__main_anketa_photo img-fluid ml-3"
    />
    <div class="profile__main_anketa_text">
      <div class="main__profile_text_wrapper d-flex justify-content-around">
        <h3 class="h3">Виктория Резяпова</h3>
        <button class="main__profile_anketa_btn ml-4 mt-5" @click="showAnket = !showAnket">
          <span>Изменить</span>
        </button>
      </div>
      <div class="profile__main_text_items mt-3">
        <span class="profile__main_anketa_first ml-2 d-inline-block">Возраст:</span>
        <span class="profile__main__anketa_last ml-2 d-inline-block">20 лет</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block">Вес:</span>
        <span class="profile__main__anketa_last ml-2 d-inline-block">40 кг</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block">Рост:</span>
        <span class="profile__main__anketa_last ml-2 d-inline-block">170 см</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block">Физическая активность:</span>
        <span class="profile__main__anketa_last ml-2 d-inline-block">Экстремально высокая</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block">Цель тренировок:</span>
        <span class="profile__main__anketa_last ml-2 d-inline-block">Поддерживать тонус</span>
        <br />
        <span class="profile__main_anketa_first ml-2 d-inline-block">Цель тренировок:</span>
        <br />
        <span class="profile__main__anketa_last ml-2 d-inline-block mb-5">
          Мое тело - металл, противопоказаний нет, железный
          не иначе. Мое тело - металл, противопоказаний нет,
          нет, железный человек, не иначе.Мое тело - металл,
          противопоказаний нет, железный человек, не иначе.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      errArray: {},
      surname: '',
      name: '',
      height: '',
      weight: '',
      dateBirth: '',
      selfActions: '',
      self: '',
      sex: ''
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    complit() {
      console.log('yes !!!!')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/registers.scss';
</style>
