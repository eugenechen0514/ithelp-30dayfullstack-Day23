const initState = {
  message: 'init message',
};
const reducer = (state = initState, action) => {
  const {type} = action;
  switch (type) {
      default:
          return state;
  }
};

export default reducer;
