export default {
  data() {
    return {
      timeout: "",
    }
  },

  methods: {
    debounce(func, timeout = 1000) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(func, timeout)
    },
  },
}
