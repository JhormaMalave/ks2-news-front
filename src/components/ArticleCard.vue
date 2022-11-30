<template>
    <div class="overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <div class="bg-indigo-100 sm:h-[14vw] max-h-[150px] w-full overflow-hidden">
        <img :src="image" alt="plant" class="h-auto w-full" />
      </div>
      <div class="p-5">
        <router-link :to="('articles/' + id)">
          <p class="text-gray-900 font-bold text-2xl tracking-tight mb-1 dark:text-white truncate hover:text-indigo-400">
            {{ title }}
          </p>
        </router-link>
        <p class="text-medium mb-4 text-gray-700">{{ dateTime(createdAt) }}</p>
        <div class="flex justify-between">
          <router-link class="text-orange-400 font-bold duration-200 hover:scale-105 hover:text-orange-800" to="/articles/new">
            Editar
          </router-link>
          <button @click="destroyArticle(id)" class="z-10	text-red-400 font-bold duration-200 hover:scale-105 hover:text-red-800" to="/articles/new">
            Eliminar
          </button>
        </div>
      </div>
    </div>
</template>

<script setup>
  const destroyArticle = async (value) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/articles/${value}`);

    if(response.status === 200) {
      console.log('El articulo fue eliminado')
    }
    } catch (error) {
      console.log(error);
    }
  }
</script>

<script>
import moment from 'moment';
import axios from 'axios';

export default {
  name: 'ArticleCard',
  props: {
    title: String,
    createdAt: String,
    image: String,
    id: Number
  },
  methods: {
    dateTime(value) {
      moment.locale();
      return moment(value).format('lll');
    },
  }
}
</script>
