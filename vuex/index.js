import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = () => ({
  previousRoute: null,
  user: {
    name: '',
    image: '',
    email: ''
  }
})

export default {
  state,
  actions,
  getters,
  mutations
}
