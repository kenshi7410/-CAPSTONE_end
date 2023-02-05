import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseAction } from './redux/action';
import { Button, Card, Col, Pagination, Row } from "antd";
import { Link, useParams } from 'react-router-dom';



const DetailCourseList = () => {

    const course = useSelector((state) => state.booking.courseList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCourseAction(item))
    }, [item])
    console.log(course);
    const param = useParams()
    console.log(param);
    var item = param.maDanhMuc


    return (
<div>
      <h2 className="py-20 ml-14">Các khoá học phổ biến</h2>
      <Row gutter={30}>
        {course?.map((item) => (
          <Col
            key={item.maDanhMucKhoaHoc}
            className="flex justify-center align-middle"
            style={{ marginBottom: "20px" }}
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <Card
              hoverable
              style={{
                width: "100%",
                height: "100%",
              }}
              cover={
                <img
                  className="h-50 object-cover object-left-top"
                  style={{ height: "15rem" }}
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
                <Button
                  type="primary"
                  size="large"
                  style={{
                    backgroundColor: "#eeff41",
                    color: "#000000",
                    fontSize: "1.6rem",
                    width: "10rem",
                    height: "5rem",
                    float: "right",
                    fontWeight: "500",
                  }}
                >
                  Đăng ký
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>    )
}

export default DetailCourseList