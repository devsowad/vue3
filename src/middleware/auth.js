const auth = (next, store) => {
  if (!store.state.isLogin) {
    next("/")
    store.commit("setLoginModal", true)
  } else next()
}

export default auth
