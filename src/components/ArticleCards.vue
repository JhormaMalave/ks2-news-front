<template>
  <div class="grid mt-7 sm:grid-cols-2 lg:grid-cols-3 grid-cols-none gap-4">
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
    <ArticleCard />
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue';

export default {
  name: 'ArticleCards',
  components: {ArticleCard}
}
</script>
