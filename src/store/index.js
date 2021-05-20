import { createStore } from "vuex"

export default createStore({
  state: {
    isLogin: false,
    authUser: {},
    isLoginModalOpen: false,
  },
  mutations: {
    setAuth(state, user) {
      state.isLogin = user ? true : false
      state.authUser = user
    },
    setLoginModal(state, isOpen) {
      state.isLoginModalOpen = isOpen
    },
  },
  actions: {},
  modules: {},
})
