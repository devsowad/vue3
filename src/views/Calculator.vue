<template>
  <page-title title="Calculator" />

  <div
    class="w-full max-w-lg mx-auto space-x-3 rounded-lg shadow-2xl p-8 text-lg"
  >
    <p
      class="h-14 border text-lg rounded border-secondary items-center flex px-3 overflow-x-auto"
      style="direction: rtl"
    >
      <span v-if="!result">{{ currentNum }}</span>
      <span v-else>{{ result }}</span>
    </p>
    <p
      class="h-12 text-lg rounded border-secondary items-center flex overflow-x-auto"
    >
      {{ `${prevNum} ${selectedOperation} ${currentNum}` }}
    </p>
    <div class="grid grid-cols-4 gap-1" style="margin: 0">
      <button
        v-for="key in keys"
        :key="key"
        class="calc-button"
        @click="pressed(key)"
      >
        {{ key }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PageTitle from "../components/PageTitle.vue";
import useWindowEvent from "../utilities/composition/useWindowEvent";

export default {
  components: { PageTitle },

  setup() {
    const keys = ref([
      "1",
      "2",
      "3",
      "+",
      "4",
      "5",
      "6",
      "-",
      "7",
      "8",
      "9",
      "*",
      "c",
      "0",
      "=",
      "/"
    ]);
    const currentNum = ref("");
    const prevNum = ref("");
    const selectedOperation = ref("");
    const result = ref("");

    const pressed = key => {
      if (["+", "-", "*", "/"].includes(key)) {
        if (!selectedOperation.value) {
          selectedOperation.value = key;
          prevNum.value = currentNum.value;
          currentNum.value = "";
        } else {
          selectedOperation.value = key;
          equal();
          prevNum.value = result.value;
          currentNum.value = "";
        }
      } else {
        switch (key) {
          case "=":
            equal();
            prevNum.value = "";
            selectedOperation.value = "";
            currentNum.value = result.value;
            break;
          case "c":
            clear();
            break;
          default:
            currentNum.value = currentNum.value + key;
            break;
        }
      }
    };

    const equal = () => {
      currentNum.value = parseInt(currentNum.value);
      prevNum.value = parseInt(prevNum.value);

      if (currentNum.value && prevNum.value) {
        switch (selectedOperation.value) {
          case "+":
            result.value = currentNum.value + prevNum.value;
            break;
          case "-":
            result.value = prevNum.value - currentNum.value;
            break;
          case "*":
            result.value = currentNum.value * prevNum.value;
            break;
          case "/":
            result.value = prevNum.value / currentNum.value;
            break;
        }
      }
    };

    const clear = () => {
      currentNum.value = "";
      result.value = "";
      selectedOperation.value = "";
      prevNum.value = "";
    };

    const handleKeyDown = ({ key }) => {
      if (key === "Enter") {
        pressed("=");
      } else if (key === "Escape") {
        clear();
      } else if (keys.value.includes(key)) {
        pressed(key);
      }
    };

    useWindowEvent("keydown", handleKeyDown);

    return { keys, pressed, currentNum, prevNum, selectedOperation, result };
  }
};
</script>

<style lang="postcss" scoped>
.calc-button {
  @apply items-center h-14 rounded bg-gray-300 text-2xl text-secondary font-bold hover:bg-gray-200 focus:ring-gray-400 focus:ring-2 transition focus:outline-none;
}
</style>