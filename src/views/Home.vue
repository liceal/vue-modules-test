<template>
  <div class="home">
    <img style="margin:auto" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      msg:`
测试好玩的第三方插件，请尽情玩耍吧！
测试一些新的功能块
      `
    }
  },
  components: {
    HelloWorld
  }
}
</script>
