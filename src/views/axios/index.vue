<template>
  <div>
    <button @click="send">axios测试</button>


  </div>
</template>

<script>
import axios from "./src/axios";

export default {
  data() {
    return {};
  },
  methods: {
    send(){
      // console.log(this._BaseUrl)
      axios({
        method:'get',
        url:this._BaseUrl
      }).then(res=>{
        console.log(res)
      })
    }
  }
};
</script>

<style>
</style>