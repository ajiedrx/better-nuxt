import types from './mutation-types'
export default {
  [types.SET_USER_STATE]: (state, payload) => {
    state.user = payload
  }
}
