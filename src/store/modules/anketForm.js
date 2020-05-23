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
      try {
        const resp = await axios({
            url: 'http://fessan.ru/api/user/info',
            method: 'POST',
            data
          }
           //{ headers: { 'Content-Type': 'multipart/form-data' } }
        )
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
