import Vue from 'vue';
import Vuex from 'vuex';

import timers from './timers';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    timers,
  },
});
