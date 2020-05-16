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
              <div class="col-lg-8 profile__main_anketa d-flex">
                <img
                  src="../../assets/img/ava.png"
                  alt="photo"
                  class="profile__main_anketa_photo img-fluid ml-3"
                />
                <div class="profile__main_anketa_text ">
                  <div
                    class="main__profile_text_wrapper d-flex justify-content-around"
                  >
                    <h3 class="h3">Виктория Резяпова</h3>
                    <button class="main__profile_anketa_btn ml-4 mt-5">
                      <span>Изменить</span>
                    </button>
                  </div>
                  <div class="profile__main_text_items mt-3">
                    <span class="profile__main_anketa_first ml-2 d-inline-block"
                      >Возраст:</span
                    >
                    <span class="profile__main__anketa_last ml-2 d-inline-block"
                      >20 лет</span
                    >
                    <br />
                    <span class="profile__main_anketa_first ml-2 d-inline-block"
                      >Вес:</span
                    >
                    <span class="profile__main__anketa_last ml-2 d-inline-block"
                      >40 кг</span
                    >
                    <br />
                    <span class="profile__main_anketa_first ml-2 d-inline-block"
                      >Рост:</span
                    >
                    <span class="profile__main__anketa_last ml-2 d-inline-block"
                      >170 см</span
                    >
                    <br />
                    <span class="profile__main_anketa_first ml-2 d-inline-block"
                      >Физическая активность:</span
                    >
                    <span class="profile__main__anketa_last ml-2 d-inline-block"
                      >Экстремально высокая</span
                    >
                    <br />
                    <span class="profile__main_anketa_first ml-2 d-inline-block"
                      >Цель тренировок:</span
                    >
                    <span class="profile__main__anketa_last ml-2 d-inline-block"
                      >Поддерживать тонус</span
                    >
                    <br />
                    <span class="profile__main_anketa_first ml-2 d-inline-block"
                      >Цель тренировок:</span
                    >
                    <br />
                    <span
                      class="profile__main__anketa_last ml-2 d-inline-block mb-5"
                      >Мое тело - металл, противопоказаний нет, железный
                      человек, не иначе. Мое тело - металл, противопоказаний
                      нет, железный человек, не иначе.Мое тело - металл,
                      противопоказаний нет, железный человек, не иначе.</span
                    >
                  </div>
                </div>
              </div>
              <div class="col-lg-3 profile__main_water">
                <h3>Трекер воды</h3>
              </div>
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
