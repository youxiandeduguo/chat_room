<template>
    <div>用户名</div>
    <input type="text" v-model="to_user" class="userinput">
    <button @click="sendfriendrequest">发送好友请求</button>
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
    let to_user=ref('')
    let username=ref('')
    const route=useRoute()
    const sendfriendrequest=async ()=>{
        try {
        let status = await axios.get(`http://127.0.0.1:8000/serve/add_friend?username=${username.value}&to_user=${to_user.value}&time=${String(Date.now())}`);

        } catch (error) {
            const err = error
            console.log(err)
            return { status: 500, data: "请求失败" };
        }
    }
    onMounted(()=>{
        username.value=route.query.username as string
        }
    )

</script>


<style scoped>
    .userinput{
        height: 10px;
        width: 200px;
    }
</style>