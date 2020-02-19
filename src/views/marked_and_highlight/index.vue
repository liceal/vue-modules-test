<template>
  <div>
    {{value}}
    <p v-html="html"></p>
    <hr />
    
    <textarea name id cols="30" rows="10" v-model="code" style="margin:auto"></textarea>
    <p v-html="hljsCode"></p>
    <hr />

    <p v-html="phpCode"></p>

  </div>
</template>

<script>
/**
 * https://github.com/markedjs/marked
 * marked 将markdown代码转成html解析 转成html代码
 *
 * https://github.com/highlightjs/highlight.js
 * hljs 代码高亮
 * 引入css库有效果
 */
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import php from "highlight.js/lib/languages/php"; //引入指定解析类型
export default {
  data() {
    return {
      value: `
# h1
## h2

> hello world

\`\`\`
<span>Hello World!</span>
\`\`\`
`,
      html: "",
      code: "<span>Hello World!</span>",
      hljsCode: "",
      phpCode: `
只解析php代码
# PHP

$val = "hello world";
echo $this->$val;
`
    };
  },
  created() {
    //智能代码高亮
    this.hljsCode = hljs.highlightAuto(this.code).value;

    //marked解析设置
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    this.html = marked(this.value);

    //指定解析类型
    hljs.registerLanguage(this.code, php); //设置高亮语言
    this.phpCode = hljs.highlight("php", this.phpCode).value;
  },
  watch: {
    code(val) {
      this.hljsCode = hljs.highlightAuto(val).value;
    }
  }
};
</script>