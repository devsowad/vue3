<template>
  <div :class="own ? 'justify-end' : 'justify-start'" class="flex mb-5">
    <p
      :class="own ? 'bg-gray-300' : 'bg-primary text-white'"
      class="shadow-md max-w-xs text-sm py-2 px-3 rounded-md"
    >
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    own: Boolean
  }
};
</script>

<style>
</style>