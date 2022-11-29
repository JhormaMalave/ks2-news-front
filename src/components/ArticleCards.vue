<template>
  <div class="grid mt-7 sm:grid-cols-2 lg:grid-cols-3 grid-cols-none gap-4">
    <ArticleCard
      v-for="article in articles" :key="article.id"
      :id="article.id"
      :title="article.title"
      :author="article.author"
    />
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue';

export default {
  name: 'ArticleCards',
  components: {ArticleCard},
  props: {
    articles: Array
  },
}
</script>
