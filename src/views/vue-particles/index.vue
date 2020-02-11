<template>
  <div class="app">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#FF0000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles"
    ></vue-particles>

    <div class="content">
      <h2>VUE粒子</h2>
      <span>背景特效</span>
    </div>
  </div>
</template>

<script>
/**
 * https://github.com/creotip/vue-particles
 * https://vue-particles.netlify.com/
 * 粒子特效
 */
import Vue from "vue";
import VueParticles from "vue-particles";
Vue.use(VueParticles);
export default {};
</script>

<style lang="less" scoped>
.app {
  position: relative;
  height: 0px;
}
.particles {
  top: 0px;
  position: absolute;
  z-index: -1;
  border: 1px solid red;
  width: 100%;
  height: 500px;
  background-color: #000;
}
.content {
  display: inline-block;
  z-index: 999;
  width: 200px;
  height: 200px;
  background-color: yellowgreen;
  margin: auto;
  margin-top: 150px;
  h2 {
    color: white;
    text-shadow: 8px 8px #000;
  }
}
</style>