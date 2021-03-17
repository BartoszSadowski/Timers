import {
  saveState,
  loadState,
} from '../../utils/localstorage';

const timersKey = 'timers';

export default {
  addTimer({ commit, dispatch }, date) {
    commit('addTimer', date);
    dispatch('updateTimerList');
  },

  removeTimer({ commit, dispatch }, id) {
    commit('removeTimer', id);
    dispatch('updateTimerList');
  },

  updateTimerList({ state }) {
    saveState(state.list, timersKey);
  },

  loadTimerList({ commit, dispatch }) {
    const timersList = loadState(timersKey);
    commit('loadTimerList', timersList);
    dispatch('updateTimerList');
  },
};
