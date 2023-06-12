import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:svg-icons-register'
import gloablComponent from "@/components/index"
const app=createApp(App)
app.use(gloablComponent)//挂载全局组件
app.mount('#app')
