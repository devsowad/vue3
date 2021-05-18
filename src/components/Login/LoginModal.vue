<template>
  <div>
    <div
      @click="$emit('close-login-modal')"
      class="fixed inset-0 w-screen h-screen bg-gray-600 z-20 bg-opacity-60"
    ></div>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 bg-white p-4 w-1/3 m-auto rounded shadow">
          <div class="flex justify-between items-center">
            <h2 class="text-base">Login</h2>
            <button
              @click="$emit('close-login-modal')"
              class="icon-button material-icons"
            >
              close
            </button>
          </div>
          <div>
            <img
              class="mx-auto h-12 w-auto"
              src="@/assets/logo.png"
              alt="Vue 3"
            />

            <goggle-login class="my-3" />
            <p class="text-lg text-center">OR,</p>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form class="mt-8 space-y-6" @submit.prevent="login">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input
                  v-model="form.email"
                  ref="loginEmail"
                  type="email"
                  class="input-control"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input
                  v-model="form.password"
                  type="password"
                  class="input-control"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button type="submit" class="form-button w-full">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoggleLogin from "./GoggleLogin.vue";
export default {
  components: { GoggleLogin },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      console.log(this.form);
    },
  },

  mounted() {
    this.$refs.loginEmail.focus();
  },
};
</script>

<style>
</style>