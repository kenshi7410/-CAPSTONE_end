import produce from "immer";
import actionLogin from "./type";

const inititalState = {
  profile: null,
};
const reducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actionLogin.SET_PROFILE:
        draft.profile = action.payload;
        break;

      default:
        break;
    }
  });
};
export default reducer;
