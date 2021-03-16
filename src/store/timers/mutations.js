export default {
  addTimer(state, date) {
    const item = {
      date,
      id: new Date().getTime(),
    };

    state.list.push(item);
  },
};
