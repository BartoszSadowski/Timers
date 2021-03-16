import actions from './actions';
import mutations from './mutations';

const state = {
  list: [{
    id: 1,
    date: new Date(2022, 4, 16, 12, 12, 12),
  }, {
    id: 2,
    date: new Date(2021, 8, 14, 13, 13, 13),
  }],
};

export default {
  state,
  actions,
  mutations,
};
