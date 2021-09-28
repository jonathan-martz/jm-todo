<template>
  <div class="vc-messages">
    <div v-for="(item, index) in items" :key="index" class="alert alert-success">Test</div>
  </div>
</template>
<script>
import {  } from "vue";

export default {
  name: "Messages",
 data() {
   return {
     
   }
 },
 computed: {
   items : function(){
     return this.$store.state.messages.items;
   }
 }
};
</script>
