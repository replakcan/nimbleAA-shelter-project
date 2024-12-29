import { createStore } from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default createStore({
  state: {
    count: 0,
    clients: []
  },
  getters: {
  },
  mutations: {
    [Mutations.INCREMENT] (state) {
      state.count++
    },
    [Mutations.DECREMENT] (state) {
      if (state.count === 0) return
      state.count--
    }
  },
  actions: {
    increment ({ commit }) {
      commit(Mutations.INCREMENT)
    },
    decrement ({ commit }) {
      commit(Mutations.DECREMENT)
    },
    async fetchClients () {
      const request = await axios.get('/clients')
      return request.data
    },
    async fetchClient (ctx, clientId) {
      const request = await axios.get(`/clients/${clientId}`)
      return request.data
    }
  }
})
