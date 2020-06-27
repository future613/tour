import Vue from 'vue'
import Vuex from 'vuex'
import {CityModule} from './module/city'
import {MineModule} from './module/mineproduct'
import {ProductModule} from './module/product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    CityModule,
    MineModule,
    ProductModule
  }
})
