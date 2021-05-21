<template>
  <button
    class="focus:ring-1 ring-primary focus:outline-none text-primary text-2xl hover:text-indigo-900 material-icons"
    @click="state.isModalOpen = true"
  >
    add_circle_outline
  </button>
  <modal
    title="Add user"
    v-if="state.isModalOpen"
    @close="state.isModalOpen = false"
  >
    <form class="mt-8 space-y-6" @submit.prevent="submit">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label class="sr-only">Name</label>
          <input
            type="text"
            class="input-control"
            placeholder="Name"
            v-model="state.form.name"
          />
        </div>
        <div>
          <label class="sr-only">Email address</label>
          <input
            type="email"
            class="input-control"
            placeholder="Email address"
            v-model="state.form.email"
          />
        </div>
        <div>
          <label class="sr-only">Avatar Url</label>
          <input
            type="text"
            class="input-control"
            placeholder="Avatar url"
            v-model="state.form.avatar"
          />
        </div>
      </div>

      <p class="text-red-600 text-md flex items-center" v-if="state.error">
        <span class="material-icons mr-2"> error </span>
        {{ state.error }}
      </p>
      <div>
        <button
          :disabled="state.isLoading"
          type="submit"
          class="form-button w-full"
        >
          <span v-if="!state.isLoading">{{
            state.form._id ? "UPDATE" : "ADD"
          }}</span>
          <span v-else class="material-icons animate-spin text-primary">
            hourglass_empty
          </span>
        </button>
      </div>
    </form>
  </modal>
</template>

<script>
import { reactive } from "vue";
import Modal from "./Modal.vue";
import axios from "../api/axios";

const initialForm = () => {
  return {
    name: null,
    email: null,
    avatar: null
  };
};

export default {
  components: { Modal },
  emits: ["user-added"],
  setup(_, { emit }) {
    const state = reactive({
      isModalOpen: false,
      isLoading: false,
      error: null,
      form: initialForm()
    });

    const submit = async () => {
      state.isLoading = true;
      state.error = null;
      try {
        const { data } = await axios.post("/users", state.form);
        emit("user-added", data);
        state.form = initialForm();
        state.isModalOpen = false;
        state.error = null;
      } catch (error) {
        state.error = error.message;
      }
      state.isLoading = false;
    };

    return { state, submit };
  }
};
</script>

<style>
</style>