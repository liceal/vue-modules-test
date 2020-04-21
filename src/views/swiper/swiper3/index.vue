  
<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-pagination",
  title: "Pagination",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        effect: "cube",
        
      }
    };
  }
};
</script>

<style lang="less" scoped>
.swiper {
  height: 200px;
  width: 200px;
  color: gray;
  font-size: 50px;
}
</style>