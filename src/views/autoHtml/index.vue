<template>
  <div class="main">
    <div class="style" v-html="codeInStyleTag" />
    <StyleEditor class="css-code" :code="styleCode" />
    <CvEditor class="cv-code" :code="cvCode"/>
  </div>
</template>

<script>
import editor from "mavon-editor";
import StyleEditor from "./components/styleEditor";
import CvEditor from './components/styleEditor';
const styleEdit = `
.main{
  transition:all .3s ease-in-out;
  background-color: #002b36;
  display: flex;
  align-items: center;
}

/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

.css-code{
  border: 1px solid yellowgreen;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  width: 30vw;
  height: 80vh;
  overflow:auto;
}

.css-code::-webkit-scrollbar {
  display: none;
}

.css-code pre{
  font-size: 15px;
  margin: 0px 20px;
}

.cv-code{
  width: 30vw;
  height: 80vh;
  background-color: white;
  margin: 20px;
}
`;
export default {
  name: "autoHtml",
  components: {
    StyleEditor,
    CvEditor
  },
  data() {
    return {
      styleCode: "",
      cvCode:""
    };
  },
  created() {
    this.renderEdit();
  },
  methods: {
    async renderEdit() {
      await this.progressivelyShowStyle(10);
    },
    progressivelyShowStyle(delay) {
      return new Promise((resolve, reject) => {
        let styleCodeLength = styleEdit.length;
        let showNextCode = async (nextCodeIndex) => {
          if (nextCodeIndex <= styleCodeLength) {
            this.styleCode = styleEdit.substring(0, nextCodeIndex + 1);
            // console.log(this.styleCode);
            setTimeout(() => {
              showNextCode(nextCodeIndex + 1);
            }, delay);
          } else {
            resolve();
          }
        };
        showNextCode(0);
      });
    },
  },
  computed: {
    codeInStyleTag() {
      return `<style>${this.styleCode}</style>`;
    },
  },
};
</script>

<style lang="less">

@import url("./index.less");
.main{
  width: 100%;
  float: left;
  text-align: left;
}
.style {
  display: none;
}
</style>