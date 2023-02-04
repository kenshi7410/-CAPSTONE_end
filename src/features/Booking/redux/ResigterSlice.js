import produce from "immer";
import actionsBooking from "./type";

const inititalState = {
//   banners: [],
  courseList: [],
  courseDetail: null,
  category:[],
};

const reducer = (state = inititalState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
    //   case actions.SET_BANNERS:
    //     draft.banners = action.payload;
    //     break;
      case actionsBooking.SET_COURSELIST:
        draft.courseList = action.payload;
        break;
      case actionsBooking.SET_DETAIL:
        draft.courseDetail = action.payload;
        break;
      case actionsBooking.SET_CATEGORY:
          draft.category = action.payload
      default:
        break;
    }
  });
};

export default reducer;
