import axios from 'axios'

export default {
  state: {
    user: {},
    showAnket: true,
    showAnketTrainer: true,
    trainer: {}
  },
  mutations: {
    showAnketFalse(state) {
      state.showAnket = false
    },
    showAnketTrainerFalse(state) {
      state.showAnketTrainer = false
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
    openFormAnketTrainer({ commit }) {
      commit('showAnketTrainerFalse')
    },
    async closeFormAnket({ commit }, data) {
      console.log(data)
      const token = localStorage.getItem('api_token')
      try {
        const resp = await axios({
          url: 'http://fessan.ru/api/user/info',
          data,
          method: 'POST'
          // headers: {
          //   'Authorization': `Bearer ${token}`
          // }
        })
        console.log(resp, ' this response')
        commit('showAnketTrue', data)
      } catch (err) {
        console.log(err)
        throw err
      }
    }
  },
  getters: {
    allInfoUser(state) {
      return state.user
    },
    allInfoTrainer(state) {
      return state.trainer
    },
    showAnket(state) {
      return state.showAnket
    },
    showAnketTrainer(state) {
      return state.showAnketTrainer
    }
  }
}
