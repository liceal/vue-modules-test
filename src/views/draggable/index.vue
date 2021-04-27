
<template>
  <div>
    <Draggable tag="ul" v-model="tableData" class="draggable" v-bind="dragOptions">
      <transition-group type="transition" name="flip-list">
        <div v-for="item in list" :key="item.id" class="item">
          {{item}}
        </div>
      </transition-group>

    </Draggable>

    {{list}}
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
export default {
  components:{
    Draggable
  },
  data(){
    return{
      list:[
        {name:'张三',id:0},
        {name:'李四',id:1},
        {name:'王五0',id:2},
        {name:'王五1',id:3},
        {name:'王五2',id:4},
        {name:'王五3',id:5},
        {name:'王五4',id:6},
        {name:'王五5',id:7},
        {name:'gitpot测试',id:8},
      ],
      
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 150,
        ghostClass: 'blue-background-class'
      };
    }
  }
}
</script>

<style lang="less" scoped>
.draggable{
  .item{
    border: 1px solid;
    background-color:#f5f5f5;
    padding: 10px;
  }
}
.blue-background-class{
  background-color:aqua;
}
.group{
  opacity:.5;
  background:red;
}
.flip-list-move{
  transition: all 1s;
}
</style>