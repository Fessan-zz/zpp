import axios from 'axios'

export default {
  state: {
    status: '',
    token: localStorage.getItem('api_token') || '',
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, item) {
      state.status = 'success'
      const { token, userI } = item
      state.token = token
      state.user = userI
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    }
  },
  actions: {
    async register({ commit }, registerData) {
      try {
        const resp = await axios({
          url: 'http://fessan.ru/api/signup',
          data: registerData, // data register  передача данных ч/з dispatch
          method: 'POST'
        })
        console.log(resp)
        return resp
      } catch (err) {
        commit('auth_error') // ошибка
        console.log(err)
        // throw err //
      }
    },
    async login({ commit }, loginData) {
      try {
        const resp = await axios({
          url: `http://fessan.ru/api/login`,
          data: loginData, // data register  передача данных ч/з dispatch
          method: 'POST'
        })
        return resp
      } catch (err) {
        commit('auth_error') // ошибка
        localStorage.removeItem('api_token')
        console.log(err)
      }
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit('logout')
        localStorage.removeItem('api_token')
        localStorage.removeItem('name')
        delete axios.defaults.headers.common.Authorization
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
}
