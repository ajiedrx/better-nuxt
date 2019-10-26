export const state = () => ({
  userToken: []
})

export const mutations = {
  assign(state, { text }) {
    state.userToken.push({
      text
    })
  }
}
