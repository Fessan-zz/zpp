<template>
  <div class="profile">
    <div class="container profile__wrapper">
      <section class="profile__header">
        <nav class="navbar navbar-expand-lg mx-4">
          <a href="/" class="navbar-brand">
            <img
              src="../../assets/img/logo2.png"
              alt="logo"
              class="profile__header_logo"
            />
          </a>
          <div class="d-flex justify-content-center align-items-center">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link ml-2" href="#">Главная</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ml-2" href="#">Программа тренировок</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ml-2" href="#">Рецепты</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ml-2" href="#">Блог</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link ml-2" href="#">
                  Личный кабинет
                  <span class="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <form class="form-inline my-2">
              <input
                class="profile__header_search"
                type="search"
                aria-label="Search"
              />
              <button type="submit" class="profile__header_search_btn">
                <i class="icon-search"></i>
              </button>
            </form>
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link profile__header_right mt-3 ml-2" href="#"
                  >useremail@gmail.com</a
                >
              </li>
              <li class="nav-item">
                <button class="profile__header_right_btn btn my-2 ml-2">
                  ВЫЙТИ
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section class="profile__main">
        <div class="figure"></div>
        <div class="container profie__main_h1">
          <div class="row justify-content-center">
            <h2 class="col-lg-5 my-4">ЛИЧНЫЙ КАБИНЕТ</h2>
          </div>
          <div class="container">
            <div class="row">
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './src/assets/scss/profile.scss';
</style>
