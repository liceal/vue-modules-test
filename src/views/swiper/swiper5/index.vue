<template>
  <swiper class="swiper" :options="swiperOption">
    <!-- 
      slot="parallax-bg" 背景插槽
      data-swiper-parallax="-20%" 视差效果 从左到右 背景图片最多偏移的百分比
     -->
    <div class="parallax-bg" slot="parallax-bg" data-swiper-parallax="-20%"></div>
    <swiper-slide>
      <!-- 内容，每一页的内容，随便写 -->
      <div class="title" data-swiper-parallax="-100">Slide 1</div>
      <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
      <div class="text" data-swiper-parallax="-360">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-100">Slide 2</div>
      <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
      <div class="text" data-swiper-parallax="-360">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="title" data-swiper-parallax="-100">Slide 3</div>
      <div class="subtitle" data-swiper-parallax="-240">Subtitle</div>
      <div class="text" data-swiper-parallax="-360">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.</p>
      </div>
    </swiper-slide>
    <!-- 
      pagination 滚动条
      button-prev 上一页 < 
      button-next 下一页 >
     -->
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper-example-parallax",
  title: "Parallax",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        speed: 600, // 过渡速度
        parallax: true, //开启视差效果
        pagination: {
          el: ".swiper-pagination", // 下面的点点 ... 绑定class
          clickable: true //点点 可以点击跳转
        },
        navigation: {
          nextEl: ".swiper-button-next", //下一页 > 绑定class
          prevEl: ".swiper-button-prev"  //上一页 < 绑定class
        }
      }
    };
  }
};
</script>

<style lang="less" scoped>
.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: left;
  background-image: url("../../../assets/img/2.jpg");
}
.swiper {
  width: 100%;
  height: 380px;
  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    box-sizing: border-box;
    padding: 0 80px;
    background-color: transparent;
    .title {
      font-weight: bold;
    }
    .subtitle {
      text-align: left;
      margin-left: 50px;
      margin-bottom: 30px;
      font-size: 30px;
    }
    .text {
      max-width: 430px;
      line-height: 1.32;
    }
  }
}
</style>