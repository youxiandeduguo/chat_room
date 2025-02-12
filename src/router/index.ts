import {createRouter,createWebHistory} from 'vue-router'
import login from '@/components/Login.vue'
import home from '@/components/Home.vue'
import chat_page from '@/components/chat_page.vue'
import private_message from '@/components/chat_page_child/private_message.vue'
import other_serve from '@/components/chat_page_child/other_serve.vue'
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
          name:'private_message'
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