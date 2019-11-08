import types from './mutation-types'

const date = new Date()
const month = date.getMonth()
const year = date.getUTCFullYear()
export default {
  nuxtServerInit({ commit }, { req }) {
    if (month >= 2 && month <= 7) {
      commit(types.SET_SEMESTER_STATE, 2)
    } else {
      commit(types.SET_SEMESTER_STATE, 1)
    }
    commit(types.SET_YEAR_STATE, year)
  },
  setPreviousRoute({ commit }, payload) {
    commit(types.SET_PREVIOUS_ROUTE_STATE, payload)
  }
}
