<template>
  <div v-if="message" class="fixed top-5 left-0 right-0 m-auto bg-green-100 rounded-lg max-w-[500px] p-4 mb-4 text-sm text-green-700" role="alert">
    <div class="flex justify-between items-center">
      <p>
        <span class="font-bold">Notificacion:</span> {{ message }}

      </p>
      <button type="button" class="text-green-400 bg-transparent hover:bg-green-200 hover:text-green-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-green-600 dark:hover:text-white" @click="remoseAlert">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const message = ref();

const getMessage = async () => sessionStorage.getItem('alert');
const remoseAlert = async () => {
  sessionStorage.removeItem('alert')
  message.value = null
};

onMounted(async () => {
  message.value = await getMessage();
});

</script>
