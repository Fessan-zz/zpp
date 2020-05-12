<template>
  <body class>
    <Modal
      :showCloseCross="true"
      :showActionButton="false"
      :showCloseButton="false"
      @close="onClose"
    >
      <span slot="header" class="form-modal__heading">АКТИВАЦИЯ АККАУНТА</span>
      <div class slot="body">
        <div class="form-modal__text-block">
          <p class="form-modal__text">
            Ваш аккаунт еще не активирован, проверьте адрес .
          </p>
          <p class="form-modal__text">e-mail пользователя.</p>
        </div>
        <button type="submit" class="btn header__btn-large" @click="onClose">
          ПОНЯТНО
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
