<template>
  <div>
    <trend
      :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
      :gradient="['#6fa8dc', '#42b983', '#2c3e50','red']"
      gradientDirection="left"
      :auto-draw="true"
      :smooth="true"
      :autoDrawDuration="5000"
    ></trend>
    <hr />
    <trend :data="[0,10,0]" :gradient="['red','green','blue']" auto-draw smooth></trend>
  </div>
</template>

<script>
/**
 * https://github.com/QingWei-Li/vue-trend
 * 说实话，有点帅！
 * 就是简单的线条
 * 构建出来是<svg></svg>
 * 还带色彩渐变的卧槽了
 *
 */
import Vue from "vue";
import Trend from "vuetrend";
Vue.use(Trend);
export default {
  name: "VueTrend"
};
</script>