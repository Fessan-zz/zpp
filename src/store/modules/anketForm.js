export default {
  state: {
    user: {
      first_name: '',
      second_name: '',
      age: '',
      weight: null,
      height: null,
      activity: '',
      target: '',
      infoSelf: '',
      gender: ''
    },
    showAnket: true
  },
  mutations: {
    showAnketFalse(state) {
      state.showAnket = false
    },
    showAnketTrue(state, data) {
      console.log(' in mutation ', data)
      state.user = data
      state.showAnket = true
    }
  },
  actions: {
    openFormAnket({ commit }) {
      commit('showAnketFalse')
    },
    closeFormAnket({ commit }, data) {
      console.log(data, ' data in action closeform')
      commit('showAnketTrue', data)
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
