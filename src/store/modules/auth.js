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
    auth_success(state, data ) {
      state.status = 'success'
      const { token, userI } = data
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
        return resp
      } catch (err) {
        commit('auth_error') // ошибка
        console.log(err)
        // throw err //
      }
    },
    async login({ commit }, loginData) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://fessan.ru/api/login',
          data: loginData,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data['0'].api_token
            const userI = resp.data['0']
            localStorage.setItem('api_token', token)
            localStorage.setItem('id', userI.id)
            localStorage.setItem('email', userI.email)
            axios.defaults.headers.common['Authorization'] = token
            const data = { token, userI }
            commit('auth_success', data)
            resolve(resp)
          })
          .catch(err => {
            console.log('in catch')
            commit('auth_error')
            localStorage.removeItem('api_token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit('logout')
        localStorage.clear()
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
