<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[750px]">
      <SearchArticles :getArticles="getArticles" />
      <ArticleCards :articles="articles" :refreshArticles="getArticles" />
      <div v-if="(articles.length == 0)">
        <h1 class="text-2xl my-[10vh] font-extrabold center text-gray-300 sm:text-3xl md:text-5xl mb-7">
          No hay nada que mostrar, te invitamos a ser el primero en <router-link to='/articles/new' class="text-indigo-500" >Crear</router-link> una noticia.
        </h1>
      </div>
    </div>
  </div>
  <AlertMessage />
</template>

<script setup>
import AlertMessage from '@/components/AlertMessage.vue';
import ArticleCards from '@/components/ArticleCards.vue';
import SearchArticles from '@/components/SearchArticles.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const articles = ref([]);

const getArticles =  async (params= '') => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/articles/${params}`
    );

    articles.value = response.data;
  } catch (error) {
    console.log(error);
  }
}

onMounted( () => {
  getArticles();
});
</script>
