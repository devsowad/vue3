<template>
  <button
    @click="loginWithGoggle"
    class="w-full relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
  >
    Login with Goggle
  </button>
</template>

<script>
export default {
  methods: {
    loginWithGoggle() {
      console.log("login with goggle");
    },
  },
};
</script>

<style>
</style>