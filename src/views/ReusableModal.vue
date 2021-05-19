<template>
  <page-title title="Reusable Modal" />

  <div class="space-y-4">
    <button @click="isLargeModalOpen = true" class="form-button">
      Open Large Modal
    </button>
    <button @click="isSmallModalOpen = true" class="form-button">
      Open Small Modal
    </button>

    <modal
      title="Large Modal"
      width="1/2"
      v-if="isLargeModalOpen"
      @close="isLargeModalOpen = false"
    >
      <template #header>Large Modal</template>
      <p class="text-center mb-10">This is the large modal</p>
    </modal>
    <modal
      title="Small Modal"
      v-if="isSmallModalOpen"
      @close="isSmallModalOpen = false"
    >
      <template #header>Small Modal</template>
      <p class="text-center mb-10">This is the small modal</p>
    </modal>
  </div>
</template>

<script>
import { ref } from "vue";
import PageTitle from "../components/PageTitle.vue";
import Modal from "../components/Modal.vue";

export default {
  components: { PageTitle, Modal },

  setup() {
    const isLargeModalOpen = ref(false);
    const isSmallModalOpen = ref(false);

    return { isLargeModalOpen, isSmallModalOpen };
  }
};
</script>

<style>
</style>