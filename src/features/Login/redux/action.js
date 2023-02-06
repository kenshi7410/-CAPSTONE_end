import requester from "app/api";
import apiPath from "app/apiPath";
import actionLogin from "./type";

export const signUpAction = (dataUser) => {
  return async (next) => {
    try {
      await requester({
        method: "POST",
        url: apiPath.SIGNUP,
        data: dataUser,
      });
    } catch (err) {
      throw err;
    }
  };
};
export const loginAction = (userLogin) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: apiPath.LOGIN,
        data: userLogin,
      });

      next({
        type: actionLogin.SET_PROFILE,
        payload: res.data,
      });
      localStorage.setItem("accessToken", res.data.accessToken);
    } catch (err) {
      throw err;
    }
  };
};
export const fetchProfileAction = async (next) => {
  try {
    const res = await requester({
      method: "POST",
      url: apiPath.USER_INFOR,
    });

    next({
      type: actionLogin.SET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const fetchOneProfileAction = async (next) => {
  try {
    const res = await requester({
      method: "POST",
      url: apiPath.USER_ONE_INFOR,
    });

    next({
      type: actionLogin.SET_ONE_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const cancelAction = (item, user) => {
  return async (next) => {
    const items = { maKhoaHoc: item, taiKhoan: user };
    try {
      await requester({
        method: "POST",
        url: apiPath.COURSE_CANCEL,
        data:items
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const putProfileAction = (item) => {
  return async (next) => {
    try {
      await requester({
        method: "PUT",
        url: apiPath.USER_PUT,
        data: item,
      });
    } catch (err) {
      throw err.response.data;
    }
  };
};