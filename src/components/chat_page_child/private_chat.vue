<template>
    <div class="message_frame">
        <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
            <li v-for="(message_item, index) in messages" :key="index" class="infinite-list-item">
                <div class="message_item" v-if="message_item.sender!=username">
                    <div class="head">{{ message_item.sender[0]}}</div>
                    <div class="message_content">
                        <div class="sender_name">{{ message_item.sender }}</div>
                        <div class="message_text">{{ message_item.message }}</div>
                    </div>
                </div>

                <div class="message_item_right" v-else>
                    <div class="message_content">
                        <div class="sender_name_right">{{ message_item.sender }}</div>
                        <div class="message_text">{{ message_item.message }}</div>
                    </div>
                    <div class="head">{{ message_item.sender[0]}}</div>
                </div>
            </li>
        </ul>
        <div class="input_frame">
            <input class="input_box" v-model="new_message" @keyup.enter="sendMessage" placeholder="请输入聊天内容" />
            <el-button class="input_btn" type="success" @click="sendMessage">发送</el-button>
        </div>   
    </div>
</template>


<script lang="ts">
    import { RouterView,RouterLink,useRoute } from 'vue-router';
    import { onMounted,onBeforeUnmount, ref } from 'vue';
    import axios from 'axios';
    import { useUserStore } from '@/store/user';
    export default {
        name:"private_chat"
    }
</script>


<script setup lang="ts">

    interface Message {
        sender: string;
        message: string;
        time:number;
    }
    const userStore=useUserStore()
    const route=useRoute();
    const to_name=ref('')
    const username = ref(userStore.username);
    const count = ref(0)
    const load = () => {
        count.value += 2
    }
    let messages=ref<Message[]>([])
    let new_message=ref<string>(' ')
    let new_messages=ref<Message[]>([])
    let socket=ref<WebSocket | null>(null)



    async function getmessagehistory(){

        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/serve/get_history?username=${username.value}&to_name=${to_name.value}`);
            messages.value=data

            console.log(messages.value)
        } catch (error) {
            const err = error
            console.log(err)
        }

    }

    async function updatehistory(){
        try {
            let data={
                'sender':username.value,
                'receiver':to_name.value,
                'message':new_message.value,
                'time':String(Date.now())
            };
            const response=await axios.post("http://127.0.0.1:8000/serve/append_history",data);
            

            console.log(response)
        } catch (error) {
            const err = error
            console.log(err)
        }
    }


    const sendMessage=()=>{
        if(socket.value&&new_message.value.trim()!=''){
            const messageData={
                sender:username.value,
                message:new_message.value,
                time:String(Date.now())
            }
            // new_messages.value.push({sender:username.value,message:new_message.value,time:Date.now()})
            updatehistory()
            socket.value.send(JSON.stringify(messageData))
            new_message.value=""
        }
    }
    onBeforeUnmount(()=>{
        if(socket.value){
            socket.value.close()
        }
    })



    onMounted(
        ()=>{
        to_name.value=route.query.to_name as string
        getmessagehistory()
        
        const sorted_name=[username.value,to_name.value].sort()
        const room_name=sorted_name.join('_')

        socket.value=new WebSocket(`ws://127.0.0.1:8000/ws/chat/${room_name}/${username.value}`)

        socket.value.onmessage=(event:MessageEvent)=>{
            const data=JSON.parse(event.data);
 
            if(data.message){
                messages.value.push({sender:data.sender,message:data.message,time:data.time})
            }
        }

    })
</script>


<style scoped>
    .head {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #56f;
        color: white;
        display: flex;
        align-items: center; 
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        flex-shrink: 0;
    }

    .sender_name {
        font-size: 14px;
        font-weight: bold;
        color: #b0b0b0;
        margin-bottom: 4px;
    }
    .sender_name_right {
        font-size: 14px;
        font-weight: bold;
        color: #b0b0b0;
        margin-bottom: 4px;
        text-align: right;
    }

    .message_text {
        font-size: 14px;
        color: #e0e0e0;
        line-height: 1.5; 
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 10px;
        background-color: #333333;
    }

    .message_item{
        display: flex;
        flex-direction: row;
        background-color: inherit;
        align-items: center;
        width: 100%;
    }
    .message_item_right{
        display: flex;
        flex-direction: row;
        background-color: inherit;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }
    .message_content{
        display: flex;
        flex-direction: column;
        max-width: 70%;
        padding: 10px 14px; 
        border-radius: 12px;
        background-color: #333333;
    }

    .message_frame{
        background-color: #1e1e1e;
        width: 100%; 
        height: 90%; 
        display: flex;
        flex-direction: column;
        border-radius: 10px;
    }

    .infinite-list {
        flex: 1; 
        padding: 0;
        margin: 0;
        list-style: none;
        background-color: #2d2d2d;
        border-radius: 10px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #444444 #2d2d2d;
    }
    .infinite-list .infinite-list-item {
        display: flex;
        height: 80px;
        background: var(--el-color-primary-light-9);
        margin: 10px;
        color: var(--el-color-primary);
        background-color: inherit;
    }
    .infinite-list .infinite-list-item + .list-item {
        margin-top: 10px;
    }

    .input_frame{
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        padding: 10px;
        background-color: #2d2d2d; 
        border-top: 1px solid #444444; 
    }

    .input_box {
        flex: 1; 
        height: 40px;
        padding: 12px 20px; 
        box-sizing: border-box;
        border: 2px solid #444444;
        border-radius: 15px;
        background-color: #2d2d2d; 
        font-size: 16px; 
        color: #e0e0e0;
        outline: none; 
        transition: border-color 0.3s ease, box-shadow 0.3s ease; 
    }

    .input_box:focus {
        border-color: #67c23a;
        box-shadow: 0 0 8px rgba(102, 175, 233, 0.6); 
    }

    .input_box::placeholder {
        color: #999; 
        font-style: italic; 
    }

    .input_btn{
        width: 150px;
        height: 40px;
        border-radius: 10px;
        background-color: #67c23a;
        color: #ffffff;
        border: none;
    }

    .input_btn:hover {
        background-color: #5cb031;
    }

    .infinite-list::-webkit-scrollbar {
        width: 8px;
    }

    .infinite-list::-webkit-scrollbar-track {
        background: #2d2d2d;
    }

    .infinite-list::-webkit-scrollbar-thumb {
        background-color: #444444;
        border-radius: 4px;
    }
</style>
