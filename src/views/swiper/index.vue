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
       * /\.\/swiper.*\/.*\.vue/
       * /\.\/.*\/.*\.vue$/
       * @return Array
       */
      const files = require.context(
        "@/views/swiper",
        true,
        /\.\/.*\/.*\.vue$/
      ); //找swiper文件夹
      let i = 0;
      files.keys().forEach(element => {
        /**
         * /swiper\d{1,2}/
         */
        const fileName = element.match(/\.\/(.*)\//)[1];
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