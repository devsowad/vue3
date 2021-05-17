<template>
  <div class="flex mb-10 relative flex-wrap w-full h-96">
    <div
      v-for="(carousel, index) in carousels"
      :key="carousel"
      @mouseover="clearSlider"
      @mouseleave="createSlider"
    >
      <transition name="slide">
        <div
          v-if="activeCarousel === index"
          class="h-96 absolute w-full"
          :class="carousel"
        ></div>
      </transition>
    </div>
    <div
      @mouseover="clearSlider"
      @mouseleave="createSlider"
      class="flex space-x-2 absolute bottom-6 w-full justify-center z-10"
    >
      <button
        v-for="(carousel, index) in carousels"
        :key="carousel"
        @click="activeCarousel = index"
        class="rounded-full hover:bg-gray-400 bg-gray-100 w-4 h-4 shadow-md focus:outline-none"
        :class="index === activeCarousel && 'bg-primary'"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeCarousel: 0,
      carousels: [
        "bg-yellow-500",
        "bg-green-500",
        "bg-pink-500",
        "bg-blue-900",
      ],
      interval: null,
    };
  },
  mounted() {
    this.createSlider();
  },
  methods: {
    clearSlider() {
      clearInterval(this.interval);
    },
    createSlider() {
      this.interval = setInterval(() => {
        this.activeCarousel =
          this.activeCarousel === this.carousels.length - 1
            ? 0
            : this.activeCarousel + 1;
      }, 500);
    },
  },
  beforeUnmount() {
    this.clearSlider();
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0.5;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>