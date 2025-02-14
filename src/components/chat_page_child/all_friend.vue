<template>
    <div class="friend_main">
        <div v-for="item in friend" class="friend_frame">
            <div class="hand">{{ item['name'] }}</div>
            <div>{{item['name']}}</div>
        </div>
    </div>
</template>


<script lang="ts">
    export default {
        name:"all_friend"
    }
</script>


<script setup lang="ts">
    import { RouterView,RouterLink } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
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
    onMounted(gettest)
</script>


<style scoped>
    .friend_main{
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
    }
    .friend_frame{
        display: flex;
        flex-direction: row;
        height: 100px;
        width: 200px;
        background-color: red;
    }
</style>
