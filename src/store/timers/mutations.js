export default {
  addTimer(state, date) {
    const item = {
      date,
      id: new Date().getTime(),
    };

    state.list.push(item);
  },

  removeTimer(state, id) {
    state.list = state.list.filter((timer) => timer.id !== id);
  },

  loadTimerList(state, load) {
    state.list = load;
  },
};
