<template>
    <div class="message_frame">
        <!-- <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
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
        </ul> -->
    </div>
</template>


<script lang="ts">
    import { RouterView,RouterLink,useRoute } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import axios from 'axios';
    export default {
        name:"private_chat"
    }
</script>


<script setup lang="ts">
    const route=useRoute();
    const to_name=ref('')
    const username = ref('');
    const count = ref(0)
    const load = () => {
        count.value += 2
    }

    async function gettest(){

        try {
            let {data} = await axios.get('http://127.0.0.1:8000/test/');
            test.value=data
            console.log(test.value)
        } catch (error) {
            const err = error
            console.log(err)
        }

    }


    onMounted(
        ()=>{
        username.value=route.query.username as string
        to_name.value=route.query.to_name as string
    })
</script>


<style scoped>
    
</style>
