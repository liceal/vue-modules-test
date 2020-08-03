<template>
  <div>
    <button @click="send">axios测试</button>

    <form :v-model="form">
      name:
      <input type="text" v-model="form.name" />
      age:
      <input type="text" v-model="form.age" />
      <button @click="sendForm">submit</button>
    </form>
  </div>
</template>

<script>
import axios from "./src/axios";

export default {
  data() {
    return {
      form: {
        name: "",
        age: ""
      }
    };
  },
  methods: {
    sendForm() {
      console.log(this.form);
      axios({
        method:'post',
        url:this._BaseUrl,
        headers:{ 
          'Content-type':''
        },
        data:this.form
      }).then(res=>{
        console.log(res);
        
      }).catch(e=>{
        console.log(res);
        
      })
    },
    send() {
      // console.log(this._BaseUrl)
      axios({
        method: "get",
        url: this._BaseUrl
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
</style>