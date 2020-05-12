<template>
  <body class>
    <Modal
      :showCloseCross="true"
      :showActionButton="false"
      :showCloseButton="false"
      @close="onClose"
    >
      <span slot="header" class="form-modal__heading"
        >ПОДТВЕРЖДЕНИЕ РЕГИСТРАЦИИ</span
      >
      <div class slot="body">
        <div class="form-modal__text-block">
          <p class="form-modal__text">Спасибо! Регистрация прошла успешно.</p>
          <p class="form-modal__text">
            На Ваш адрес e-mail пользователя отправлено письмо. Для
            подтверждения регистрации перейдите по ссылке, указанной в нем
          </p>
        </div>
        <button type="submit" class="btn header__btn-large" @click="onClose">
          ГОТОВО
        </button>
      </div>
    </Modal>
  </body>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {}
  },

  methods: {
    onClose() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/registers.scss';
</style>
