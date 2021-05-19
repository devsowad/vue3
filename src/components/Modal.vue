<template>
  <teleport to="body">
    <div>
      <div
        @click="$emit('close')"
        class="fixed inset-0 w-screen h-screen bg-gray-600 z-20 bg-opacity-60"
      ></div>
      <div class="absolute inset-0">
        <div class="flex h-full">
          <div
            :class="`w-${width}`"
            class="z-30 bg-white p-4 m-auto rounded shadow"
          >
            <div class="flex justify-between items-center">
              <h2 class="text-base">{{ title }}</h2>
              <button
                @click="$emit('close')"
                class="icon-button material-icons"
              >
                close
              </button>
            </div>
            <div>
              <h1 class="font-bold text-center my-10">
                <slot name="header"></slot>
              </h1>
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    title: String,
    width: { type: String, default: "1/3" }
  },
  emits: ["close"],

  setup() {
    // return { props };
  }
};
</script>

<style>
</style>