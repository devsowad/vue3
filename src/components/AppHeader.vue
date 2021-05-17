<template>
  <div>
    <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        class="relative flex items-center justify-between sm:h-10"
        aria-label="Global"
      >
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <router-link :to="{ name: 'Home' }">
              <span class="sr-only">Workflow</span>
              <div class="w-10">
                <img src="../assets/logo.png" class="w-full" alt="Vue 3" />
              </div>
            </router-link>
            <div class="-mr-2 flex items-center md:hidden">
              <button
                @click="toggleNav"
                type="button"
                class="material-icons bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded="false"
              >
                menu
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <router-link
            class="font-medium text-gray-500 hover:text-gray-900"
            v-for="link in navLinks"
            :key="link.name"
            :to="{ name: link.name }"
          >
            {{ link.label ?? link.name }}
          </router-link>
        </div>
      </nav>
    </div>

    <!--
          Mobile menu, show/hide based on menu open state.

          Entering: "duration-150 ease-out"
            From: "opacity-0 scale-95"
            To: "opacity-100 scale-100"
          Leaving: "duration-100 ease-in"
            From: "opacity-100 scale-100"
            To: "opacity-0 scale-95"
        -->
    <div
      class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      :class="!isNavShow && 'opacity-0 hidden'"
    >
      <div
        class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
      >
        <div class="px-5 pt-4 flex items-center justify-between">
          <router-link @click="toggleNav" :to="{ name: 'Home' }" class="w-2/12">
            <img src="../assets/logo.png" class="w-full" alt="Vue 3" />
          </router-link>
          <div class="-mr-2">
            <button
              @click="toggleNav"
              type="button"
              class="bg-white material-icons rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              close
            </button>
          </div>
        </div>
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            @click="toggleNav"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            v-for="link in navLinks"
            :key="link.name"
            :to="{ name: link.name }"
          >
            {{ link.label ?? link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        { name: "Home" },
        { name: "DcHeros", label: "Dc Heros" },
        { name: "Calendar" },
        { name: "Markdown" },
        { name: "Carousel" },
      ],
      isNavShow: false,
    };
  },
  methods: {
    toggleNav() {
      this.isNavShow = !this.isNavShow;
    },
  },
};
</script>

<style lang="postcss">
.router-link-active {
  @apply text-primary hover:text-primary font-bold !important;
}
</style>