function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default {

  namespace: 'count',

  state: {
    record: 0,
    current: 0,
  },

  reducers: {
    plus(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      };
    },

    minus(state) {
      return {
        ...state,
        current: state.current - 1,
      };
    },
  },

  effects: {
    * add(action, { call, put }) {
      yield put({ type: 'plus' });
      yield call(delay, 1000);
      yield put({ type: 'minus' });
    },
  },

};
