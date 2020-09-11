<template>
  <div>
    <!-- <pre v-html="content" /> -->
    <div v-if="isMarked" v-html="content"></div>
    <pre v-else v-html="content"></pre>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "cvEditor",
  props: {
    code: {
      type: String,
      defalut: ""
    },
    isMarked:{
      type:Boolean,
      defalut:false
    }
  },
  computed: {
    content(){
      return this.isMarked?marked(this.code):this.code
    }
  },
  methods: {
    toMd() {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function (code) {
          return hljs.highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false,
      });
      this.code = marked(this.code);
    },
  },
};
</script>

<style>
</style>
