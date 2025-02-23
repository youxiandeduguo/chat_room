<template>
    <div class="friend_main">
        <div v-for="item in friend">
                <RouterLink :to="{path:'/chat_page/private_message/private_chat',query:{username:username,to_name:item['name']}}">
                    <div class="friend_frame">
                        <div class="head">{{item['name']}}</div>
                        <div class="name">{{item['name']}}</div>
                    </div>
                </RouterLink>
        </div>
    </div>
</template>


<script lang="ts">
    export default {
        name:"all_friend"
    }
</script>


<script setup lang="ts">
    import { RouterView,RouterLink,useRoute } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import axios from 'axios';

    const route=useRoute();
    const username = ref('');


    let friend=ref();
    async function gettest(){
        try {
            let {data} = await axios.get('http://127.0.0.1:8000/serve/select_friend?id=111');
            friend.value=data
            console.log(friend.value)
        } catch (error) {
            const err = error
            console.log(err)
        }

    }
    onMounted(
        ()=>{
        username.value=route.query.username as string
        gettest()
    })
</script>


<style scoped>
    a{
        text-decoration: none;
    }
    .friend_main {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        width: 900px;
        margin-bottom: 10px;
        align-content: flex-start;
        justify-content: space-between;
        flex-grow: 0;
        padding: 100px;
        padding-top: 50px;
        background-color: #1a1a1a; 
    }

    .friend_frame {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 30px;
        height: 50px;
        width: 220px;
        padding: 15px;
        background-color: #2d2d2d;
        border-radius: 12px; 
        border: 1px solid #444; 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .friend_frame:hover {
        transform: translateY(-5px); 
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
        border-color: #67c23a; 
    }

    .head {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        background-color: #67c23a;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); 
    }

    .name {
        font-size: 16px;
        font-weight: bold;
        color: #e0e0e0; 
        margin-bottom: 4px;
        background-color: transparent;
        
    }
</style>
