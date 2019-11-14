import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = () => ({
  previousRoute: null,
  user: {
    name: 'Bahrul Amaruddin',
    role: 2,
    image: '/user.png'
  },
  semester: null,
  year: null,
  token: null,
  pmFlag: null
})

export default {
  state,
  actions,
  getters,
  mutations
}
