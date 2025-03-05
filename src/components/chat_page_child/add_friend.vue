<template>
    <div class="add-friend-container">
        <div class="title">添加好友</div>
        <div class="input-container">
            <input type="text" v-model="to_user" class="userinput" placeholder="请输入用户名">
        </div>
        <button class="send-button" @click="sendfriendrequest">发送好友请求</button>
    </div>
</template>

<script lang="ts">
    export default {
        name:"add_friend"
    }
</script>

<script setup lang="ts">
    import { RouterView,RouterLink,useRoute } from 'vue-router';
    import { ref,onMounted } from 'vue';
    import axios from 'axios';

    let to_user = ref('');
    let username = ref('');
    const route = useRoute();

    const sendfriendrequest = async () => {
        try {
            let status = await axios.get(`http://127.0.0.1:8000/serve/add_friend?username=${username.value}&to_user=${to_user.value}&time=${String(Date.now())}`);
            alert("好友请求已发送！");
            to_user.value = ''; 
        } catch (error) {
            const err = error;
            console.log(err);
            alert("发送好友请求失败，请重试！");
        }
    };

    onMounted(() => {
        username.value = route.query.username as string;
    });
</script>

<style scoped>
    .add-friend-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%; 
        width: 75%; 
        padding: 20px;
        background-color: #1a1a1a; 
        color: #e0e0e0;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .title {
        padding-top: 150px;
        font-size: 24px;
        font-weight: bold;
        color: #67c23a; 
        margin-bottom: 20px;
    }

    .input-container {
        width: 100%;
        max-width: 400px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
    }

    .userinput {
        width: 100%;
        height: 40px;
        padding: 10px;
        border: 1px solid #444; 
        border-radius: 8px;
        font-size: 16px;
        color: #e0e0e0;
        background-color: #2d2d2d; 
        outline: none;
        transition: border-color 0.3s ease;
    }

    .userinput:focus {
        border-color: #67c23a; 
        box-shadow: 0 0 8px rgba(103, 194, 58, 0.3);
    }

    .send-button {
        width: 100%;
        max-width: 400px; 
        height: 40px;
        background-color: #67c23a;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .send-button:hover {
        background-color: #5cb031;
        transform: translateY(-2px);
    }

    .send-button:active {
        transform: translateY(0);
    }
</style>