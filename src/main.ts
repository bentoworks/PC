import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
router.beforeEach((to,from,next)=>{
    const dom:any = document
    if(to.meta.title){
        dom.title = to.meta.title
    }
    next()
})

createApp(App).use(store).use(router).use(Antd).mount('#app')
