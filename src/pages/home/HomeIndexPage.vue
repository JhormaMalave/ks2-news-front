<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[750px]">
      <h1 class="text-2xl font-extrabold text-gray-600 sm:text-3xl md:text-5xl mb-7">
        Ks2 newspapers
      </h1>
      <SearchArticles :getArticles="getArticles" />
      <ArticleCards :articles="articles" />
    </div>
  </div>
</template>

<script>
import ArticleCards from '@/components/ArticleCards.vue';
import SearchArticles from '@/components/SearchArticles.vue';
import axios from 'axios';

export default {
  name: 'HomeIndexPage',
  components: {SearchArticles, ArticleCards},
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async getArticles (params= '') {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/articles/${params}`
        );
        console.log(response)
        // JSON responses are automatically parsed.
        this.articles = response.data;
      } catch (error) {
        console.log(error);
      }
      console.log(this.articles)
    }
  },
  created () {
    this.getArticles();
  }
}
</script>
