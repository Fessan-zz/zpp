<template>
  <div class>
    <section class="profile__header">
      <nav class="navbar navbar-expand-lg mx-4">
        <router-link to="/" class="navbar-brand">
          <img
            src="../../assets/img/logo2.png"
            alt="logo"
            class="profile__header_logo"
          />
        </router-link>
        <div class="d-flex align-items-center profile__header_wr">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link ml-5" to="#">Мои тренировки</router-link>
            </li>
            <li class="nav-item">
              <router-link  class="nav-link ml-5" to="#">Тренеры</router-link >
            </li>
            <li class="nav-item">
              <router-link  class="nav-link ml-5" to="#">Рецепты</router-link >
            </li>
            <li class="nav-item">
              <router-link  class="nav-link ml-5" to="#">Чат</router-link >
            </li>
            <li class="nav-item">
              <router-link class="nav-link ml-5 active_link" to="#">
                Личный кабинет
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link  class="nav-link profile__header_right mt-3 ml-4" to="#"
                >Апполинария</router-link
              >
            </li>
            <li class="nav-item">
              <button
                class="profile__header_right_btn btn my-2 ml-5"
                @click="logout"
              >
                ВЫЙТИ
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss"></style>
