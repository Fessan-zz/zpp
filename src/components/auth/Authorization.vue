<template>
  <body class>
    <Modal
      :showCloseCross="true"
      :showActionButton="false"
      :showCloseButton="false"
      @close="onClose"
    >
      <span slot="header" class="form-modal__heading">ВХОД</span>
      <span slot="actionButtonText">---ЗАРЕГИСТРИРОВАТЬСЯ</span>
      <span slot="closeButtonText">---Меня не видно</span>
      <div class slot="body">
        <form class @submit.prevent="login">
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
          <a href="/" class="form-modal__link">
            У Вас нет аккаунта? Зарегистрируйтесь
          </a>
          <button type="submit" class="btn header__btn-large">ВОЙТИ</button>
        </form>
      </div>
    </Modal>
  </body>
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
  name: 'authorization',
  components: {
    Modal
  },
  data() {
    return {
      email: '',
      password: '',
      errArray: {}
    }
  },

  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store
        .dispatch('login', data)
        .then(resp => {
          if (resp.data.success == false) {/// не доделан вывод ошибок
            // this.errArray = resp.data['0']
            if (resp.data.active == '0') {
              this.$emit('autorizationNotActive')
              //окно учетка неактивна (модалка)
              return
            }
            //ошибки
          } else {
            const token = resp.data['0'].api_token
            const userI = resp.data['0']
            localStorage.setItem('api_token', token)
            localStorage.setItem('id', userI.id),
              this.$store.commit('auth_success', { token, userI })
            //axios.defaults.headers.common['Authorization'] = token
            if (resp.data['0'].role == 'trainer') {
              alert(resp.data['0'].role)
              this.$router.push({
                name: 'profiletrainer',
                params: { id: userI.id }
              })
              //открыть кабинет тренера
            }
            if (resp.data['0'].role == 'user') {
              alert(resp.data['0'].role)
              this.$router.push({
                name: 'profileuser',
                params: { id: userI.id }
              })
              //открыть кабинет обычного пользователя
            }
          }

          this.$emit('close')
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
@import './src/assets/scss/registers.scss';
</style>
