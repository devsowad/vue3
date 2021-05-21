<template>
  <div>
    <div
      class="w-xl mb-10 flex justify-between shadow-md py-3 px-5 items-center"
    >
      <h2 class="text-xl font-bold text-secondary">User</h2>
      <user-form @user-added="state.users.push(data)" />
    </div>

    <div v-if="state.users.length > 0">
      <table-layout :headers="['Name', 'Email', 'status', 'action']">
        <tr :key="user._id" v-for="user in state.users">
          <td>
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  class="h-10 w-10 rounded-full"
                  :src="user.avatar"
                  alt="avatar"
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ user.name }}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="text-sm text-gray-500 font-medium">
              {{ user.email }}
            </div>
          </td>
          <td>
            <span
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
            >
              Active
            </span>
          </td>
          <td class="text-right font-medium">
            <button
              @click="edit(user._id)"
              class="mr-3 focus:text-opacity-70 focus:outline-none text-primary text-base hover:text-indigo-900 material-icons"
            >
              edit
            </button>
            <button
              @click="deleteUser(user._id)"
              class="focus:text-opacity-70 focus:outline-none text-primary text-base hover:text-indigo-900 material-icons"
            >
              delete
            </button>
          </td>
        </tr>
      </table-layout>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../api/axios";
import TableLayout from "../components/Table/TableLayout.vue";
import UserForm from "../components/UserForm.vue";

export default {
  components: { TableLayout, UserForm },
  setup() {
    const state = reactive({
      users: []
    });

    const deleteUser = async id => {
      await axios.delete(`users/${id}`);
      state.users = state.users.filter(user => user._id !== id);
    };

    onMounted(() => fetchData());

    const fetchData = async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    };

    return { state, deleteUser };
  }
};
</script>