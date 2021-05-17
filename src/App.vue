<template>
  <div class="relative bg-white overflow-hidden">
    <div class="w-full">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32"
      >
        <app-header />
        <!-- <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8"
        > -->
        <main class="mt-10 sm:mt-12 md:mt-16 flex justify-center flex-wrap">
          <!-- <main class="mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:px-8"> -->
          <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: { AppHeader },
};
</script>