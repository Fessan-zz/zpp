export default {
  state: {
    user: {
      first_name: 'Виктория',
      second_name: 'Резяпова',
      age: 20,
      weight: 40,
      height: 170,
      activity: 'Экстримально высокая',
      target: 'Поддерживать тонус',
      infoSelf:
        'Мое тело - металл, противопоказаний нет, железный человек, не иначе. Мое тело - металл, противопоказаний нет, железный человек, не иначе.Мое тело - металл, противопоказаний нет, железный человек, не иначе.',
      gender: 'женский'
    },
    showAnket: true
  },
  mutations: {
    showAnketFalse(state) {
      state.showAnket = false
    },
    showAnketTrue(state) {
      state.showAnket = true
    }
  },
  actions: {
    openFormAnket({ commit }) {
      commit('showAnketFalse')
    },
    closeFormAnket({ commit }) {
      commit('showAnketTrue')
    }
  },
  getters: {
    allInfoUser(state) {
      return state.user
    },
    showAnket(state) {
      return state.showAnket
    }
  }
}
