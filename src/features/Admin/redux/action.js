import requester from "app/api";
import apiPath from "app/apiPath";
import actions from "./type";

export const fetchUserListAction = (page = 1) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.USER_LIST,
        params: {
          MaNhom: "GP01",
          page: page,
          pageSize: 10,
        },
      });
      console.log(res.data)
      next({
        type: actions.SET_ADMIN_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
