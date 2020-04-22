<template>
  <div>
    <swiper class="swiper" :options="swiperOptions" ref="swiper">
      <swiper-slide class="slide slide1 swiper-no-swiping">
        <span>this is slide actived</span>
      </swiper-slide>
      <swiper-slide class="slide slide2 swiper-no-swiping">
        <button @click="toggleMenu($event)" :class="menuOpened ? 'opened':'closed'" />
        <span>Hello Wrold</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "swiper6",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      menuOpened: false, //false 上一页 true下一页
      swiperOptions: {
        initialSlide: 1,
        resistanceRatio: 0, //边缘阻尼0
        slidesPerView: "auto", //自由页
        noSwiping: true, //禁止滑动切换 需要给slide 加 class="swiper-no-swiping"
        on: {
          slideChange() {
            //改变页数触发事件
            console.log("改变了");
          }
        }
      }
    };
  },
  methods: {
    toggleMenu(event) {
      /**
       * slideNext() 下一页
       * slidePrev() 上一页
       */
      this.menuOpened ? this.swiper.slideNext() : this.swiper.slidePrev();
      console.log(this.menuOpened);
      /**
       * activeIndex 当前页 0第一页
       * 如果是第0页 按钮CLOSE
       * 如果是第1页 按钮OPEN
       */
      this.menuOpened = this.swiper.activeIndex === 0;
    }
  },
  computed: {
    swiper() {
      //实例
      return this.$refs.swiper.$swiper;
    }
  }
};
</script>

<style lang="less" scoped>
.swiper {
  height: 300px;
  font-size: 50px;
  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .slide1 {
    background-color: aquamarine;
    width: 300px;
  }
  .slide2 {
    button {
      font-size: 30px;
      width: 120px;
      position: absolute;
      top: 0;
    }
    .closed {
      &::before {
        content: "OPEN";
      }
    }
    .opened {
      &::before {
        content: "CLOSE";
      }
    }

    background-color: bisque;
    width: 100%;
  }
}
</style>