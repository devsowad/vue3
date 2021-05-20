<template>
  <page-title title="Chat" />
  <div
    class="w-full max-w-lg mx-auto space-x-3 rounded-lg shadow-2xl p-8 text-lg"
  >
    <div class="m-0">
      <chat-message
        :own="chat.userId === userId ? true : false"
        v-for="chat in state.chats"
        :key="chat.message"
      >
        {{ chat.message }}
      </chat-message>

      <form @submit.prevent="send" class="flex justify-between items-center">
        <input
          ref="messageInput"
          v-model="state.message"
          type="text"
          placeholder="Type a message"
          class="input-control"
        />
        <button type="submit" class="material-icons submit-button">send</button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import PageTitle from "../components/PageTitle.vue";
import { chatsRef } from "../utilities/firebase";
import ChatMessage from "../components/ChatMessage.vue";
import { useStore } from "vuex";

export default {
  components: { PageTitle, ChatMessage },

  setup() {
    const messageInput = ref(null);

    const state = reactive({
      chats: [],
      message: null
    });

    const store = useStore();
    const userId = computed(() => store.state.authUser?.uid);

    onMounted(async () => {
      chatsRef.on("child_added", data => {
        state.chats.push({ key: data.key, ...data.val() });
      });
    });

    const send = () => {
      state.message &&
        chatsRef.push().set({ userId: userId.value, message: state.message });
      state.message = null;
    };

    return { state, send, messageInput, userId };
  }
};
</script>

<style lang="postcss" scoped>
.submit-button {
  @apply w-11 bg-gray-300 rounded-full h-10 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 text-2xl ml-2;
}
</style>