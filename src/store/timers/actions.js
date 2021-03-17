export default {
  addTimer({ commit }, date) {
    commit('addTimer', date);
  },

  removeTimer({ commit }, id) {
    commit('removeTimer', id);
  },
};
