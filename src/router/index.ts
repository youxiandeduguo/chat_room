import {createRouter,createWebHistory} from 'vue-router'
import login from '@/components/Login.vue'
import home from '@/components/Home.vue'
import chat_page from '@/components/chat_page.vue'
import private_message from '@/components/chat_page_child/private_message.vue'
import other_serve from '@/components/chat_page_child/other_serve.vue'
import all_friend from '@/components/chat_page_child/all_friend.vue'
import online_friend from '@/components/chat_page_child/online_friend.vue'
import friend_request from '@/components/chat_page_child/friend_request.vue'
import chat_message from '@/components/chat_page_child/chat_message.vue'
import private_chat from '@/components/chat_page_child/private_chat.vue'
const router=createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'',
      redirect:'/home',
      meta: { nav: true },
    },
    {
      path: '/home',
      component: home,
      name: 'home',
      meta: { nav: true },
    },
    {
      path:'/login',
      component: login,
      name: 'login',
      meta: { nav: true },
    },
    {
      path:'/chat_page',
      component: chat_page,
      name: 'chat_page',
      meta: { nav: true },
      children:[
        {
          path:'private_message',
          component:private_message,
          name:'private_message',
          children:[
            {
              path:'all_friend',
              component:all_friend,
              name:'all_friend'
            },
            {
              path:'private_chat',
              component:private_chat,
              name:'private_chat'
            },
            {
              path:'online_friend',
              component:online_friend,
              name:'online_friend'
            },
            {
              path:'friend_request',
              component:friend_request,
              name:'friend_request'
            },
            {
              path:'chat_message',
              component:chat_message,
              name:'chat_message'
            },
          ]
        },
        {
          path:'other_serve',
          component:other_serve,
          name:'other_serve'
        },
      ]
    },


  ]
})
export default router