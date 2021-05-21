<template>
  <page-title title="Tensorflow" />

  <div class="w-96">
    <button v-if="!isStreaming" @click="openCamera" class="form-button w-full">
      Open Camera
    </button>
    <div v-else class="flex justify-between">
      <button @click="stopStreaming" class="form-button">Stop Streaming</button>
      <button @click="takeSnapshot" class="form-button">Take Snapshot</button>
    </div>

    <div class="flex justify-center my-3">
      <video autoplay ref="videoRef" width="200" class="mt-4" />
    </div>

    <div class="flex justify-center my-3">
      <img
        ref="imgRef"
        src="@/assets/13.png"
        width="200"
        crossorigin="anonymous"
      />
    </div>
    <p
      v-if="result.length > 0"
      class="my-4 text-green-600 text-2xl text-center"
    >
      {{ result }}
    </p>
    <h6
      v-if="detectionError"
      class="my-4 text-red-600 text-md flex break-words text-center"
    >
      <span class="material-icons mr-2"> error </span>
      <p>
        {{ detectionError }}
      </p>
    </h6>
    <div class="flex justify-center flex-wrap">
      <button
        @click="detect"
        :disabled="isLoading"
        type="submit"
        class="form-button w-full"
      >
        <span v-if="!isLoading">Detect Object</span>
        <span v-else class="material-icons animate-spin text-primary">
          hourglass_empty
        </span>
      </button>
      <small class="text-base">Try with cell phone only.</small>
    </div>
  </div>
</template> 

<script>
import { onBeforeUnmount, ref } from "vue";
import PageTitle from "../components/PageTitle.vue";

require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

export default {
  components: { PageTitle },

  setup() {
    const imgRef = ref(null);
    const detectionError = ref(null);
    const isLoading = ref(false);
    const result = ref([]);
    const videoRef = ref(null);
    const isStreaming = ref(false);

    const detect = async () => {
      isLoading.value = true;
      try {
        const img = imgRef.value;
        const model = await cocoSsd.load();
        const predictions = await model.detect(img);
        result.value = predictions[0]
          ? predictions[0].class
          : "Can't detect object";
      } catch (error) {
        detectionError.value = error.message;
      }
      isLoading.value = false;
    };

    const openCamera = async () => {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const cams = devices.filter(device => device.kind === "videoinput");
        const camId = cams[0].deviceId;

        navigator.mediaDevices
          .getUserMedia({
            video: { deviceId: { exact: camId } }
          })
          .then(stream => {
            isStreaming.value = true;
            videoRef.value.srcObject = stream;
          });
      }
    };

    const stopStreaming = () => {
      const stream = videoRef.value.srcObject;
      const tracks = stream.getTracks();
      tracks.map(track => track.stop());
      isStreaming.value = false;
    };

    const takeSnapshot = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoRef.value, 0, 0, 200, 200);
      const data = canvas.toDataURL("image/png");
      imgRef.value.setAttribute("src", data);
    };

    onBeforeUnmount(() => stopStreaming());

    return {
      imgRef,
      detect,
      isLoading,
      detectionError,
      result,
      openCamera,
      videoRef,
      isStreaming,
      stopStreaming,
      takeSnapshot
    };
  }
};
</script>

<style>
</style>