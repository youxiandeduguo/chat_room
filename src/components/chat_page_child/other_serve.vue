<template>
    <div>
    <h2>Chat Room: {{ room_name }}</h2>
    <div v-for="(message, index) in messages" :key="index">
      <p>{{ message }}</p>
    </div>
    <input v-model="new_message" @keyup.enter="sendMessage" placeholder="Type a message..." />
  </div>
</template>


<script lang="ts">
    export default {
        name:"other_serve"
    }
</script>


<script setup lang="ts">
    import { onMounted,onBeforeMount,ref } from 'vue';
    import { RouterView,RouterLink } from 'vue-router';
    let room_name='lobby'
    let socket=ref<WebSocket | null>(null)
    let messages=ref<string[]>([])
    let new_message=ref<string>(' ')

    onMounted(()=>{
        socket.value=new WebSocket(`ws://127.0.0.1:8000/ws/chat/${room_name}/`)

        socket.value.onmessage=(event:MessageEvent)=>{
            const data=JSON.parse(event.data);
            if(data.message){
                messages.value.push(data.message)
            }
        }

    })

    const sendMessage=()=>{
        if(socket.value&&new_message.value.trim()!=''){
            const messageData={
                message:new_message.value
            }
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

</style>
