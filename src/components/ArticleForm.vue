<template>


    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Titulo
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="author"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Autor
        </label>
        <input
          type="author"
          name="author"
          id="author"
          placeholder="example@domain.com"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="category"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Categoria
        </label>
        <select id="category" class="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
          <option selected>Noticias</option>
          <option value="1">Sucesos</option>
          <option value="2">Nacionales</option>
        </select>
      </div>
      <div class="mb-5">
        <label
          for="message"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Contenido
        </label>
        <textarea
          rows="4"
          name="content"
          id="content"
          placeholder="Contenido del articulo"
          class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Guardar
        </button>
      </div>
    </form>
</template>

<script>

export default {
  name: 'ArticleForm'
}
</script>
