import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import vueAxios from 'vue-axios'
import router from './router'


const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.use(router)
app.use(axios)
app.use(vueAxios,axios)
app.mount('#app')