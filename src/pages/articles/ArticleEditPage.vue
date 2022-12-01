<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[650px]">
      <h1 class="text-2xl font-extrabold text-gray-600 sm:text-3xl md:text-5xl mb-7">
        <span class="text-indigo-400">Editar</span> noticia.
      </h1>
      <ArticleForm
        v-if="article"
        :defaultArticle="this.article"
      />
    </div>
  </div>
</template>

<script>
import ArticleForm from '@/components/ArticleForm.vue';
import axios from 'axios';

export default {
  name: 'ArticleEditPage',
  components: {ArticleForm},
  data() {
    return {
      id: this.$route.params.id,
      article: null
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
  }, async mounted () {
    await this.getArticle();
  }
}
</script>
