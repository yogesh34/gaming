import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme:{
    primary:'#12BDF8',
    secondary:'#77af12',
    info:'#1B2127',
    success:'#C12F6C'
  }
})
