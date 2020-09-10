<template>
  <div>
    <pre v-html="code"/>
  </div>
</template>

<script>
export default {
  name:'cvEditor',
  props:{
    code:{
      type:String,
      defalut:''
    }
  },
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>