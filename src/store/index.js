import Vue from 'vue'
import Vuex from 'vuex'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.use(VueGlide)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	layout: 'Layout'
  },
  mutations: {
  	SET_LAYOUT(state, newLayout){
  		state.layout = newLayout
  	},
  },
  actions: {
  },
  modules: {
  }
})
