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
      //console.log(res.data);
      next({
        type: actions.SET_ADMIN_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const deleteUserAction = (value) => {
  return async () => {
    try {
      await requester({
        method: "DELETE",
        url: apiPath.USER_DELETE,
        params: {
          TaiKhoan: value,
        },
      });
    } catch (err) {
      console.log(err);
      throw err.response.data
    }
  };
};
export const postUserAction = (item) => {
  return async () => {
    try {
      await requester({
        method: "POST",
        url: apiPath.USER_POST,
        data: item,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
export const putUserAction = (item) => {
  return async () => {
    try {
      await requester({
        method: "PUT",
        url: apiPath.USER_PUT,
        data: item,
      });
    } catch (err) {
      console.log(err.response);
    }
  };
};
export const searchUserAction = (item) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.USER_SEARCH,
        params: {
          MaNhom: "GP01",
          tuKhoa: item,
        },
      });
      const items = {
        items: res.data,
      };
      next({
        type: actions.SET_ADMIN_USER,
        payload: items,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchUnregisteredCourseAction = (value) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: apiPath.COURSE_UNREGISTER,
        data: value,
      });

      next({
        type: actions.SET_ADMIN_COURSE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const postregisteredCourseAction = (value) => {
  return async (next) => {
    try {
      await requester({
        method: "POST",
        url: apiPath.COURSE_REGISTER,
        data: value,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchWaitingCourseAction = (value) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: apiPath.COURSE_WAITING,
        data: value,
      });
      next({
        type: actions.SET_ADMIN_WAITING_COURSE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchApprovedCourseAction = (value) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: apiPath.COURSE_APPROVED,
        data: value,
      });
      next({
        type: actions.SET_ADMIN_APPROVED_COURSE,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const postAcceptCourseAction = (value) => {
  return async (next) => {
    try {
      await requester({
        method: "POST",
        url: apiPath.COURSE_ACCEPT,
        data: value,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const postCancelCourseAction = (value) => {
  return async (next) => {
    try {
      await requester({
        method: "POST",
        url: apiPath.COURSE_CANCEL,
        data: value,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
// fetch khoá học
export const fetchSearchAction = (value) =>{
  return async(next)=>{
    try{
      const res = await requester({
        method:"GET",
        url:apiPath.COURSE_CARD,
        params:{
          maNhom:"GP01",
          tenKhoaHoc: value
        }
      });
      console.log(res.data);
      next({
        type:actions.SEARCH,
        payload: res.data
      })
    }catch(err){
      console.log(err);
    }
  }
}
export const fetchCoursePic = (value) => {
  return async (next) => {
    try {
      await requester({
        url: apiPath.COURSE_PIC,
        method: "POST",
        data: value,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const deleteCourseEditAction = (e) => {
  return async () => {
    try {
      await requester({
        method: "DELETE",
        url: apiPath.DELETE_PIC,
        params: {
          MaKhoaHoc: e,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const fetchCourseListAction = (name, page = 1)=>{
  return async(next)=>{
    
    try{
      const res = await requester({
        method: "GET",
        url: apiPath.COURSE,
        params:{
          tenKhoaHoc: name,
          page: page,
          pageSize: 10,
        }
      })
      
      next({
        type:actions.SET_CARD,
        payload: res.data,
      });
    }catch(err){
      console.log("fetchCardAction",err);
    }

  }
}
export const fetchCourseUploadAction = (e) => {
  return async (next) => {
    try {
      await requester({
        method: "POST",
        url: apiPath.EDIT_COURSE,
        data: e,
      });

      //console.log(res.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

