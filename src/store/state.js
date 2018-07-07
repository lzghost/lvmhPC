import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import { detect } from '../utils/storage'

Vue.use(Vuex)

const state = {
  global: {
    isPc: detect(),
    bread: ['内购', '全部产品'],
  },
  campaign: {},
  categories: {},
  goods: {

  },
  cart: {

  },
  userInfo: {

  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
