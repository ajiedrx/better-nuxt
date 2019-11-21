// import createPersistedState from 'vuex-persistedstate'
// import * as Cookie from 'js-cookie'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = () => ({
  previousRoute: null,
  user: {
    name: '',
    username: '',
    email: '',
    role: null,
    image: ''
  },
  idTeam: null,
  role: null,
  idManager: null,
  token: null,
  pmFlag: null
})
export default {
  state,
  actions,
  getters,
  mutations
}
