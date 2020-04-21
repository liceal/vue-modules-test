<template>
  <div class="swiper">
    <swiper ref="mySwiper" class="content" :options="swiperOption">
      <swiper-slide v-for="(slide,key) in slides" :key="key" :class="'slide'+slide">slide{{slide}}</swiper-slide>
      <!--以下看需要添加-->
      <!-- 标页码 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <!-- 滚动条 -->
    <div class="swiper-scrollbar"></div>
    <!-- 下一项 -->
    <div class="swiper-button-next"></div>
    <!-- 上一项 -->
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      slides: 3,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        navigation: {
          // 绑定参数className
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        initialSlide: 2
      }
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style lang="less" scoped>
.swiper {
  height: 200px;
  color: gray;
  font-size: 50px;
  .content {
    height: 200px;
  }
  .slide1 {
    background-color: red;
  }
  .slide2 {
    background-color: yellow;
  }
  .slide3 {
    background-color: blue;
  }
}
</style>