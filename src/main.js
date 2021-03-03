import { createApp } from 'vue'
// import { createLocalVue } from '@vue/text-utils'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/css/style.css'
import './assets/css/vfg.css'
import VueFormGenerator from 'vue-form-generator'



const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueFormGenerator)

app.mount('#app')
