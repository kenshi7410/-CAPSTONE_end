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
      throw(err)
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