<template>
  <div>
    <div class="active-area" @click="delMenu" @contextmenu.prevent="rightClickHandle">
        右击这里出menu
      <div class="item-area" @contextmenu.stop.prevent="itemHandle">右击这里只触发这里的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "active-area",
  methods: {
    rightClickHandle(e) {
      console.log("蓝色");
      this.createMenu(e);
      // return false
    },
    itemHandle(e) {
      console.log("红色");
    },
    createMenu(e) {
      if (document.getElementById("menu")) this.delMenu();
      let menu = document.createElement("div");
      menu.addEventListener('contextmenu',(e)=>{
          console.log('右击menu');
          e.stopPropagation() //阻止冒泡
          e.preventDefault() //阻止默认事件，阻止了右击
      })
      menu.addEventListener('click',(e)=>{
          console.log('左击menu');
          e.stopPropagation() //阻止冒泡
      })
      menu.id = "menu";
      menu.innerHTML = "hello";
      menu.style = `
        width: 50px;
        height: 50px;
        background-color: blue;
        position: absolute;
      `;
      menu.style.left = e.clientX + "px";
      menu.style.top = e.clientY + "px";
      e.target.append(menu);
    },
    delMenu() {
      if (document.getElementById("menu"))
        document.getElementById("menu").remove();
      console.log("删除menu");
    },
  },
};
</script>

<style lang="less" scoped>
.active-area {
  width: 300px;
  height: 300px;
  background-color: aqua;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  .item-area {
    width: 100px;
    height: 100px;
    background-color: red;
    color: white;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
}
</style>
