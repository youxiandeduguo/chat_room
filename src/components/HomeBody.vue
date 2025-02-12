<template>
  <div class="container">
    <div class="content" id="product">
      Xchat,The Ultimate
    </div>
    <div class="content" id="description">
      Xchat is a simple yet powerful communication and interaction software.
    </div>
    <div class="content">
      <el-button id="visitor-button">Welcome Xchat</el-button>
    </div>
  </div>
</template>

<style  scoped>
  #visitor-button{
    margin-top: 40px;
    padding-bottom: 0;
    height: 70px;
    width: 250px;
    border-radius: 10px;
    border: 0px;
    background-color: black;
    color: white;
    font-size: 30px;
  }
  #visitor-button:hover{
    background-color: rgb(41, 40, 40);
    /* color: black; */
  }
  #description{
    padding-top: 20px;
    font-size: 20px;
    padding-bottom: 0;
  }
  .content{
    padding: 0 20% 20%;
    padding-bottom: 0;
    text-align: center;
  }
  #product{
    padding-top: 80px;
    padding-bottom: 0;
    font-size: 60px;
    font-weight: bold;
    font-family: var(--styrene-a),sans-serif;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
  name: "HomeBody",
})
</script>