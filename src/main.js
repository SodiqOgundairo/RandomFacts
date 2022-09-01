import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// Bootsrap CSS, JS
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


//ANIMATE CSS
import '../node_modules/animate.css/animate.min.css'

//FONT AWESOME
import '../node_modules/@fortawesome/fontawesome/css/all.min.css'

// CUSTOM CSS
import './assets/css/main.css' 


// import GlobalMixin from './mixins/GlobalMixin'

// createApp(App).use(store).mixin(GlobalMixin).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app')

