import React from 'react'
import { Button, Form, Input, Switch } from "antd";
import { DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import dayjs from "dayjs";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate, useParams } from "react-router-dom";
import Nav from "./components/Nav";
import { fetchCourseUploadAction } from './redux/action';


const EditCourse = () => {
    var thunghiem = {};
    const handChange = (e) => {
        thunghiem = e.target.files[0];
        //console.log(thunghiem);
    };
    const navigate = useNavigate();
    const onFinish = (value) => {
        if (value.ngayTao) {
            var values = {
                ...value,
                ngayTao: value["ngayKhoiChieu"].format("DD-MM-YYYY"),
            };
        } else {
            values = { ...value };
        }
        console.log("dữ liệu từ form:", values);
        const {
            maKhoaHoc = CourseDetailEdit.maKhoaHoc,
            biDanh = CourseDetailEdit.biDanh,
            tenKhoaHoc = CourseDetailEdit.tenKhoaHoc,
            moTa = CourseDetailEdit.moTa,
            ngayTao = CourseDetailEdit.ngayTao,
            maDanhMucKhoaHoc = CourseDetailEdit.maDanhMucKhoaHoc,

        } = values;

        var formData = new FormData();
        formData.append("maKhoaHoc", maKhoaHoc);
        formData.append("biDanh", biDanh);
        formData.append("tenKhoaHoc", tenKhoaHoc);
        formData.append("moTa", moTa);
        formData.append("ngayTao", ngayTao);
        formData.append("maDanhMucKhoaHoc", maDanhMucKhoaHoc);
        formData.append("maNhom", "GP01");
        formData.append("File", thunghiem);
        dispatch(fetchCourseUploadAction(formData));
        navigate("/admin");
        // console.log("formData", formData.get("File"));
    };
    const dispatch = useDispatch();
    const params = useParams();
    const idCourse = params.maKhoaHoc * 1;

    const adminCourse = useSelector((state) => state.admin.card);
    const CourseDetailEdit = adminCourse.items?.find((item) => {
        return item.maKhoaHoc === idCourse;
    });

    console.log("CourseDetailEdit", CourseDetailEdit);

    return (
        CourseDetailEdit && (
            <div className="flex">
                <div className="basis-1/6 h-max ">
                    <Nav />
                </div>
                <div className="basis-5/6  bg-slate-100">
                    <div className="bg-white m-3 px-6 ">
                        <h2>Thêm phim mới </h2>
                        <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"
                            onFinish={onFinish}
                            name="basic"
                        >
                            <Form.Item label="Tên phim :" name="tenPhim">
                                <Input defaultValue={CourseDetailEdit.tenPhim} />
                            </Form.Item>
                            <Form.Item label="Trailer :" name="trailer">
                                <Input defaultValue={CourseDetailEdit.trailer} />
                            </Form.Item>
                            <Form.Item label="Mô tả :" name="moTa">
                                <TextArea
                                    defaultValue={CourseDetailEdit.moTa}
                                    autoSize={{
                                        minRows: 4,
                                        maxRows: 20,
                                    }}
                                />
                            </Form.Item>

                            <Form.Item label="Ngày khởi chiếu :" name="ngayKhoiChieu">
                                <DatePicker
                                    defaultValue={dayjs(
                                        `${CourseDetailEdit.ngayKhoiChieu}`,
                                        "YYYY-MM-DD"
                                    )}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Đang chiếu :"
                                valuePropName="checked"
                                name="dangChieu"
                            >
                                <Switch defaultChecked={CourseDetailEdit.dangChieu} />
                            </Form.Item>
                            <Form.Item
                                label="Sắp chiếu :"
                                valuePropName="checked"
                                name="sapChieu"
                            >
                                <Switch defaultChecked={CourseDetailEdit.sapChieu} />
                            </Form.Item>
                            <Form.Item label="Hot :" valuePropName="checked" name={"hot"}>
                                <Switch defaultChecked={CourseDetailEdit.hot} />
                            </Form.Item>
                            <Form.Item label="Số sao :" name={"danhGia"}>
                                <Input defaultValue={CourseDetailEdit.danhGia} />
                            </Form.Item>
                            <Form.Item label="Upload :">
                                <Input type="file" onChange={handChange} />
                                <img src={CourseDetailEdit.hinhAnh} alt="" className="w-44" />
                            </Form.Item>
                            <Form.Item label="Tác vụ :">
                                <Button type="primary" htmlType="submit">
                                    Sửa phim
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    );

}

export default EditCourse