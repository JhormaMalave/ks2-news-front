<template>
  <div id="app">
    <editor :init="init"
      v-model="content"

    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

// TinyMCE
import 'tinymce/tinymce'
import 'tinymce/icons/default/icons'
import 'tinymce/themes/silver/theme'
import 'tinymce/models/dom/model'
import 'tinymce/skins/ui/oxide/skin.css'
import contentUiCss from 'tinymce/skins/ui/oxide/content.css';

// TinyMCE plugins
// https://www.tiny.cloud/docs/tinymce/6/plugins/
import 'tinymce/plugins/lists/plugin'
import 'tinymce/plugins/link/plugin'
import 'tinymce/plugins/image/plugin'
import 'tinymce/plugins/table/plugin'
import 'tinymce/plugins/code/plugin'
import 'tinymce/plugins/help/plugin'
import 'tinymce/plugins/wordcount/plugin'

import Editor from '@tinymce/tinymce-vue'

export default defineComponent({
  name: 'RichText',
  props: {
    contentValue: String,
    editContent: Function
  },
  components: {
    'editor': Editor,
  },
  data: () => {
    return {
      content: '',
    };
  },
  setup () {
    return {

      init: {
        menubar: false,
        skin: false,
        plugins: 'lists link image table code help wordcount',
        content_css: false,
        content_style: contentUiCss.toString()
      },
    }
  },
  watch: {
    content: function () {
      console.log(this.contentValue)
      this.editContent(this.content)
    }
  },
  created () {
    if (this.contentValue) {
      this.content = this.contentValue;
    }
  }
})
</script>

