<template>
    <router-link :to="'articles/' + id" class="overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
      <div class="bg-indigo-100 sm:h-[14vw] max-h-[150px] w-full overflow-hidden">
        <img :src="image" alt="plant" class="h-auto w-full" />
      </div>
      <div class="p-5">
        <p class="text-gray-900 font-bold text-2xl tracking-tight mb-1 dark:text-white">{{ title }}</p>
        <p class="text-medium mb-5 text-gray-700">{{ dateTime(createdAt) }}</p>
      </div>
    </router-link>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ArticleCard',
  props: {
    title: String,
    createdAt: String,
    image: String,
    id: Number
  },
  methods: {
    dateTime(value) {
      moment.locale();
      return moment(value).format('lll');
    },
  }
}
</script>
