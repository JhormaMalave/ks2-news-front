<template>
  <div class="flex items-center justify-center p-8">
    <div class="mx-auto w-full max-w-[650px]">
      <h1 class="text-2xl font-extrabold text-gray-600 sm:text-3xl md:text-5xl mb-2">
        {{ article.title }}.
      </h1>
      <p class="font-bold text-indigo-400 text-2xl mb-7">{{ article.author }}</p>
      <div class="w-full bg-indigo-400 max-h-[415px] h-[50vw] rounded-lg overflow-hidden">
        <img :src="article.image" alt="plant" class="object-cover h-full w-full" />
      </div>
      <p class="text-right text-gray-400 mb-7">{{ dateTime(article.createdAt) }}</p>
      <div>{{ article.content }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'ArticleShowPage',
  data() {
    return {
      id: this.$route.params.id,
      article: null,
    }
  },
  methods: {
    async getArticle () {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/articles/${this.id}`
        );

        this.article = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    dateTime(value) {
      moment.locale();
      return moment(value).format('lll');
    },
  },
  created () {
    this.getArticle();
  }

}
</script>
