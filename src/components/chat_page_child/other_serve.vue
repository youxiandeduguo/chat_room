<template>
    <div>
        <div class="main_frame">
            <div class="left_frame">
                <h2 class="room_name">群聊</h2>
            
                <div class="user_frame">
                    <div class="user_count">
                        <div style="color: black;">当前在线用户数</div>
                        <div class="user_count_number">{{ online_users.length }}</div>
                    </div>
                    <div class="user_list">
                        <div v-for="(user, index) in online_users" :key="index" class="user_item">
                            <div class="head2">{{ user[0]}}</div>
                            <div class="user_name">{{ user }}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="chat_frame">
                <div class="message_frame">
                    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
                        <li v-for="(message_item, index) in messages" :key="index" class="infinite-list-item">
                            <div class="message_item" v-if="message_item.sender!=user_name">
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
                </div>
                <div class="input_frame">
                    <input class="input_box" v-model="new_message" @keyup.enter="sendMessage" placeholder="请输入聊天内容" />

                    <el-button class="input_btn" type="success" @click="sendMessage">发送</el-button>
                </div>           
            </div>
        </div>
    </div>
</template>


<script lang="ts">
    export default {
        name:"other_serve"
    }
</script>


<script setup lang="ts">
    import { onMounted,onBeforeMount,ref,computed } from 'vue';
    import { RouterView,RouterLink,useRoute } from 'vue-router';
    import axios from 'axios';
    const route=useRoute()

    interface Message {
        sender: string;
        message: string;
    }
    
    let room_name='lobby'
    let user_name=ref<string>('hhc')
    let socket=ref<WebSocket | null>(null)
    let messages=ref<Message[]>([])
    let new_message=ref<string>(' ')
    let online_users=ref<string[]>([])
    const count = ref(0)
    const load = () => {
        count.value += 2
    }


    async function get_group_message_history(){

        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/serve/get_group_history?name=${room_name}`);
            messages.value=data

            console.log(messages.value)
        } catch (error) {
            const err = error
            console.log(err)
        }

    }

    async function update_group_history(){
        try {
            let data={
                'name':room_name,
                'user':user_name.value,
                'message':new_message.value,
                'time':String(Date.now())
            };
            const response=await axios.post("http://127.0.0.1:8000/serve/append_group_history",data);
            

            console.log(response)
        } catch (error) {
            const err = error
            console.log(err)
        }
    }




    onMounted(()=>{
        user_name.value=route.query.username as string

        get_group_message_history()
        socket.value=new WebSocket(`ws://127.0.0.1:8000/ws/chat/${room_name}/${user_name.value}`)

        socket.value.onmessage=(event:MessageEvent)=>{
            const data=JSON.parse(event.data);
            if(data.type=="users"){
                online_users.value=data.users
            }
            else if(data.message){
                messages.value.push({sender:data.sender,message:data.message})
            }
        }

    })


    const sendMessage=()=>{
        if(socket.value&&new_message.value.trim()!=''){
            const messageData={
                sender:user_name.value,
                message:new_message.value
            }
            console.log(messageData)
            update_group_history()
            socket.value.send(JSON.stringify(messageData))
            new_message.value=""
        }
    }
    onBeforeMount(()=>{
        if(socket.value){
            socket.value.close()
        }
    })


</script>


<style scoped>
    .room_name {
        color: #e0e0e0;
        margin-bottom: 20px;
        text-align: center;
    }

    .main_frame {
        padding: 20px;
        display: flex;
        flex-direction: row; 
        background-color: #1a1a1a; 
        gap: 20px;
        width: 100%;
        height: 100%;
    }

    .head {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #67c23a; 
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        flex-shrink: 0;
    }

    .head2 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: #67c23a; 
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        flex-shrink: 0;
    }

    .message_content {
        max-width: 70%;
        padding: 10px 14px;
        border-radius: 12px;
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
        padding: 10px;
        border-radius: 10px;
        background-color: #333333;
    }

    .message_item {
        display: flex;
        flex-direction: row;
        background-color: inherit;
        align-items: center;
        width: 100%;
    }

    .message_item_right {
        display: flex;
        flex-direction: row;
        background-color: inherit;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
    }

    .input_frame {
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
    }

    .user_frame {
        border-radius: 10px;
        background-color: #2d2d2d; 
        padding: 16px;
        height: 120%;
    }

    .user_count {
        display: flex;
        flex-direction: row;
        height: 50px;
        width: 100%;
        align-items: center;
        gap: 10px;
    }

    .message_frame {
        background-color: #2d2d2d; 
        width: 1000px;
        height: 85%;
        border-radius: 10px;
    }

    .input_box {
        width: 840px;
        height: 40px;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 2px solid #444; 
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

    .input_btn {
        width: 150px;
        height: 40px;
        border-radius: 10px;
        background-color: #67c23a;
        color: white;
        border: none;
    }

    .input_btn:hover {
        background-color: #5cb031; 
    }

    .infinite-list {
        height: 500px;
        padding: 50px;
        margin: 0;
        list-style: none;
        background-color: inherit;
        border-radius: 10px;
        max-height: 800px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #67c23a #1a1a1a; 
    }

    .infinite-list::-webkit-scrollbar {
        width: 6px;
    }

    .infinite-list::-webkit-scrollbar-track {
        background: #1a1a1a; 
    }

    .infinite-list::-webkit-scrollbar-thumb {
        background-color: #67c23a; 
        border-radius: 3px;
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
    .left_frame{
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-self: center;
    }
    .user_frame {
        width: 250px;
        padding: 16px;
        background-color: #2d2d2d; 
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        font-family: Arial, sans-serif;
        gap: 10px;
    }

    .user_count {
        display: flex;
        flex-direction: row;
        font-size: 16px;
        color: #b0b0b0; 
        margin-bottom: 16px;
        align-items: center;
        justify-content: left;
        gap: 10px;
    }

    .user_count_number {
        font-size: 24px;
        font-weight: bold;
        color: #67c23a; 
    }

    .user_list {
        width: 250px;
        height: 550px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        align-content: flex-start;
        max-height: 300px;
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #67c23a #1a1a1a; 
    }

    .user_list::-webkit-scrollbar {
        width: 6px;
    }

    .user_list::-webkit-scrollbar-track {
        background: #1a1a1a; 
    }

    .user_list::-webkit-scrollbar-thumb {
        background-color: #67c23a;
        border-radius: 3px;
    }

    .user_item {
        padding: 8px 12px;
        margin-bottom: 8px;
        width: 100px;
        height: 20px;
        background-color: #444;
        border-radius: 8px;
        transition: background-color 0.3s ease;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }

    .user_item:hover {
        background-color: #555; 
    }

    .user_name {
        font-size: 14px;
        color: #e0e0e0; 
    }
</style>
