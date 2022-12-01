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
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Imagen
        </label>
        <input accept="image/png, image/gif, image/jpeg" class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1]" id="file_input" type="file" v-on:change="handleUploadImage">

        <ErrorMessage name="image" class="font-medium text-red-400" />

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
        <RichText :editContent="editContent" :contentValue="content" />
        <ErrorMessage name="content" class="font-medium text-red-400" />
      </div>
      <input v-if="isEdit" type="hidden" name="_method" value="put" />
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
import RichText from './RichText.vue';
import { ErrorMessage } from 'vee-validate';
import axios from 'axios';
import router from '../router';

const props = defineProps({
  defaultArticle: Object,
  isEdit: Boolean,
  formAction: String
});

const { handleSubmit, setFieldValue, setValues } = useForm();
if (props.defaultArticle) {
  setValues({
    title: props.defaultArticle.title,
    content: props.defaultArticle.content,
    image: props.defaultArticle.image,
    author: props.defaultArticle.author
  })
}


// Validations functions
const validateTitle = (value) => {
  if (!value) {return'Debes colocar el titulo'}
  if (value.length > 150) {return'El titulo excede el maximo de 150 caracteres'}

  return true;
}

const validateAuthor = (value) => {
  if (!value) {return'Debes colocar el autor'}
  if (value.length > 150) {return 'El autor excede el maximo de 150 caracteres'}

  return true;
}

const validateContent = (value) => {
  if (!value) {return 'Debes colocar el contenido del articulo'}

  return true;
}

const validateImage = (value) => {
  if (!value) {return 'Debes subir una imagen'}

  return true;
}

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

// Handles
const editContent = (value) => setFieldValue('content', value);

const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);

    setFieldValue('image', base64);
};

const onInvalidSubmit = ({  errors }) => {
  console.log(errors)
}

const onSubmit = handleSubmit(async values => {
  const articleValues = {
    title: values.title,
    author: values.author,
    categoryId: 6,
    image: values.image,
    content: values.content,
  };

  try {
    let response = null;
    let message = '';

    if (props.isEdit) {
      response = await axios.put(props.formAction, articleValues);
      message = 'La noticia fue actualizada exitosamente';
    } else {
      response = await axios.post(props.formAction, articleValues);
      message = 'La noticia fue creada exitosamente';
    }
    if(response.status === 200) {
      router.push({ path : '/' }, sessionStorage.setItem('alert', message));
    }
  } catch (error) {
    console.log(error);
  }
}, onInvalidSubmit);

// Add validations to vee
const { value: title } = useField('title', validateTitle);validateContent
const { value: author } = useField('author', validateAuthor);
useField('image', validateImage);
const { value: content } = useField('content', validateContent);
</script>
