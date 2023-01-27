import actions from "./type";

const { default: produce } = require("immer");

const inititalState = {
  User: null,
  Course: null,
  WaitingCourse: null,
  ApprovedCourse: null,
};
const reducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case actions.SET_ADMIN_USER:
        draft.User = action.payload;
        break;
      case actions.SET_ADMIN_COURSE:
        draft.Course = action.payload;
        break;
      case actions.SET_ADMIN_WAITING_COURSE:
        draft.WaitingCourse = action.payload;
        break;
      case actions.SET_ADMIN_APPROVED_COURSE:
        draft.ApprovedCourse = action.payload;
        break;
      default:
        break;
    }
  });
};
export default reducer;
