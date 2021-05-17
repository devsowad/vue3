<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32"
      >
        <app-header />
        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <calendar />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import Calendar from "./components/Calendar.vue";

export default {
  components: { AppHeader, Calendar },
  name: "App",
};
</script>
