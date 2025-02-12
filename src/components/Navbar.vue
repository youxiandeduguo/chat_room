<template>
  <div id="container">
    <span id="logo">Xchat</span>
    <span id="navbar">
      <span class="li">Research</span>
      <span class="li">Company</span>
      <span class="li">Careers</span>
      <span class="li">News</span>
      <span class="li">
        <a href="/login">
          <el-button id="login-button">Login Xchat</el-button>
        </a>
        
      </span>
    </span>
  </div>
</template>
<style scoped>
#login-button{
  padding: 0;
  height: 50px;
  width: 150px;
  border-radius: 10px;
  border: 0px;
  background-color: black;
  color: white;
  font-size: large;
}
#login-button:hover{
  background-color: rgb(41, 40, 40);
}
.li {
  margin-right: 30px;
  margin-top: 30px;
  margin-bottom: 0;
  font-size: large;
  color: #3d3d3a;
}
.li:hover{
  color: rgb(154, 152, 152);
}

#container {
  display: flex;
  justify-content: space-between;
}

#logo {
  font-size: 40px;
  font-weight: bold;
  /* 漂亮的英文字体样式 */
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-left: 20px;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import {RouterLink} from "vue-router";
export default defineComponent({
  name: "Navbar",
});
</script>
<script setup lang="ts">
// alert("navbar");
</script>