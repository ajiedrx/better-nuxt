export const state = () => ({
  isPm: 'false'
})

export const mutations = {
  setPMState(state, { text }) {
    state.isPm = text
  }
}
