import requester from "app/api";
import apiPath from "app/apiPath";
import actions from "./type";

// export const fetchBannersAction = async (next) => {
//   try {
//     const res = await requester({
//       method: "GET",
//       url: apiPath.BANNERS,
//     });

//     next({
//       type: actions.SET_BANNERS,
//       payload: res.data.content,
//     });
//   } catch (err) {}
// };
// fetch course list
export const fetchCourseAction = (item) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.COURSE_LIST,
        params: {
          maDanhMuc: item,
          maNhom: "GP01",
        },
      });
      console.log(res);
      next({
        type: actions.SET_COURSELIST,
        payload: res.data,
      });
    } catch (err) {
      console.log("fetchCourseAction",err);
    }
  };
};
// fetch course detail
export const fetchCourseDetailAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.COURSE_DETAIL,
        params: {
          MaPhim: id,
        },
      });
      //console.log(res.data);
      next({
        type: actions.SET_DETAIL,
        payload: res.data,
      });
    } catch (err) {}
  };
};

export const fetchCategoryAction = ()=>{
  return async(next)=>{
    try{
      const res = await requester({
        method: "GET",
        url: apiPath.COURSE_CATEGORY,
      })
      
      next({
        type:actions.SET_CATEGORY,
        payload: res.data,
      });
    }catch(err){ 
      console.log("fetchCategoryAction",err)
    }
  }
}

export const fetchCardAction = ()=>{
  return async(next)=>{
    
    try{
      const res = await requester({
        method: "GET",
        url: apiPath.COURSE_CARD,
        params:{
          tenKhoaHoc:"js"
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