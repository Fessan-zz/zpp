<template>
  <form
    class="col-lg-8 profile__main_anketa d-flex ml-3 mb-5"
    @submit.prevent="closeRedactForm"
  >
    <div class="profile__main--anketa--left">
      <div class="position-relative">
        <img
          src="../../assets/img/ava.png"
          alt="photo"
          class="profile__main_anketa_photo img-fluid ml-3"
        />
        <button>
          <img
            src="../../assets/img/plusFormAnket.png"
            alt="add avatar"
            class="position-absolute profile__main--ava--plus"
          />
        </button>
      </div>

      <div class="mt-3 text-center">
        <label
          for="gender"
          class="profile__main_anketa_first ml-2"
          >Пол:</label
        >
        <select
          name="gender"
          v-model="gender"
          class="profile__main--anket--select ml-2"
        >
          <option disabled value>Выберите</option>
          <option>Мужской</option>
          <option>Женский</option>
        </select>
      </div>
    </div>

    <div class="profile__main_anketa_text ml-4">
      <div class="main__profile_text_wrapper d-flex justify-content-around">
        <div>
          <label for="first_name" class></label>
          <input
            type="text"
            name="first_name"
            placeholder="Имя"
            class="profile__main--anketa-name mt-5"
            v-model="first_name"
          />

          <label for="second_name" class="ml-2"></label>
          <input
            type="text"
            name="second_name"
            placeholder="Фамилия"
            class="profile__main--anketa-name mt-5"
            v-model="second_name"
          />
        </div>

        <!-- <div class="form-modal__err">
          {{ errArray['first_name'] ? errArray['first_name'].toString() : '' }}
        </div>-->

        <!-- <div class="form-modal__err">
          {{ errArray['second_name'] ? errArray['second_name'].toString() : '' }}
        </div>-->
        <button class="main__profile_anketa_btn ml-4 mt-4" type="submit">
          <span>Сохранить</span>
        </button>
      </div>
      <div class="profile__main_text_items mt-3">
        <div class="">
          <label for="age" class="profile__main_anketa_first  ml-2"
            >Возраст:</label
          >
          <input
            type="text"
            name="age"
            placeholder="возраст"
            class="ml-3 form-modal__input form-modal__input_a form-modal--age"
            v-model="age"
          />
          <!-- <div class="form-modal__err">
          {{ errArray['age'] ? errArray['age'].toString() : '' }}
        </div>-->
        </div>
        <div class="">
          <label for="weight" class="profile__main_anketa_first  ml-2"
            >Вес:</label
          >
          <input
            type="text"
            name="weight"
            placeholder="Вес"
            class="ml-3 form-modal__input form-modal__input_a  form-modal--weight"
            v-model="weight"
          />
          <!-- <div class="form-modal__err">
          {{ errArray['age'] ? errArray['age'].toString() : '' }}
        </div>-->
        </div>
        <div class="">
          <label for="height" class="profile__main_anketa_first  ml-2"
            >Рост:</label
          >
          <input
            type="text"
            name="height"
            placeholder="Рост"
            class="ml-3 form-modal__input form-modal__input_a form-modal--height"
            v-model="height"
          />
          <!-- <div class="form-modal__err">
          {{ errArray['height'] ? errArray['height'].toString() : '' }}
        </div>-->
        </div>
        <div>
          <label for="activity" class="profile__main_anketa_first  ml-2"> Физическая активность:
          </label>
          <select
            name="activity"
            v-model="activity"
            class="profile__main--anket--select form-modal--activity"
          >
            <option disabled value>Выберите</option>
            <option>отсутствие физических нагрузок,сидячая работа</option>
            <option>4-5 тренировок в неделю или активная работа</option>
            <option>5/6 интенсивных тренировок в неделю</option>
            <option>тренировки 7 дней в неделю</option>
            <option>интенсивные тренировки 2 раза в день</option>
            <option>тяжелые физические нагрузки на работе</option>
            <option>Никогда не занимался и не занимаюсь спортом</option>
          </select>
          <!-- вывод ошибок! -->
        </div>
        <div>
          <label for="target" class="profile__main_anketa_first ml-2 mt-4">Цель:
          </label>
          <select
            name="target"
            v-model="target"
            class="profile__main--anket--select ml-2 form-modal--target"
          >
            <option disabled value>Выберите</option>
            <option>сбросить лишний вес</option>
            <option>поддерживать вес</option>
            <option>набрать массу</option>
          </select>
          <!-- вывод ошибок! -->
        </div>
        <div class="">
          <label for="infoSelf" class="profile__main_anketa_first mt-3  ml-2"
            >Информация о себе:</label
          >
          <br>
          <textarea
            rows="5"
            cols="57"
            name="infoSelf"
            placeholder="О себе"
            class="ml-3 form-modal__input form-modal__input_a form-modal--infoSelf"
            v-model="infoSelf"
          />
          <!-- <div class="form-modal__err">
          {{ errArray['age'] ? errArray['age'].toString() : '' }}
        </div>-->
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      errArrat: {},
      gender: '',
      first_name: '',
      second_name: '',
      age: null,
      weight: null,
      height: null,
      activity: '',
      target: '',
      infoSelf: ''
    }
  },
  methods: {
    closeRedactForm() {
      const data = {
        gender: this.gender,
        first_name: this.first_name,
        second_name: this.second_name,
        age: this.age,
        weight: this.weight,
        height: this.height,
        activity: this.activity,
        target: this.target,
        infoSelf: this.infoSelf
      }
      console.log(data, 'data')
      this.$store.dispatch('closeFormAnket', data)
    }
  },
  computed: {
    ...mapGetters(['allInfoUser'])
  }
}
</script>

<style lang="scss" scoped>
</style>
