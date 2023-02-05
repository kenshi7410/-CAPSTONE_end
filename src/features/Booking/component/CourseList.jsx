import React from 'react'
import { fetchCourseAction } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Pagination, Row } from "antd";
import { useEffect } from 'react';


const CourseList = () => {
    const courseList = useSelector((state) => state.booking.courseList);
    console.log(courseList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCourseAction())
    },[])
    return (courseList &&
        <div className="container mx-auto">
            <h2 className='py-20 ml-14'>Các khoá học mới nhất</h2>
            <Row gutter={30}>
                {courseList?.map((item) => (
                    <Col key={item.maDanhMuc} className="flex justify-center align-middle" xs={24} sm={12} md={8} lg={6}>
                        <Card
                            hoverable
                            style={{ width: "100%", height: "100%" }}
                            cover={
                                <img
                                    className="h-50 object-cover object-left-top"
                                    alt={item.biDanh}
                                    src={item.hinhAnh}
                                />
                            }
                        >
                            <h1 className="text-3xl my-2 font-semibold h-20">
                                {item.tenKhoaHoc}
                            </h1>
                            {/* <p className="text-2xl my-2 h-36">
                                {item.moTa.substr(0, 100) + "..."}
                            </p> */}
                            <Link to={`/detail/${item.maKhoaHoc}`}>
                                <Button type="primary" size="large">
                                    Đăng ký
                                </Button>
                            </Link>
                        </Card>
                    </Col>
                ))}
            </Row>
            {courseList.items && (
                <Pagination
                    defaultCurrent={courseList.currentPage}
                    total={courseList.totalCount}
                    pageSize={10}
                    onChange={(page) => {
                        dispatch(fetchCourseAction(page));
                    }}
                />
            )}
        </div>
    )
}

export default CourseList