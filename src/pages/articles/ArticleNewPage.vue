<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[650px]">
      <h1 class="text-2xl font-extrabold text-gray-600 sm:text-3xl md:text-5xl mb-7">
        Deseas <span class="text-indigo-400">crear</span> una noticia?
      </h1>
      <ArticleForm
        formAction="http://localhost:3000/api/articles"
      />
    </div>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue';

export default {
  name: 'ArticleNewPage',
  components: {ArticleForm}
}
</script>
