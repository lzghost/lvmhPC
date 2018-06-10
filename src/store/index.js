/**
 * Created by lizheng on 2018/6/6.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as state from './state'
import * as getter from './getters'
import * as action from './action'
import * as mutation from './mutations'


Vue.use(Vuex)

const store = new Vuex({
  state,
  action,
  mutation
})

export default store
