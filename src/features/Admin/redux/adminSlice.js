import actions from "./type";

const { default: produce } = require("immer");

const inititalState = {
  User: null,
};
const reducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actions.SET_ADMIN_USER:
        draft.User = action.payload;
        break;
      default:
        break;
    }
  });
};
export default reducer;
