<template>
  <body class>
    <Modal
      :showCloseCross="true"
      :showActionButton="false"
      :showCloseButton="false"
      @close="onClose"
    >
      <span slot="header" class="form-modal__heading">Регистрация</span>
      <span slot="actionButtonText">---ЗАРЕГИСТРИРОВАТЬСЯ</span>
      <span slot="closeButtonText">---Меня не видно</span>
      <div class slot="body">
        <form class @submit.prevent="registers">
          <div class="form-block">
            <label for="email" class="form-modal__label">Введите email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email:"
              class="form-modal__input"
              v-model="email"
            />
            <div class="form-modal__err">
              {{ errArray['email'] ? errArray['email'].toString() : '' }}
            </div>
          </div>
          <div class="form-block">
            <label for="password" class="form-modal__label"
              >Введите пароль:</label
            >
            <input
              type="password"
              name="password"
              placeholder="Password"
              class="form-modal__input"
              v-model="password"
            />
            <div class="form-modal__err">
              {{ errArray['password'] ? errArray['password'].toString() : '' }}
            </div>
          </div>
          <div class="form-block">
            <label for="password_confirmation" class="form-modal__label"
              >Повторите пароль:</label
            >
            <input
              type="password"
              name="password_confirmation"
              placeholder="Password"
              class="form-modal__input"
              v-model="password_confirmation"
            />
            <div class="form-modal__err">
              {{
                errArray['password_confirmation']
                  ? errArray['password_confirmation'].toString()
                  : ''
              }}
            </div>
          </div>
          <div class="radio-buttons">
            <div class="radio-buttons-role">
              <input
                class="radio-buttons-role__input"
                type="radio"
                id="user"
                name="role"
                value="user"
                v-model="role"
                checked
              />
              <label for="user" class="radio-buttons-role__label"
                >Хочу тренироваться</label
              >
            </div>
            <div class="radio-buttons-role">
              <input
                class="radio-buttons-role__input"
                type="radio"
                id="trainer"
                name="role"
                value="trainer"
                v-model="role"
              />
              <label for="trainer" class="radio-buttons-role__label"
                >Хочу тренировать</label
              >
            </div>
          </div>
          <label class="check option-check">
            <input
              class="check__input"
              type="checkbox"
              v-model="checked_policy"
            />
            <span class="check__box"></span>
            <div class="check__text">
              <span class>Согласен с политикой конфиденциальности</span>
            </div>
          </label>
          <div class="form-modal__policy" v-show="checked_policy === false">
            “Необходимо указать, что вы согласны с политикой
            конфиденциальности”.
          </div>
          <button
            type="submit"
            :disabled="!checked_policy"
            class="btn header__btn-large"
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </button>
        </form>
      </div>
    </Modal>
  </body>
</template>

<script>
import Modal from '@/components/services/Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      email: '',
      password: '',
      password_confirmation: '',
      role: '',
      errArray: {},
      checked_policy: null
    }
  },

  methods: {
    registers() {
      const data = {
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        role: this.role //
      }
      this.$store
        .dispatch('register', data)
        .then(resp => {
          if (resp.data.success === true) {
            this.$emit('showModalSuccessregister')
          }
          if (resp.data[0]) {
            this.errArray = resp.data['0']
            console.log(this.errArray)
          } else {
            this.$emit('registration')
          }
        })
        .catch(err => console.log(err))
    },
    onClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/registers.scss';
</style>
