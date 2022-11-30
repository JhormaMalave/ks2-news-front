<template>
  <div class="flex justify-between max-w-[900px] m-auto w-full bg-gradient-to-r from-gray-200 shadow-lg mt-5 rounded-lg mb-5 p-2 pl-4">
    <router-link to="/" class="ml-3 text-2xl text-gray-600 font-mono font-bold self-center justify-self-center hover:scale-105"><span class="text-blue-600">KS</span>2 <span class="text-thin text-lg underline underline-offset-8 ">Noticias</span></router-link>
    <router-link class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none" to="/articles/new">
      Nueva noticia
    </router-link>
  </div>
  <router-view />
</template>
