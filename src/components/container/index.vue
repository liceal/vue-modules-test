<template>
  <div class="container">
    <span class="title" v-if="title">{{title}}</span>
    <slot name="content"></slot>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {
  name: "container",
  props: {
    title: {
      type: String
    }
  }
};
</script>

<style lang="less">
.container {
  margin-bottom: 10px;
  min-height: 200px;
  max-height: 600px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 20px black;
  width: 80%;
  padding: 10px;
  overflow: scroll;
  position: relative;
  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c2c2c2;
    border: 2px solid #fafafa;
  }
  &::-webkit-scrollbar-thumb:hover {
    border-radius: 10px;
    background-color: red;
    border: 2px solid #fafafa;
  }
  &:hover {
    .title {
      top: -40px;
    }
  }
  .title {
    z-index: 999;
    top: 0px;
    border-radius:11px;
    user-select: none;
    padding: 20px;
    position: absolute;
    font-weight: 600;
    color: black;
    font-size: 20px;
    line-height: 0px;
    background-image: linear-gradient(60deg, red, yellow, blue);
    display: block;
    min-width: 100px;
    height: 30px;
    transition: all ease 0.3s;
    &::after {
      border-radius: 10px;
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-shadow: 0 0 10px 10px #ffffff inset;
    }
    &:hover {
      opacity: 0.3;
    }
  }
}
</style>