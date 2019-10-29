export const state = () => ({
  isTeam: null
})

export const mutations = {
  teamState(state, { boolean }) {
    state.isTeam = boolean
  }
}
