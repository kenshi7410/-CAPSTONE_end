import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loginReducer from "../features/Login/redux/loginSlice";
import adminReducer from "features/Admin/redux/adminSlice";
import courseReducer from "../features/Booking/redux/ResigterSlice"


const reducer = combineReducers({
  booking: courseReducer,
  user: loginReducer,
  admin: adminReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
