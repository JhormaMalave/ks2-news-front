<template>
  <div class="flex justify-center w-full  shadow-lg mb-5 p-2 pl-4">
    <div class="p-2 flex justify-between max-w-['700px'] w-full ">
      <router-link to="/" class="ml-3 text-4xl text-gray-600 font-mono font-bold self-center justify-self-center hover:scale-105"><span class="text-blue-600">KS</span>2</router-link>
      <router-link class="text-indigo-400 bg-white  focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-indigo-400 border-w-2 text-sm font-bold py-3 px-8 hover:text-white hover:bg-indigo-600 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-indigo-600 dark:hover:text-white dark:hover:bg-indigo-600 dark:focus:ring-gray-600" to="/articles/new">
        Nueva noticia
      </router-link>
    </div>
  </div>
  <router-view />
</template>
