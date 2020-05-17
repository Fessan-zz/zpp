<template>
  <div class="">
    <Modal
      :showCloseCross="true"
      :showActionButton="true"
      :showCloseButton="false"
      @close="onClose"
    >
      <span slot="header" class="form-modal__heading">АНКЕТА КЛИЕНТА</span>
      <span slot="actionButtonText">Заполните личную информацию</span>
      <span slot="closeButtonText">---Меня не видно</span>
      <div class slot="body">
        <form class @submit.prevent="complit">
          <div class="form-block">
            <label for="surname" class="form-modal__label">Фамилия:</label>
            <input
              type="text"
              name="surname"
              class="form-modal__input"
              v-model="surname"
              required
            />
            <div class="form-modal__err">
              {{ errArray['surname'] ? errArray['surname'].toString() : '' }}
            </div>
          </div>
          <div class="form-block">
            <label for="name" class="form-modal__label">Имя:</label>
            <input
              type="text"
              name="name"
              class="form-modal__input"
              v-model="name"
              required
            />
            <div class="form-modal__err">
              {{ errArray['name'] ? errArray['name'].toString() : '' }}
            </div>
          </div>

          <div class="form-block">
            <label for="height" class="form-modal__label">Рост:</label>
            <input
              type="number"
              name="height"
              class="form-modal__input"
              v-model="height"
              size="3"
              required
            />
            <div class="form-modal__err">
              {{ errArray['height'] ? errArray['height'].toString() : '' }}
            </div>
          </div>

          <div class="form-block">
            <label for="weight" class="form-modal__label">Вес:</label>
            <input
              type="number"
              name="weight"
              class="form-modal__input"
              v-model="weight"
              size="3"
              required
            />
            <div class="form-modal__err">
              {{ errArray['weight'] ? errArray['weight'].toString() : '' }}
            </div>
          </div>

          <div class="form-block">
            <label for="dateBirth" class="form-modal__label"
              >Дата Рождения:</label
            >
            <input
              type="data"
              name="dateBirth"
              class="form-modal__input"
              v-model="dateBirth"
              required
            />
            <div class="form-modal__err">
              {{
                errArray['dateBirth'] ? errArray['dateBirth'].toString() : ''
              }}
            </div>
          </div>

          <div class="form-block">
            <label for="selfActions" class="form-modal__label"
              >Физическая Активность:</label
            >
            <input
              type="text"
              name="selfActions"
              class="form-modal__input"
              v-model="selfActions"
              required
            />
            <div class="form-modal__err">
              {{
                errArray['selfActions']
                  ? errArray['selfActions'].toString()
                  : ''
              }}
            </div>
          </div>

          <div class="form-block">
            <label for="self" class="form-modal__label">О себе:</label>
            <textarea
              name="self"
              class="form-modal__input"
              v-model="self"
              required
              maxlength="200"
              rows="5"
            />
            <div class="form-modal__err">
              {{ errArray['self'] ? errArray['self'].toString() : '' }}
            </div>
          </div>
<!-- как грузить аву?? -->


          <div class="radio-buttons">
            <div class="radio-buttons-role">
              <input
                class="radio-buttons-role__input"
                type="radio"
                id="man"
                name="sex"
                value="man"
                v-model="sex"
                checked
              />
              <label for="man" class="radio-buttons-role__label">Мужчина</label>
            </div>
            <div class="radio-buttons-role">
              <input
                class="radio-buttons-role__input"
                type="radio"
                id="trainer"
                name="sex"
                value="woman"
                v-model="sex"
              />
              <label for="woman" class="radio-buttons-role__label"
                >Женщина</label
              >
            </div>
          </div>

          <button type="submit" class="btn header__btn-large">
            Изменить
          </button>
        </form>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/services/Modal.vue'
export default {
  components: { Modal },
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
