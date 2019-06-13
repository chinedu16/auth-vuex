import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: ''
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success',
      state.token = token,
      state.user = user
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
    login: ({commit}, payload) => {
      commit('auth_request')
      axios({url: 'https://reqres.in/api/login', data: payload, method: 'POST'})
      .then( response => {
        const token = response.data.token
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', token, payload)
      })
      .catch(error => {
        commit('auth_error')
        localStorage.removeItem('token')
        console.table(error.data)
      })
    },
  }
})
