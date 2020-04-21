<template>
  <div>
    <container v-for="(name,key) in requireComponent" :key="key">
      <component :is="name" slot="content"></component>
    </container>
  </div>
</template>

<script>
import container from "../../components/container";
export default {
  data() {
    return {
      requireComponent: []
    };
  },
  components: {
    container
    // swiper1:()=>import('./swiper1')
  },
  mounted() {
    this._FILES();
  },
  methods: {
    /**
     * @return 返回swiper文件夹下的 所有子文件夹名字
     */
    _FILES() {
      /**
       * 参数
       * src 下的 @/指定文件夹
       * 是否 包含子目录 中的文件
       * 匹配文件 正则表达式
       * @return Array
       */
      const files = require.context(
        "@/views/swiper",
        true,
        /\.\/swiper.*\/.*\.vue/
      ); //找swiper文件夹
      let i = 0;
      files.keys().forEach(element => {
        const fileName = element.match(/swiper\d{1,2}/)[0];
        this.requireComponent.push(fileName);
        this.$options.components[fileName] = () => import("./" + fileName);
      });
      // console.log(this.requireComponent);
    }
  }
};
</script>

<style lang="less" scoped>
</style>