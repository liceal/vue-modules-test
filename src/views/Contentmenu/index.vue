<template>
  <div>
    <div class="container">
      <v-contextmenu ref="contextmenu">
        <v-contextmenu-item>菜单1</v-contextmenu-item>
        <v-contextmenu-item>菜单2</v-contextmenu-item>
        <v-contextmenu-item>菜单3</v-contextmenu-item>
      </v-contextmenu>

      <div v-contextmenu:contextmenu class="menuDiv">右键点击此区域</div>
    </div>

    <div class="container">
      <v-contextmenu ref="contextmenu-1" theme="bright">
        <v-contextmenu-group :max-width="240">
          <v-contextmenu-item :auto-hide="false">点我不关闭</v-contextmenu-item>
          <v-contextmenu-item>菜单2</v-contextmenu-item>
          <v-contextmenu-item>菜单3</v-contextmenu-item>
        </v-contextmenu-group>
        <v-contextmenu-group :max-width="360">
          <v-contextmenu-item :auto-hide="false">点我不关闭</v-contextmenu-item>
          <v-contextmenu-item>菜单5</v-contextmenu-item>
        </v-contextmenu-group>
      </v-contextmenu>

      <div v-contextmenu:contextmenu-1 class="menuDiv">按钮组</div>
    </div>

    <div class="container">
      <v-contextmenu ref="contextmenu-2" theme="dark">
        <v-contextmenu-item>菜单1</v-contextmenu-item>
        <!-- 分割线 -->
        <v-contextmenu-item :divider="true"></v-contextmenu-item>
        <v-contextmenu-submenu title="子菜单">
          <v-contextmenu-item>子菜单1</v-contextmenu-item>
          <v-contextmenu-item>子菜单2</v-contextmenu-item>
        </v-contextmenu-submenu>
      </v-contextmenu>

      <div v-contextmenu:contextmenu-2 class="menuDiv">子菜单</div>
    </div>

    <div class="container">
      <!-- dblclick click mouseover   -->
      <v-contextmenu ref="contextmenu-3" event-type="mouseover">
        <v-contextmenu-item>菜单1</v-contextmenu-item>
      </v-contextmenu>
      
      <div v-contextmenu:contextmenu-3 class="menuDiv">自定义事件</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import contentmenu from "v-contextmenu";
import "v-contextmenu/dist/index.css";

Vue.use(contentmenu);
export default {
  name: "contentmenu",
};
</script>

<style lang="less" scoped>
.menuDiv {
  padding: 10px;
  border: 1px solid black;
  margin: 10px;
}
.container{
  // padding: 5px;
  border: 3px solid #ccc;
  margin: 5px;
}
</style>