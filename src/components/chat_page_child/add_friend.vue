<template>
    <div class="friend-list-container">
        <div class="title">好友列表</div>
        <ul class="friend-list">
            <li v-for="friend in friends" :key="friend.id" class="friend-item">
                <div class="friend-info">
                    <div class="avatar">{{ friend.name[0] }}</div>
                    <div class="details">
                        <div class="name">{{ friend.name }}</div>
                        <div class="status">{{ friend.status }}</div>
                    </div>
                </div>
                <button class="action-button" @click="handleAction(friend.id)">操作</button>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: "FriendList"
    }
</script>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    interface Friend {
        id: number;
        name: string;
        status: string;
    }

    const friends = ref<Friend[]>([]);

    const fetchFriends = async () => {
        try {
            const { data } = await axios.get('http://127.0.0.1:8000/serve/get_friends');
            friends.value = data;
        } catch (error) {
            console.error("获取好友列表失败:", error);
        }
    };

    const handleAction = (id: number) => {
        console.log("操作好友:", id);
    };

    onMounted(() => {
        fetchFriends();
    });
</script>

<style scoped>
    .friend-list-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 20px;
        background-color: #1a1a1a; 
        color: #e0e0e0; 
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        color: #67c23a; 
        margin-bottom: 20px;
    }

    .friend-list {
        list-style: none;
        padding: 0;
        margin: 0;
        overflow-y: auto;
        scrollbar-width: thin; 
        scrollbar-color: #67c23a #1a1a1a; 
    }

    .friend-list::-webkit-scrollbar {
        width: 6px; 
    }

    .friend-list::-webkit-scrollbar-track {
        background: #1a1a1a; 
    }

    .friend-list::-webkit-scrollbar-thumb {
        background-color: #67c23a; 
        border-radius: 3px; 
    }

    .friend-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin-bottom: 10px;
        background-color: #2d2d2d; 
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }

    .friend-item:hover {
        background-color: #444; 
    }

    .friend-info {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .avatar {
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

    .details {
        display: flex;
        flex-direction: column;
    }

    .name {
        font-size: 16px;
        font-weight: bold;
        color: #e0e0e0;
    }

    .status {
        font-size: 12px;
        color: #b0b0b0; 
    }

    .action-button {
        padding: 6px 12px;
        background-color: #67c23a;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .action-button:hover {
        background-color: #5cb031;
        transform: translateY(-2px);
    }

    .action-button:active {
        transform: translateY(0);
    }
</style>