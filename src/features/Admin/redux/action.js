import requester from "app/api";
import apiPath from "app/apiPath";
import actions from "./type";



export const fetchUserListAction = async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.USER_LIST,
        params: {
          MaNhom: "GP01",
        },
      });

      next({
        type: actions.SET_ADMIN_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };