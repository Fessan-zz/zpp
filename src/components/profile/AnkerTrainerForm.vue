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
        <label for="gender" class="profile__main_anketa_first ml-2">Пол:</label>
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
            type="number"
            name="age"
            placeholder="возраст"
            class="ml-3 form-modal__input form-modal__input_a form-modal--age"
            v-model="age"
            min="18"
            max="99"
            maxlength="2"
            size="2"
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
            type="number"
            size="3"
            maxlength="3"
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
            type="number"
            size="3"
            name="height"
            placeholder="Рост"
            class="ml-3 form-modal__input form-modal__input_a form-modal--height"
            v-model="height"
          />
          <!-- <div class="form-modal__err">
          {{ errArray['height'] ? errArray['height'].toString() : '' }}
        </div>-->
        </div>
        <div class="">
          <label for="infoSelf" class="profile__main_anketa_first  ml-2"
            >Образование:</label
          >
          <br />
          <textarea
            rows="2"
            cols="57"
            name="infoSelf"
            placeholder=""
            class="ml-3 form-modal__input form-modal__input_a form-modal--infoSelf"
            v-model="infoSelf"
          />
          <!-- <div class="form-modal__err">
          {{ errArray['age'] ? errArray['age'].toString() : '' }}
        </div>-->
        </div>
        <label for="experience" class="profile__main_anketa_first ml-2">Стаж:</label>
        <input
          type="text"
          name="experience"
          placeholder=""
          class="form-modal__input form-modal__input--exp ml-2"
          v-model="experience"
        />
        <div class="">
          <label for="description" class="profile__main_anketa_first ml-2"
            >Заслуги:</label
          >
          <br />
          <textarea
            rows="5"
            cols="57"
            name="description"
            placeholder=""
            class="ml-3 form-modal__input form-modal__input_a form-modal--infoSelf"
            v-model="description"
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
      description: '',
      infoSelf: '',
      photo: '',
      experience: ''
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
        infoSelf: this.infoSelf,
        photo: this.photo,
        description: this.description,
        experience: this.experience
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
.form-modal--age,
.form-modal--weight,
.form-modal--height {
  -moz-appearance: textfield;
}

.form-modal--age::-webkit-inner-spin-button,
.form-modal--weight::-webkit-inner-spin-button,
.form-modal--height::-webkit-inner-spin-button {
  display: none;
}
</style>
