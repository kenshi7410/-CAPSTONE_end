import React from "react";
import logo from "./../assets/cyberlogo.png";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="flex justify-between content-center items-center py-4 bg-slate-500"
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div className="flex flex-col basis-1/5 py-10 px-10 bg-slate-900">
        <div className="sm:w-32 sm:h-10   lg:w-64 lg:h-20">
          <Link to="/" className="no-underline mx-5 ">
            <img src={logo} alt="logo" className="w-290 h-100" />
            {/* sm:w-32 sm:h-10   lg:w-64 lg:h-20 */}
          </Link>
          <p style={{ marginTop: "40px" }}>
            CyberSoft Acedemy - Hệ thống đào tạo lập trình chuyên sâu theo dự án
            thực tế
          </p>
        </div>
        <div>
          <h1>NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h1>
          <h4>
            CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình Cyber
            ive hoàn toàn MIỄN PHÍ và các chương trình khuyến mãi hấp dẫn đến
            các bạn
          </h4>
          <div>
            <input
              type="text"
              placeholder="your address @gmail.com"
              className="sm:hidden xl:inline-block py-5"
            />
            <button>Đăng Ký</button>
          </div>
        </div>
        <div>
          <p>
            <i></i>:376 Võ Văn Tần - Quận 3
          </p>
          <p>
            <i></i>:376 Võ Văn Tần - Quận 3
          </p>
          <p>
            <i></i>:376 Võ Văn Tần - Quận 3
          </p>
          <p>
            <i></i>:376 Võ Văn Tần - Quận 3
          </p>
        </div>
      </div>
      <div className="basis-1/4 py-10 px-10 bg-slate-900">
        <h2>ĐĂNG KÝ TƯ VẤN</h2>
        <input type="text" placeholder="Họ và tên *" />
        <input type="text" placeholder="Email liên hệ *" />
        <input type="text" placeholder="Điện thoại liên hệ *" />
        <button>ĐĂNG KÝ TƯ VẤN</button>
        <p>
          Lập trình FRONT END Lập trình ReactJS Lập trình React Angular Lập
          trình tư duy Lập trình NodeJS Lập trình Backend Lập trình Web Lập
          trình java Spring - Java Boot Tôi đi code dạo Học SEO Hà Nội ở Vietmoz
          Học lập trình trực tuyến.
        </p>
      </div>
      <div className="basis-1/4 py-10 px-10 bg-slate-900">
        <img
          src="https://icdn.dantri.com.vn/thumb_w/660/2021/08/17/okalumnibai-10pham-huy-hoangver-12docx-1629211989482.png"
          alt="er"
        />
      </div>
    </div>
  );
};

export default Footer;