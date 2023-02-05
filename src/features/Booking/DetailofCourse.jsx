import { Button, Col, Row } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCourseDetailAction } from './redux/action';

const DetailofCourse = () => {
    const DetailCourse = useSelector((state) => state.booking.courseDetail);
    // console.log(DetailCourse);
    const dispatch = useDispatch();
    // const params = useParams();
    useEffect(() => {
        // const maKhoaHoc = params.id
        dispatch(fetchCourseDetailAction(id))
    }, [id])
    const param = useParams()
    var id = param.maKhoaHoc

    return (DetailCourse &&
        <div className="container mx-auto py-20">
            <div

                className="flex justify-evenly align-middle flex-row-reverse">
                <Row>
                    <Col span={8}>
                        <img
                            src={DetailCourse.hinhAnh}
                            alt={DetailCourse.biDanh}
                            style={{ width: "100" }} />
                    </Col>
                    <Col span={8} offset={8}>
                        <h1 style={{ textAlign: "center" }}>{DetailCourse.tenKhoaHoc}</h1>
                        <h3>Giới thiêu khoá học</h3>
                        <p>{DetailCourse.moTa}</p>
                    </Col>
                </Row>


            </div>
            <div>
                <Link to={"#"}>
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            backgroundColor: "#b09338",
                            color: "#d0cfcd",
                            fontSize: "1.5rem",
                            width: "10rem",
                            height: "4rem",
                            fontWeight: "500",
                        }}
                    >
                        Đăng ký
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default DetailofCourse