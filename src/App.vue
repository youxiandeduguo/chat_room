<template>
  <div class="router-view">
    <RouterView ></RouterView>
   </div>
  <!-- <home></home> -->
  
  
</template>

<script lang="ts" setup>
  import { provide, ref } from 'vue';
</script>

<style scoped>
.router-view{
  width:100%;
  margin:0;
}
</style>
