<template>
  <div class="flex items-center justify-center p-12">
    <div class="mx-auto w-full max-w-[650px]">
      <h1 class="text-2xl font-extrabold text-gray-600 sm:text-3xl md:text-5xl mb-7">
        Ks2 newspapers
      </h1>
      <SearchArticles />
    </div>
  </div>
</template>

<script>
import SearchArticles from '@/components/SearchArticles.vue';


export default {
  name: 'HomeIndexPage',
  components: {SearchArticles}
}
</script>
