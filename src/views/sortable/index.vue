<template>
  <div>
    <!-- 一定要加上row-key，不然数据更新将会渲染错误 -->
    <el-table
      :data="tableData"
      ref="table"
      row-key="name"
      style="width: 100%">
        <el-table-column
          label="操作"
          width="100px">
          <span style="cursor: pointer;" class="handle">按我拖拽</span>
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
    </el-table>
    {{tableData}}
  </div>
</template>

<script>
import Sortable from 'sortablejs';
export default {
  data() {
    return{
      tableData: [{
        date: '2016-05-02',
        name: '赵六',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '张三',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '李四',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王五',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  created(){
    this.$nextTick(()=>{
      //绑定拖拽功能
      console.log('开始绑定拖拽功能');
      // 获取所有行
      const els = this.$refs.table.$el.querySelector('tbody')
      console.log(els);
      Sortable.create(els,{
        animation:150,
        handle:'.handle',
        onEnd:(e)=>{
          // 拖拽更新数据
          this.$nextTick(()=>{
            let move_row = this.tableData.splice(e.oldIndex,1)[0]
            this.tableData.splice(e.newIndex,0,move_row)
          })
        }
      })
    })
  }
}
</script>

<style>
</style>