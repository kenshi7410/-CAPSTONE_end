import React from "react";
import logo from "./../assets/cyberlogo.png";
import { Link, NavLink } from "react-router-dom";
import { Button, Input } from "antd";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between bg-slate-700 text-white px-3">
      <div className="flex flex-col justify-between basis-4/12 py-5 px-3 bg-slate-700">
        <div>
          <div>
            <Link to="/" className="no-underline mx-5 ">
              <img src={logo} alt="logo" className="w-5/6" />
            </Link>
          </div>
          <p className="text-lg my-1">
            CyberSoft Acedemy - Hệ thống đào tạo lập trình chuyên sâu theo dự án
            thực tế
          </p>
        </div>
        <div>
          <h1 className="text-xl">NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h1>
          <p className="text-lg my-1">
            CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình Cyber
            ive hoàn toàn MIỄN PHÍ và các chương trình khuyến mãi hấp dẫn đến
            các bạn
          </p>
          <div>
            <Input.Group compact>
              <Input
                style={{
                  width: "calc(100% - 100px)",
                }}
                placeholder="your address@gmail.com"
              />
              <Button className="bg-yellow-500 ml-2" type="primary">
                Đăng kí
              </Button>
            </Input.Group>
          </div>
        </div>
        <div>
          <p>Trụ sở: 112 Cao Thắng, Quận 3</p>
          <p>459 Sư Vạn Hạnh, Quận 10</p>
          <p>117 Tân Cảng, Bình Thạnh</p>
          <p>110 Đường số 10, Park Hill City Land, Phan Văn Trị, Gò Vấp</p>
        </div>
      </div>
      <div className="basis-4/12 py-5 px-3 bg-slate-700 ">
        <h2 className="my-0">ĐĂNG KÝ TƯ VẤN</h2>
        <Input.Group compact>
          <Input
            style={{
              width: "calc(100%)",
            }}
            placeholder="Họ và tên"
            className="mt-2"
          />
        </Input.Group>
        <Input.Group compact>
          <Input
            style={{
              width: "calc(100%)",
            }}
            placeholder="Email liên hệ"
            className="mt-2"
          />
        </Input.Group>
        <Input.Group compact>
          <Input
            style={{
              width: "calc(100%)",
            }}
            placeholder="Điện thoại liên hệ"
            className="mt-2"
          />
        </Input.Group>

        <Link to={"#"}>
          <Button type="primary" size="large" className="bg-yellow-500 my-4">
            ĐĂNG KÝ TƯ VẤN
          </Button>
        </Link>
        <p className="text-lg my-1">
          Lập trình Frontend Lập trình NodeJS Lập trình Backend Lập trình Java
          Web Lập trình Java Spring - Java Boot Phân tích Dữ liệu với Python Tôi
          Đi Code Dạo
        </p>
      </div>
      <div className="basis-4/12 py-5 px-3 bg-slate-700">
        <div className="w-full h-3/6">
          <iframe
            src="https://www.facebook.com/v2.12/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df31791b2aa99aac%26domain%3Dcybersoft.edu.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fcybersoft.edu.vn%252Fff8ac9013dc014%26relation%3Dparent.parent&container_width=0&height=325&hide_cover=false&hide_cta=false&href=https%3A%2F%2Fwww.facebook.com%2Flophocviet%2F&locale=vi_VN&sdk=joey&show_facepile=false&small_header=false&tabs=timeline&width=340"
            frameborder="0"
            className="w-full h-full"
          ></iframe>
        </div>
        <p className="text-lg my-5">
          Lập trình Frontend Lập trình NodeJS Lập trình Backend Lập trình Java
          Web Lập trình Java Spring - Java Boot Phân tích Dữ liệu với Python Tôi
          Đi Code Dạo
        </p>
      </div>
    </div>
  );
};

export default Footer;
