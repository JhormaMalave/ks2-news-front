<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[650px]">
      <h1 class="text-2xl font-extrabold text-gray-600 sm:text-3xl md:text-5xl mb-7">
        <span class="text-indigo-400">Editar</span> noticia.
      </h1>
      <ArticleForm
        :defaultArticle="article"
      />
    </div>
  </div>
</template>

<script setup>
import ArticleForm from '@/components/ArticleForm.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const article = ref("");

const id = 29

const getArticle = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/articles/${id}`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  article.value = await getArticle();
})
</script>
