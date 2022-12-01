<template>
    <div class="overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <div class="bg-indigo-100 sm:h-[14vw] max-h-[150px] w-full overflow-hidden">
        <img :src="image" alt="plant" class="h-full object-cover w-full" />
      </div>
      <div class="p-5">
        <router-link :to="`articles/${id}/`">
          <p class="text-gray-900 font-bold text-2xl tracking-tight mb-1 dark:text-white truncate hover:text-indigo-400">
            {{ title }}
          </p>
        </router-link>
        <p class="text-medium mb-4 text-gray-700">{{ dateTime(createdAt) }}</p>
        <div class="flex justify-between">
          <router-link :to="`articles/${id}/edit`" class="text-orange-400 font-bold duration-200 hover:scale-105 hover:text-orange-800">
            Editar
          </router-link>
          <button @click="handleShowDeleteModal" class="z-10	text-red-400 font-bold duration-200 hover:scale-105 hover:text-red-800" to="/articles/new">
            Eliminar
          </button>
        </div>
      </div>
    </div>
    <DeleteModal
      v-if="showDeleteModal"
      :actionButton="destroyArticle"
      :closeModal="handleHiddeDeleteModal"
      :title="title"
      :id="id"
    />
</template>

<script setup>
import moment from 'moment';
import axios from 'axios';
import DeleteModal from '@/components/DeleteModal.vue';
import { ref } from 'vue';

const showDeleteModal = ref(false);

const handleShowDeleteModal = () => showDeleteModal.value = true;
const handleHiddeDeleteModal = () => showDeleteModal.value = false;

const destroyArticle = async (value) => {
  try {
    const response = await axios.delete(`http://localhost:3000/api/articles/${value}`);

  if(response.status === 200) {
    props.refreshArticles();
    sessionStorage.setItem('alert', 'La noticia fue eliminada exitosamente');
  }
  } catch (error) {
    console.log(error);
  }
}
const dateTime = (value) => {
  moment.locale();
  return moment(value).format('lll');
}

const props = defineProps({
  title: String,
  createdAt: String,
  image: String,
  refreshArticles: Function,
  id: Number
});


</script>
