<template>
    <div class="main">
        <div class="top_menu">顶部菜单</div>
        <div class="line2">
            <div class="menu">
                <RouterLink to="/chat_page/private_message" class="menu_item" active-class="menu_item_active">
                    <div class="pill"></div>
                    <div class="svg_content">
                        <svg t="1739277071997" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5340" width="30" height="30"><path d="M896 128H128A85.426667 85.426667 0 0 0 42.666667 213.333333v512a85.426667 85.426667 0 0 0 85.333333 85.333334v106.666666a21.333333 21.333333 0 0 0 36.42 15.086667L286.166667 810.666667H896a85.426667 85.426667 0 0 0 85.333333-85.333334V213.333333a85.426667 85.426667 0 0 0-85.333333-85.333333zM298.666667 512a42.666667 42.666667 0 1 1 42.666666-42.666667 42.666667 42.666667 0 0 1-42.666666 42.666667z m213.333333 0a42.666667 42.666667 0 1 1 42.666667-42.666667 42.666667 42.666667 0 0 1-42.666667 42.666667z m213.333333 0a42.666667 42.666667 0 1 1 42.666667-42.666667 42.666667 42.666667 0 0 1-42.666667 42.666667z" fill="currentColor" p-id="5341"></path></svg>
                    </div>
                </RouterLink>
                <RouterLink to="/chat_page/other_serve" class="menu_item" active-class="menu_item_active">
                    <div class="pill"></div>
                    <div class="svg_content">
                        云
                    </div>
                </RouterLink>
            </div>
            <RouterView class="view"></RouterView>
        </div>

    </div>
</template>


<script lang="ts">
    export default {
        name:"chat_page"
    }
</script>


<script setup lang="ts">
    import { RouterView,RouterLink } from 'vue-router';

</script>


<style scoped>
    .main{
        background-color: black;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
    .top_menu{
        height: 20px;
    }
    .line2{
        display: flex;
        flex-direction: row;
        height: 670px;
        gap: 5px;

    }
    .view{
        border-radius: 30px;
        width: 1430px;
        background-color: rgba(255, 255, 255, 0.6);
    }
    .menu{
        padding-top: 20px;
        gap: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80px;

    }
    .menu_item{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu_item .svg_content{
        border:3px solid black;
        background-color: rgba(255, 255, 255, 0.16);
    }
    .svg_content{
        display: flex;
        background-color: #e1ebff77;
        height: 48px;
        width: 48px;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 15px;
        background-color: inherit;
        font-size: 20px;
        font-weight: bold;
    }
    .svg_content:hover{
        transform: scale(1.1);
    }
    .svg_content:after{
        content: "私信";
        text-align: left;
        opacity: 0;
        left: 120%;
        position: absolute;
        width: 50px;
        height: 25px;
        color: white;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .svg_content:hover:after{
        opacity: 1;
    }
    .menu_item_active .svg_content{
        border:3px solid greenyellow;
    }
    .menu_item_active .pill{
        opacity: 1;
    }
    .pill{
        background-color: greenyellow;
        border-radius: 0 4px 4px 0;
        width: 4px;
        height: 32px;
        margin-top: 3px;
        position: absolute;
        left: 0;
        opacity: 0;
    }
</style>
