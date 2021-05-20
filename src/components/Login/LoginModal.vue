<template>
  <teleport to="body">
    <div v-if="isOpen">
      <div
        @click="close"
        class="fixed inset-0 w-screen h-screen bg-gray-600 z-20 bg-opacity-60"
      ></div>
      <div class="absolute inset-0">
        <div class="flex h-full">
          <div class="z-30 bg-white p-4 w-1/3 m-auto rounded shadow">
            <div class="flex justify-between items-center">
              <h2 class="text-base">Login</h2>
              <button @click="close" class="icon-button material-icons">
                close
              </button>
            </div>
            <div>
              <img
                class="mx-auto h-12 w-auto"
                src="@/assets/logo.png"
                alt="Vue 3"
              />

              <goggle-login @error="goggleError" @close="close" class="my-3" />
              <p class="text-lg text-center">OR,</p>
              <h2
                class="mt-6 text-center text-3xl font-extrabold text-gray-900"
              >
                Sign in to your account
              </h2>
            </div>
            <form class="mt-8 space-y-6" @submit.prevent="login">
              <div class="rounded-md shadow-sm -space-y-px">
                <div>
                  <label for="email-address" class="sr-only"
                    >Email address</label
                  >
                  <input
                    v-model="email"
                    ref="loginEmail"
                    type="email"
                    class="input-control"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label for="password" class="sr-only">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="input-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <p
                class="text-red-600 text-md flex items-center"
                v-if="authError"
              >
                <span class="material-icons mr-2"> error </span>
                {{ authError }}
              </p>
              <div>
                <button
                  :disabled="isLoading"
                  type="submit"
                  class="form-button w-full"
                >
                  <span v-if="!isLoading">Sign in</span>
                  <span v-else class="material-icons animate-spin text-primary">
                    hourglass_empty
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import GoggleLogin from "./GoggleLogin.vue";
import firebase from "../../utilities/firebase";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

export default {
  components: { GoggleLogin },
  setup() {
    const email = ref("vue3@email.com");
    const password = ref("123456");
    const loginEmail = ref(null);
    const isLoading = ref(false);
    const authError = ref("");

    const store = useStore();

    const close = () => store.commit("setLoginModal", false);

    onMounted(() => {
      // loginEmail.value.focus();
    });

    const isOpen = computed(() => store.state.isLoginModalOpen);

    const login = async () => {
      authError.value = "";
      isLoading.value = true;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);

        email.value = "";
        password.value = "";
        close();
      } catch (error) {
        authError.value = error.message;
      }
      isLoading.value = false;
    };

    const goggleError = msg => {
      authError.value = msg;
    };

    return {
      isOpen,
      login,
      loginEmail,
      email,
      password,
      isLoading,
      authError,
      close,
      goggleError
    };
  }
};
</script>

<style>
</style>