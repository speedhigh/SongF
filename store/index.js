// state
export const state = () => ({
  username: '',
  avatar: '',
  phone: '',
  loginFrom: '',
  token: '',
  user: {},
})

// mutations
export const mutations = {
  updateState(state, data) {
    state[data.name] = data.payload
  },
  updateUser(state, obj) {
    state.user = Object.assign({}, obj)
  },
  clearUser(state) {
    state.user = {}
  }
}