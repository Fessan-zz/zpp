<template>
  <section id="firts_section">
    <header class="container w-1200" id="header">
      <div class="row">
        <div class="wrapper_header ml-5 col-lg-8">
          <img
            src="@/assets/img/zeleny.png"
            alt="logo"
            class="logo mt-5 img-fluid"
          />
          <h1 class="header_h1 mt-3 mb-3">
            ФИТНЕС ОНЛАЙН
            <br />С КОЛЛЕКТИВНОЙ ПОДДЕРЖКОЙ
          </h1>
          <p class="header_p">
            Художественный ритуал многопланово образует эпитет. Интерпретация,
            по определению, изящно дает фактографический горизонт ожидания.
            многопланово аккумулирует онтогенез.
          </p>
          <div class>
            <button
              class="btn mr-4 header__btn mt-3 pt-2 pb-2"
              @click="showModalAuth = !showModalAuth"
            >
              ВОЙТИ
            </button>
            <button
              class="btn ml-5 header__btn mt-3 pt-2 pb-2"
              @click="showModal = !showModal"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </div>
        </div>
      </div>
    </header>
    <main>
      <section class="main__advantages w-1200 container bck">
        <div class="row">
          <img
            src="@/assets/img/levo.png"
            alt="levo"
            class="col-lg-2 main__img_left img-fluid"
          />
          <div class="main__advant_div col-10">
            <h2 class="mt-5 mb-5">
              ПРЕИМУЩЕСТВА ФИТНЕСА
              <br />С КОЛЛЕКТИВНОЙ ПОДДЕРЖКОЙ
            </h2>
            <div class="container mt-3">
              <div class="row mt-5">
                <div class="advant col-lg-2 ml-5">
                  <img
                    src="@/assets/img/iron.png"
                    alt="iron"
                    class="img-fluid mx-auto d-block"
                  />
                  <p class="text-center mt-4">Преимущество 1</p>
                </div>
                <div class="advant col-lg-2 ml-5">
                  <img
                    src="@/assets/img/iron.png"
                    alt="iron"
                    class="img-fluid mx-auto d-block"
                  />
                  <p class="text-center mt-4">Преимущество 2</p>
                </div>
                <div class="advant col-lg-2 ml-5">
                  <img
                    src="@/assets/img/iron.png"
                    alt="iron"
                    class="img-fluid mx-auto d-block"
                  />
                  <p class="text-center mt-4">Преимущество 3</p>
                </div>
                <div class="advant col-lg-2 ml-5">
                  <img
                    src="@/assets/img/iron.png"
                    alt="iron"
                    class="img-fluid mx-auto d-block"
                  />
                  <p class="text-center mt-4">Преимущество 4</p>
                </div>
              </div>
              <div class="row mt-5">
                <div class="advant col-lg-2 ml-5">
                  <img
                    src="@/assets/img/iron.png"
                    alt="iron"
                    class="img-fluid mx-auto d-block"
                  />
                  <p class="text-center mt-4">Преимущество 1</p>
                </div>
                <div class="advant col-lg-2 ml-5">
                  <img
                    src="@/assets/img/iron.png"
                    alt="iron"
                    class="img-fluid mx-auto d-block"
                  />
                  <p class="text-center mt-4">Преимущество 2</p>
                </div>
                <div class="advant col-lg-2 ml-5">
                  <img
                    src="@/assets/img/iron.png"
                    alt="iron"
                    class="img-fluid mx-auto d-block"
                  />
                  <p class="text-center mt-4">Преимущество 3</p>
                </div>
                <div class="advant col-lg-2 ml-5">
                  <img
                    src="@/assets/img/iron.png"
                    alt="iron"
                    class="img-fluid mx-auto d-block"
                  />
                  <p class="text-center mt-4">Преимущество 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="main__curator w-1200 container">
        <div class="row bck">
          <div class="main__curator_img col-lg-3">
            <img
              src="@/assets/img/lena.png"
              alt="photo"
              class="main__curator_photo img-fluid mt-5 ml-5"
            />
          </div>
          <div class="main__curator_text col-lg-7 d-flex flex-column">
            <h3 class="text-right mr-3">ОТ КУРАТОРА ПРОЕКТА</h3>
            <div class="main__curator_text_wrap">
              <img src="@/assets/img/semi.png" alt="semi" class="before_semi" />
              <p class="m-5">
                Переживание и его претворение, по определению, готично образует
                онтогенез. Хорал, по определению, аккумулирует символический
                метафоризм. Типическое заканчивает диахронический подход. Целое
                образа, так или иначе, монотонно образует реконструктивный
                подход.
              </p>
              <img src="@/assets/img/semi.png" alt="semi" class="after_semi" />
            </div>
            <p class="h4 mt-5 ml-5">Елена Фамилия</p>
            <p class="ml-5 mt-2">Тренер, стаж работы, куратор проекта</p>
          </div>
          <img
            class="main__curator_figure col-lg-2 img-fluid"
            src="@/assets/img/pravo.png"
            alt="figure"
          />
        </div>
      </section>

      <section class="main_reviews container bck w-1200 pb-5">
        <h3 class="text-center pt-5">ОТЗЫВЫ</h3>
        <!-- slider -->
        <Reviews />
      </section>
    </main>
    <footer id="footer">
      <section class="footer_wrapper w-1200 bck container">
        <div
          class="row d-flex justify-content-around pt-5 pb-4 position-relative"
        >
          <div class="col-lg2 d-flex justify-content-between">
            <a class="ml-3" href="#">
              <i class="icon icon-iconmonstr-instagram-11"></i>
            </a>
            <a class="ml-3" href="#">
              <i class="icon icon-iconmonstr-whatsapp-1"></i>
            </a>
            <a class="ml-3" href="#">
              <i class="icon icon-iconmonstr-twitter-1"></i>
            </a>
            <a class="ml-3" href="#">
              <i class="icon icon-iconmonstr-vk-1"></i>
            </a>
          </div>
          <a href="#" class="col-lg2 footer_a">Кратко о проекте</a>
          <a href="#" class="col-lg2 footer_a">Авторские права</a>
          <a href="#" class="col-lg2 footer_a">Разработка сайта</a>
          <a href="#" class="col-lg2 footer_a">Контакт и адрес</a>
          <div class="arrow_up position-absolute" href="#header"></div>
        </div>
      </section>
    </footer>
    <RegisterForm
      v-if="showModal"
      @registration="onRegister"
      @close="showModal = false"
    />
    <Authorization
      v-if="showModalAuth"
      @authorizations="showModalAuth = !showModalAuth"
      @close="showModalAuth = false"
      @autorizationNotActive="onNonConfirmed"
    />
    <SuccessRegister
      v-if="showModalSuccessregister"
      @successregister="showModalSuccessregister = !showModalSuccessregister"
      @close="showModalSuccessregister = !showModalSuccessregister"
    />
    <NotConfirmed
      v-if="showModalNotConfirmed"
      @notconfirmed="showModalNotConfirmed = !showModalNotConfirmed"
      @close="showModalNotConfirmed = !showModalNotConfirmed"
    />
  </section>
</template>

<script>
import RegisterForm from '@/components/Register.vue'
import Authorization from '@/components/Authorization.vue'
import SuccessRegister from '@/components/SuccessRegister.vue'
import NotConfirmed from '@/components/NotConfirmed.vue'
import Reviews from '@/components/ReviewsSlider.vue'

export default {
  components: {
    RegisterForm,
    Authorization,
    SuccessRegister,
    NotConfirmed,
    Reviews
  },
  data() {
    return {
      showModal: false,
      showModalAuth: false,
      showModalSuccessregister: false,
      showModalNotConfirmed: false
    }
  },
  methods: {
    onRegister() {
      this.showModal = false
      this.showModalSuccessregister = true
    },
    onNonConfirmed() {
      this.showModalAuth = false
      this.showModalNotConfirmed = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
