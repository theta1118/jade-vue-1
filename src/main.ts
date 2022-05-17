import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import jade from './components/jade.vue'
import jade2 from './components/jade2.vue'

const history = createWebHashHistory()
const router = createRouter({
	history:history,
	routes:[
		{path:'/',component:jade},
		{path:'/xxx',component:jade2}
	]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
