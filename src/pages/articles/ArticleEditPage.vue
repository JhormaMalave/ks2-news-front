<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[650px]">
      <h1 class="text-2xl font-extrabold text-gray-600 sm:text-3xl md:text-5xl mb-7">
        <span class="text-indigo-400">Editar</span> noticia.
      </h1>
      <ArticleForm
        v-if="article"
        :defaultArticle="article"
        :isEdit="true"
        :formAction="`http://localhost:3000/api/articles/${id}`"
      />
    </div>
  </div>
</template>

<script setup>
import ArticleForm from '@/components/ArticleForm.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const article = ref(null);
const id = ref(useRoute().params.id);

const getArticle = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/articles/${id}`
    );

    return await response.data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(async () => {
  article.value = await getArticle(id.value);
});
</script>
