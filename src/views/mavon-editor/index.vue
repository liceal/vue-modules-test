<template>
  <div>
    <mavon-editor
     :value="value"
     :language="language"
     :ishljs = "true"
    ></mavon-editor>
  </div>
</template>

<script>
/**
 * https://github.com/hinesboy/mavonEditor
 * 文档是中文的，比较易懂的markdown插件
 * markdown 编辑器
 */
import Vue from "vue";
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);
export default {
  data() {
    return {
      value: `
hello world,
你好世界
# 你好世界
`,
      language:'zh-Ch'
    };
  },
  components: {
    mavonEditor
  }
};
</script>