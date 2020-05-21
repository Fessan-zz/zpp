<template>
  <div class>
    <section class="profile__header">
      <nav class="navbar navbar-expand-lg mx-4">
        <a href="/" class="navbar-brand">
          <img
            src="../../assets/img/logo2.png"
            alt="logo"
            class="profile__header_logo"
          />
        </a>
        <div class="d-flex align-items-center profile__header_wr">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link ml-2" href="#">Мои тренировки</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-2" href="#">Тренеры</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-2" href="#">Рецепты</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-2" href="#">Чат</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-2 active_link" href="#">
                Личный кабинет
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-2" href="#">Конструктор тренировок</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-2" href="#">Подопечные</a>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link profile__header_right mt-3 ml-2" href="#"
                >Апполинария</a
              >
            </li>
            <li class="nav-item">
              <button
                class="profile__header_right_btn btn my-2 ml-2"
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

<style lang="scss">
.profile__header {
  font-size: 12px !important;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: 0.05em;
}
.active_link {
  font-size: 12px !important;
}
.profile__header_right_btn{
  font-size: 12px !important;
}
</style>
