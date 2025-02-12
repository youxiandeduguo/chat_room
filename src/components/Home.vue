<template>
  <div class="common-layout">
    <el-container>
      <el-header id="el-header">
        <Navbar></Navbar>
      </el-header>
      <el-main id="el-main">
        <HomeBody></HomeBody>
      </el-main>
      <el-footer id="el-footer">
        <HomeFooter></HomeFooter>
      </el-footer>
    </el-container>
  </div>
</template>
<style  scoped>
#el-footer{
  padding: 0;
  height: 390px;
}
#el-main{
  padding: 0;
  /* background-color: skyblue; */
  width: 100%;
  height: 480px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue'
import HomeBody from '@/components/HomeBody.vue'
import HomeFooter from '@/components/HomeFooter.vue'
export default defineComponent({
  name: "home",
  components: {
    Navbar, // 注册 Navbar 组件
    HomeBody,
    HomeFooter,
  },
});

</script>
<script setup lang="ts">


</script>