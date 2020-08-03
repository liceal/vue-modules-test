<template>
  <div>
    <button @click="send">请求fetch(测试普通get接口)</button>
    <button @click="socket">请求socket(测试socket常连接)</button>
  </div>
</template>

<script src="http://cdn.socket.io/stable/socket.io.js"></script>
<script>
/**
 * 有跨域问题，人傻了
 */
import Vue from "vue";
import VueSocketIO from "vue-socket.io";
// Vue.use(VueSocketIO);
export default {
  data() {
    return {
      url: "ws://localhost:666"
    };
  },
  methods: {
    send() {
      fetch(this.url, {
        method: "get"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    },
    socket() {
      let socket = new VueSocketIO({
        debug: true,
        connection: this.url,
      });
      //   debugger
      //   socket.io.connect()
      //   socket.on('connect',()=>{
      //       console.log('123');

      //   })
    }
  }
};
</script>