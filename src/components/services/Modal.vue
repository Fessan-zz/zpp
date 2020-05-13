<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-heading">
            <slot name="header"></slot>
            <a
              href="#"
              class="modal-close"
              v-show="showCloseCross"
              @click.prevent="close"
            >
              <img
                src="../../assets/img/close-modal.svg"
                width="10"
                heigth="10"
                alt="closed registration form"
              />
            </a>
          </div>

          <div class>
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: '',
  props: {
    showActionButton: { type: Boolean },
    showCloseButton: { type: Boolean },
    showCloseCross: { type: Boolean },
    disabledActionButton: { type: Boolean }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    action() {
      this.$emit('action')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/modal.scss';
</style>
