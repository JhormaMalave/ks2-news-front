<template>
    <form @submit.prevent="onSubmit" action="#" method="POST">
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
          placeholder="Titulo"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          v-model="title"
        />
        <ErrorMessage name="title" class="font-medium text-red-400" />

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
          v-model="author"
          id="author"
          placeholder="Autor"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
        <ErrorMessage name="author" class="font-medium text-red-400" />

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
        <RichText />
      </div>
      <div>
        <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
          type="submit"
        >
          Guardar
        </button>
      </div>
    </form>
</template>

<script setup>
import { useForm, useField, } from 'vee-validate';
const { handleSubmit, setFieldValue, setValues } = useForm();

// Validations functions
const validateTitle = (value) => {
  if (!value) {
    return 'Debes colocar el titulo'
  }
  if (value.length > 150) {
    return 'El titulo excede el maximo de 150 caracteres'
  }

  return true;
}

const validateAuthor = (value) => {
  if (!value) {
    return 'Debes colocar el autor'
  }
  if (value.length > 150) {
    return 'El autor excede el maximo de 150 caracteres'
  }

  return true;
}

setFieldValue('title', '');
setValues({
  title: '',
  author: ''
});

const { value: title } = useField('title', validateTitle);
const { value: author } = useField('author', validateAuthor);

function onInvalidSubmit({ values, errors, results }) {
  console.log(errors)
}



const onSubmit = handleSubmit(async values => {
  const articleValues = {
    title: values.title,
    body: values.author,
    categoryId: 6,
    content: 'Cuerpo de ejemplo',
  };

  try {

    const response = await axios.post('http://localhost:3000/api/articles/', articleValues);

    if(response.status === 200) {
      router.push({ path : '/' });
    }
  } catch (error) {
    console.log(error);
  }
}, onInvalidSubmit);
</script>




<script>
import RichText from './RichText.vue';
import { ErrorMessage } from 'vee-validate';
import axios from 'axios';
import router from '../router';

export default {
  name: 'ArticleForm',
  components: {
    RichText,
    ErrorMessage
  },
  data: () => {
    return {
      title: '',
      author: ''
    };
  },
  methods: {
    validateTitle (title) {
      if (!title) {
        return 'Debes ingresar el titulo';
      }

      return true;
    }
  }
}
</script>
