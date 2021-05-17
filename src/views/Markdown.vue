<template>
  <h2 class="text-4xl mb-10 font-bold text-secondary text-center">Markdown</h2>
  <div
    class="h-screen grid grid-cols-1 md:grid-cols-2 gap-4 container mx-2 sm:mx-3 md:mx-0"
  >
    <textarea
      class="focus:ring-2 focus:ring-primary transition focus:outline-none rounded-sm text-lg text-gray-900 m-0 bg-gray-200 w-full h-full p-4"
      :value="text"
      @input="updateText"
      autofocus
    ></textarea>
    <div
      class="rounded-sm text-gray-900 m-0 bg-primary bg-opacity-40 w-full h-full p-4"
      v-html="markedText"
    ></div>
  </div>
</template>

<script>
import marked from "marked";
import debounce from "../utilities/mixins/debounce";

export default {
  mixins: [debounce],

  data() {
    return {
      text: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    updateText(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
};
</script>

<style>
</style>