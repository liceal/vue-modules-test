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
*{
  transition:all .5s;
}
.main{
  background-color: #002b36;
  display: flex;
  align-items: center;
}

.css-code{
  border: 1px solid yellowgreen;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  width: 30vw;
  height: 80vh;
  overflow:auto;
}

/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

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
const cvEdit=`
# 这是h1
> 这里注解

* 111
* 222
`
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
      await this.progressivelyShowStyle(50);
      await this.progressivelyShowCV(100)
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
    progressivelyShowCV(delay){
      return new Promise((resolve, reject) => {
        let cvCodeLength = cvEdit.length;
        let showNextCode = async (nextCodeIndex) => {
          if (nextCodeIndex <= cvCodeLength) {
            this.cvCode = cvEdit.substring(0, nextCodeIndex + 1);
            setTimeout(() => {
              showNextCode(nextCodeIndex + 1);
            }, delay);
          } else {
            resolve();
          }
        };
        showNextCode(0);
      });
    }
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