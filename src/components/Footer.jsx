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
            <i></i>:376 Võ Văn Tần - Quận 3
          </p>
          <p
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            <i></i>:376 Võ Văn Tần - Quận 3
          </p>
          <p
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            <i></i>:376 Võ Văn Tần - Quận 3
          </p>
          <p
            style={{
              marginTop: "20px",
              color: "#fff",
              fontWeight: "500",
              fontSize: "1.3rem",
            }}
          >
            <i></i>:376 Võ Văn Tần - Quận 3
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
          Lập trình FRONT END Lập trình ReactJS Lập trình React Angular Lập
          trình tư duy Lập trình NodeJS Lập trình Backend Lập trình Web Lập
          trình java Spring - Java Boot Tôi đi code dạo Học SEO Hà Nội ở Vietmoz
          Học lập trình trực tuyến.
        </p>
      </div>
      <div
        className="basis-1/4 py-10 px-10 "
        style={{ backgroundColor: "#1e1e2a" }}
      >
        <img
          src="https://icdn.dantri.com.vn/thumb_w/660/2021/08/17/okalumnibai-10pham-huy-hoangver-12docx-1629211989482.png"
          alt="er"
          style={{width:"30rem"}}
        />
        <p
          style={{
            marginTop: "20px",
            color: "#fff",
            fontWeight: "500",
            fontSize: "1.3rem",
          }}
        >
          fskdafsdfhkh - kdhfaskfhkadsh -fksdjfkjfskdj -fkdjsfajsdkfjfkas
          -fkdsjfaksfjkfj sd- sdkfjaskfjska fskdafsdfhkh - kdhfaskfhkadsh
          -fksdjfkjfskdj -fkdjsfajsdkfjfkas -fkdsjfaksfjkfj sd- sdkfjaskfjska
          fskdafsdfhkh - kdhfaskfhkadsh -fksdjfkjfskdj -fkdjsfajsdkfjfkas
          -fkdsjfaksfjkfj sd- sdkfjaskfjska
        </p>
      </div>
    </div>
  );
};

export default Footer;