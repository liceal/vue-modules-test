<template>
  <div>
    <div style="fontAlign:center">{{ title }}</div>
    <vue-waterfall-easy
      @click="clickFn"
      style="height:100vh;"
      :imgsArr="imgsArr"
      @scrollReachBottom="getData"
      :enablePullDownEvent="true"
    >
      <div slot-scope="props">
        <p>第{{ props.index + 1 }}张图片</p>
        <p>{{ props.value.src }}</p>
      </div>
    </vue-waterfall-easy>
  </div>
</template>

<script>
/**
 * https://github.com/lfyfly/vue-waterfall-easy/blob/master/README-CN.md
 */
import vueWaterfallEasy from "vue-waterfall-easy";
export default {
  data() {
    return {
      title: "瀑布流",
      imgsArr: [
        { src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src
        { src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src{ src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: require("@@/img/4.jpg"), href: "#" }, //动态src
      ],
    };
  },
  components: {
    vueWaterfallEasy,
  },
  methods: {
    getData() {
      console.log("图片到底了");
      this.imgsArr.push(
        { src: "./img/1.jpg", href: "#" },
        { src: "./img/2.jpg", href: "#" },
        { src: "./img/3.jpg", href: "#" },
        { src: "./img/4.jpg", href: "#" }
      );
    },
    clickFn(event, { index, value }) {
      console.log(event, index, value);
      event.preventDefault(); //阻止冒泡
    },
  },
};
</script>
