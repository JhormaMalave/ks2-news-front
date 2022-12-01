<template>
  <div class="grid mt-7 sm:grid-cols-2 lg:grid-cols-3 grid-cols-none gap-4">
    <ArticleCard
      v-for="article in articles" :key="article.id"
      :id="article.id"
      :title="article.title"
      :image="article.image"
      :createdAt="article.createdAt"
      :refreshArticles= "refreshArticles"
    />
  </div>
</template>

<script setup>

import ArticleCard from './ArticleCard.vue';
defineProps({
  articles: Array,
  refreshArticles: Function
})

</script>
