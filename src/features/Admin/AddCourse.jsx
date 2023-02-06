import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Nav from './components/Nav';
import { Button, Form, Input, Select, Switch } from "antd";
import TextArea from "antd/es/input/TextArea";
import { DatePicker } from "antd";
import { fetchCoursePic } from './redux/action';


const AddCourse = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    const handChange = (e) => {
        setImg(e.target.files[0]);
    };
    const [img, setImg] = useState(null);
    const navigate = useNavigate();
    const onFinish = async (value) => {
        const values = {
            ...value,
            ngayTao: value["ngayTao"].format("DD-MM-YYYY"),
            hinhanh: img,
        };
        console.log("dữ liệu từ form:", values);
        const {
            maKhoaHoc = "",
            biDanh = "",
            tenKhoaHoc = "",
            moTa = "",
            ngayTao = "",
            maDanhMucKhoaHoc = "",
            hinhanh,
        } = values;

        var formData = new FormData();
        formData.append("maKhoaHoc", maKhoaHoc);
        formData.append("biDanh", biDanh);
        formData.append("tenKhoaHoc", tenKhoaHoc);
        formData.append("moTa", moTa);
        formData.append("ngayTao", ngayTao);
        formData.append("maDanhMucKhoaHoc", maDanhMucKhoaHoc);
        formData.append("maNhom", "GP01");
        formData.append("File", hinhanh, hinhanh.name);
        await dispatch(fetchCoursePic(formData));
        navigate("/admin");
        // console.log("formData", formData.get("File"));
    };

    const dispatch = useDispatch();


    return (
        <div className="flex">
            <div className="basis-1/6  ">
                <Nav />
            </div>
            <div className="basis-5/6  bg-slate-100">
                <div className="bg-white m-3 px-6 ">
                    <h2>Thêm khoá học mới</h2>
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
                        <Form.Item label="Mã khoá học :" name="maKhoaHoc">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Bí danh :" name="biDanh">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Tên khoá học :" name="tenKhoaHoc">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Mô tả :" name="moTa">
                            <TextArea
                                autoSize={{
                                    minRows: 4,
                                    maxRows: 20,
                                }}
                            />
                        </Form.Item>
                        <Form.Item label="Mã Danh Mục:" name="maDanhMuc">
                            <Select
                                defaultValue="BackEnd"
                                style={{
                                    width: 170,
                                }}
                                onChange={handleChange}
                                options={[
                                    {
                                        value: 'Design',
                                        label: 'Thiết kế Web',
                                    },
                                    {
                                        value: 'BackEnd',
                                        label: 'Lập trình Backend',
                                    },
                                    {
                                        value: 'DiDong',
                                        label: 'Lập trình di động',
                                    },
                                    {
                                        value: 'FrontEnd',
                                        label: 'Lập trình FrontEnd',
                                    },
                                    {
                                        value: 'FullStack',
                                        label: 'Lập trình FullStack',
                                    },
                                    {
                                        value: 'TuDuy',
                                        label: 'Tư duy lập trình',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Ngày tao :" name="ngayKhoiChieu">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="Upload :">
                            <Input type="file" onChange={handChange} />
                        </Form.Item>
                        <Form.Item label="Tác vụ :">
                            <Button type="primary" htmlType="submit">
                                Thêm khoá học
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default AddCourse