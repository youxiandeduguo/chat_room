<template>
    <div class="private_content">
        <div class="left_content">
            <div class="user_name">{{ username }}</div>

            <div class="left_line2">
                <div>好友</div>
                <RouterLink to="/chat_page/private_message/add_friend" class="friend_btn">添加好友</RouterLink>
            </div>

            <div class="btn_frame">
                <RouterLink to="/chat_page/private_message/all_friend" class="line2_btn" active-class="line2_btn_active">
                    <svg t="1739352403118" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8062" width="10" height="10"><path d="M882.607224 620.289332c-32.233122-46.50108-75.778894-81.46643-126.399805-101.611236 22.323425-15.70468 41.104163-36.645618 54.679343-61.067844 15.711843-28.26781 24.01802-60.572564 24.01802-93.420693 0-102.397135-79.284741-185.704492-176.739307-185.704492-13.83817 0-25.097608 11.258415-25.097608 25.097608 0 13.855566 11.259438 25.128307 25.097608 25.128307 69.742411 0 126.482693 60.775178 126.482693 135.478578 0 74.719772-56.739259 135.50723-126.482693 135.50723-13.83817 0-25.097608 11.265578-25.097608 25.112957l0 0.1361c0 13.855566 11.259438 25.128307 25.097608 25.128307 125.46348 0 227.536226 108.816335 227.536226 242.568594 0 13.872962 11.285021 25.159006 25.157983 25.159006 13.83817 0 25.097608-11.286044 25.097608-25.159006C935.958316 730.243583 917.509129 670.644183 882.607224 620.289332z" fill="currentColor" p-id="8063"></path><path d="M623.157147 577.673745c-26.348088-18.662035-55.000662-33.399691-85.316108-43.895743 64.020082-38.906102 103.316064-108.150162 103.316064-183.412286 0-118.333082-96.263437-214.604706-214.588333-214.604706-118.358665 0-214.649731 96.271624-214.649731 214.604706 0 40.289612 11.282974 79.585593 32.630165 113.642247 18.054191 28.803 42.605354 52.879348 71.567989 70.318532-30.826076 10.523681-59.94937 25.424042-86.697571 44.369533-29.125341 20.629853-54.761208 45.569872-76.194356 74.126254-44.566008 59.375296-68.122517 130.018216-68.122517 204.28978 0 13.83817 11.258415 25.097608 25.097608 25.097608 13.855566 0 25.128307-11.259438 25.128307-25.097608 0-77.456093 30.202882-150.434198 85.043908-205.489094 54.711066-54.924937 127.125329-85.206614 203.921389-85.283362 2.535753 0.225127 5.117554 0.047072 7.631818-0.515746l1.991354-0.446162c74.719772 1.51347 144.95337 31.659047 198.329021 85.261872 54.815443 55.04978 85.003999 128.013559 85.003999 205.448162 0 13.83817 11.272741 25.097608 25.128307 25.097608 13.83817 0 25.097608-11.259438 25.097608-25.097608 0-74.271564-23.556509-144.913461-68.121494-204.28978C677.918355 623.243617 652.282488 598.303598 623.157147 577.673745zM426.56877 186.002274c90.629113 0 164.362418 73.733305 164.362418 164.363442 0 90.638323-73.733305 164.378791-164.362418 164.378791-90.647533 0-164.393117-73.740468-164.393117-164.378791C262.17463 259.735579 335.921237 186.002274 426.56877 186.002274z" fill="currentColor" p-id="8064"></path></svg>
                    全部
                </RouterLink>
                <RouterLink to="/chat_page/private_message/online_friend" class="line2_btn" active-class="line2_btn_active">
                    <svg t="1739352307372" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7915" width="10" height="10"><path d="M808.854477 375.633193c0-163.997098-134.543276-296.918433-300.536844-296.918433-165.995615 0-300.536844 132.921335-300.536844 296.918433 0 94.696756 45.01831 178.827875 114.873284 233.189993-125.261888 63.085804-213.430974 188.69357-223.198431 334.665129l44.950771 0c10.544147-136.692219 99.246375-257.717619 223.043912-305.83143 39.333844 18.691711 94.296643 34.896788 140.867308 34.896788 46.571688 0 90.499154-10.767228 129.836067-29.455869l30.833239-17.869996 24.970718-16.403598C763.838214 554.461067 808.854477 470.329948 808.854477 375.633193zM508.316609 624.184035c-138.957819 0-251.590062-111.277386-251.590062-248.570285 0-137.251967 112.632243-248.550843 251.590062-248.550843 138.957819 0 251.613598 111.298875 251.613598 248.550843C759.930207 512.904603 652.85554 624.184035 508.316609 624.184035zM762.570337 652.440589l-0.221034 0.312108c-4.907777-4.683672-11.453866-7.633864-18.779715-7.633864-15.117302 0-27.347858 5.746888-27.347858 20.863167 0 10.431583 6.037507 19.178805 14.603603 23.786753l-0.177032 0.268106c82.176604 58.731636 123.620505 147.655921 131.789559 253.452479l54.738695 0C909.319609 825.970808 850.562391 721.331609 762.570337 652.440589z" fill="currentColor" p-id="7916"></path></svg>
                    在线
                </RouterLink>
                <RouterLink to="/chat_page/private_message/friend_request" class="line2_btn" active-class="line2_btn_active">
                    <svg t="1739352513845" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8882" width="10" height="10"><path d="M597.333333 608.085333v89.173334A256 256 0 0 0 256 938.666667l-85.333333-0.042667a341.333333 341.333333 0 0 1 426.666666-330.581333zM512 554.666667c-141.44 0-256-114.56-256-256s114.56-256 256-256 256 114.56 256 256-114.56 256-256 256z m0-85.333334c94.293333 0 170.666667-76.373333 170.666667-170.666666s-76.373333-170.666667-170.666667-170.666667-170.666667 76.373333-170.666667 170.666667 76.373333 170.666667 170.666667 170.666666z m247.168 380.330667l150.826667-150.826667 60.373333 60.330667-211.2 211.2-150.869333-150.869333 60.373333-60.330667 90.453333 90.496z" fill="currentColor" p-id="8883"></path></svg>
                    请求
                </RouterLink>
            </div>
            
            <div>私信</div>
            <ul v-infinite-scroll="load" class="infinite-list">
                <li v-for="(message_item, index) in messages" :key="index" class="infinite-list-item">
                    <RouterLink :to="{path:'/chat_page/private_message/private_chat',query:{username:username,to_name:message_item.sender}}" class="message_item">
                        <div class="head">{{ message_item.sender[0] }}</div>
                        <div class="message_content">
                            <div class="sender_name">{{ message_item.sender }}</div>
                            <div class="message_text">{{ message_item.message }}</div>
                        </div>
                    </RouterLink>
                </li>
            </ul>


        </div>

        <RouterView class="right_content"></RouterView>
    </div>
</template>


<script lang="ts">
    import { onMounted,ref } from 'vue';
    import { useRoute,RouterView,RouterLink,useRouter } from 'vue-router';
    import axios from 'axios';
    import { useUserStore } from '@/store/user';
    export default {
        name:"private_message"
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
    const username = ref(userStore.username);
    const userid = ref(userStore.userid);
    const count = ref(0)
    let messages=ref<Message[]>([])
    const load = () => {
        count.value += 2
    }
    const router=useRouter()

    async function getprivateinfo(){

        try {
            let {data} = await axios.get(`http://127.0.0.1:8000/serve/get_private_info?username=${username.value}`);
            messages.value=data

            console.log(messages.value)
        } catch (error) {
            const err = error
            console.log(err)
        }

    }




    onMounted(()=>{
        getprivateinfo()
    })


</script>


<style scoped>
    .private_content {
        display: flex;
        flex-direction: row;
        color: white;
        background-color: rgba(255, 255, 255, 0.14);
        padding: 10px;
        height: 100vh; 
    }

    .left_content {
        width: 300px; 
        flex-shrink: 0;
        height: 90%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: #1e1e1e;
        padding: 10px; 
        border-radius: 10px; 
    }

    .right_content {
        flex: 1; 
        height: 100%;
        border-left: 1px solid #444; 
        background-color: #2d2d2d; 
        border-radius: 10px; 
        padding: 10px; 
    }

    .left_line2 {
        display: flex;
        flex-direction: row;
        justify-content: space-between; 
        align-items: center; 
    }

    .user_name {
        padding-left: 15px;
        font-size: 18px;
        font-weight: bold;
        color: white;
    }

    .friend_btn {
        padding: 5px 10px;
        border-radius: 7px;
        font-size: 12px;
        color: white;
        background-color: #6cbf00;
        text-decoration: none;
    }

    .line2_btn {
        border-radius: 6px;
        width: 100%;
        background-color: inherit;
        font-family: 微软雅黑;
        color: #e6eaf066;
        border: none;
        height: 25px;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .line2_btn:hover {
        background-color: #ffffff0f;
    }

    .line2_btn_active {
        background-color: #ffffff0f;
        color: white;
    }

    .btn_frame {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        gap: 10px;
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

    .sender_name {
        font-size: 14px;
        font-weight: bold;
        color: #e0e0e0;
        margin-bottom: 4px;
    }

    .message_text {
        font-size: 12px;
        color: #b0b0b0;
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .message_item {
        display: flex;
        align-items: center;
        width: 100%;
        text-decoration: none;
        color: inherit;
    }

    .message_content {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        flex-grow: 1;
    }

    .infinite-list {
        height: 100%;
        overflow-y: auto;
        padding: 0;
        margin: 0;
        list-style: none;
        background-color: inherit;
        border-radius: 10px;
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

    .infinite-list-item {
        display: flex;
        align-items: center;
        padding: 10px;
        margin-bottom: 10px;
        background-color: #2d2d2d;
        border-radius: 8px;
        transition: background-color 0.3s ease;
    }

    .infinite-list-item:hover {
        background-color: #444;
    }
</style>
