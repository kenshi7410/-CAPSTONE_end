import React from "react";
import logo from "./../assets/cyberlogo.png";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd";

const Footer = () => {
  return (
    <div
      className="flex flex-row justify-between content-center  py-4"
      style={{
        paddingLeft: "20px",
        paddingRight: "20px",
        backgroundColor: "#1e1e2a",
      }}
    >
      <div
        className="flex flex-col basis-1/5 py-10 px-10"
        style={{ backgroundColor: "#1e1e2a" }}
      >
        <div className="">
          <Link to="/" className="no-underline mx-5 ">
            <img src={logo} alt="logo" className="w-290 h-100" />
          </Link>
          <p
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            CyberSoft Acedemy - Hệ thống đào tạo lập trình chuyên sâu theo dự án
            thực tế
          </p>
        </div>
        <div>
          <h1 style={{ fontSize: "2rem", color: "#fff", fontWeight: "500" }}>
            NHẬN TIN SỰ KIỆN & KHUYẾN MÃI
          </h1>
          <h4
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
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
            <Link to={"#"}>
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#d4b03c",
                  color: "#fff",
                  fontSize: "1.5rem",
                  width: "8rem",
                  height: "4rem",
                  float: "right",
                  fontWeight: "500",
                }}
              >
                Đăng ký
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <p
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            <i></i>Trụ sở: 112 Cao Thắng, Quận 3
          </p>
          <p
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            <i></i>459 Sư Vạn Hạnh, Quận 10
          </p>
          <p
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            <i></i>117 Tân Cảng, Bình Thạnh
          </p>
          <p
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            <i></i>110 Đường số 10, Park Hill City Land, Phan Văn Trị, Gò Vấp
          </p>
        </div>
      </div>
      <div
        className="basis-1/4 py-10 px-10 "
        style={{ backgroundColor: "#1e1e2a" }}
      >
        <h2 style={{ fontSize: "2rem", color: "#fff", fontWeight: "500" }}>
          ĐĂNG KÝ TƯ VẤN
        </h2>
        <input
          style={{
            padding: "1.3rem",
            borderRadius: "0.5rem",
            border: "none",
            outline: 0,
            width: "40rem",
            marginBottom: "1.5rem",
          }}
          type="text"
          placeholder="Họ và tên *"
        />
        <input
          type="text"
          placeholder="Email liên hệ *"
          style={{
            padding: "1.3rem",
            borderRadius: "0.5rem",
            border: "none",
            outline: 0,
            width: "40rem",
            marginBottom: "1.5rem",
          }}
        />
        <input
          type="text"
          placeholder="Điện thoại liên hệ *"
          style={{
            padding: "1.3rem",
            borderRadius: "0.5rem",
            border: "none",
            outline: 0,
            width: "40rem",
            marginBottom: "1.5rem",
          }}
        />
        <p style={{ fontSize: "2rem", color: "#fff", fontWeight: "500" }}>
          NHẤP VÀO Ô BÊN DƯỚI
        </p>
        <Link to={"#"}>
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#b09338",
              color: "#d0cfcd",
              fontSize: "1.5rem",
              width: "15rem",
              height: "4rem",
              fontWeight: "500",
            }}
          >
            ĐĂNG KÝ TƯ VẤN
          </Button>
        </Link>
        <p
          style={{
            marginTop: "20px",
            color: "#fff",
            fontWeight: "500",
            fontSize: "1.3rem",
          }}
        >
          Lập trình Frontend Lập trình NodeJS      Lập trình Backend   Lập trình Java Web   Lập trình Java Spring - Java Boot  Phân tích Dữ liệu với Python     Tôi Đi Code Dạo
        </p>
      </div>
      <div
        className="basis-1/4 py-10 px-10 "
        style={{ backgroundColor: "#1e1e2a" }}
      >
        <iframe 
        src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df31791b2aa99aac%26domain%3Dcybersoft.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcybersoft.edu.vn%252Fff8ac9013dc014%26relation%3Dparent.parent&container_width=0&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=340" 
        frameborder="0"
        style={{border: "none", visibility: "visible", width: "340px", height: "325px"}}></iframe>
        <p
          style={{
            marginTop: "20px",
            color: "#fff",
            fontWeight: "500",
            fontSize: "1.3rem",
          }}
        >
         Lập trình Frontend Lập trình NodeJS      Lập trình Backend   Lập trình Java Web   Lập trình Java Spring - Java Boot  Phân tích Dữ liệu với Python     Tôi Đi Code Dạo
        </p>
      </div>
    </div>
  );
};

export default Footer;