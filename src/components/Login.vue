<template>
  <div class="container">
    <div class="content">
      <h1>Welcome Xchat</h1>
      <el-input v-model="input"   clearable class="username-input"
      placeholder="Please input your username" />
      <el-input
        v-model="password" class="pwd-input"
        placeholder="Please input password"
        show-password
      />
      <div>
        <el-button id="login-button" @click="login" >Login Xchat</el-button>
        <div id="sign">
          Sign Up</div>
      </div>
      
    </div>
    
  </div>
   
</template>



<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { ref } from 'vue'
  import axios  from 'axios';

  export default defineComponent({
    name: "login",
  });

</script>
<script setup lang="ts">
  const input = ref('')
  const password = ref('')
  const router=useRouter()
  const checkinput=()=>{
    if(!input.value.trim()){
      alert('用户名不能为空')
      return false
    }
    return true
  }
  const login=()=>{
    if(checkinput()){
      router.push({ path: 'chat_page', query: { username: input.value } });
    }
  }

</script>


<style scoped>
  #login-button{
    position:relative;
    height: 50px;
    width: 170px;
    top:80px;
    border: 3px solid rgb(114, 112, 112);
    box-shadow: 5px 7px 8px rgba(0, 0, 0, 0.6); /* 设置阴影效果 */
    color:black;
    font-weight: bold;
    font-size: 20px;
  }
  #login-button:hover{
    background-color: rgb(114, 112, 112);
    color:white;
  }
  .pwd-input{
    width: 260px;
    position: relative;
    top: 40px;
    left: 120px; 
    height: 40px;
  }
  .username-input{
    padding: 55;
    width: 260px;
    position: relative;
    top: 20px; 
    left: 120px; 
    height: 40px;
  }
  /* .username-input:deep(.el-input__inner){
    border-width: 9px;
    border-color: rgb(0, 0, 0);
  } */
  #sign{
    text-align: end;
    position: relative;
    top: 80px; 
    margin-right: 30px;
    color: black;
  }
  #sign:hover{
    color:rgb(114, 110, 110)
  }
  .content{
    text-align: center;
    width: 40%;
    height: 330px;
    background-color: white;
    /* opacity: 0.6; */
    border-radius: 10px;
    margin-left: 30%;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
  }
  .container{

    backdrop-filter: blur(10px);
    display: flex;
    width: 100%;
    height:800px;
    background-color: black;
  }
</style>
