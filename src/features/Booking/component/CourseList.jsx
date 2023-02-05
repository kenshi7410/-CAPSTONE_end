import React from 'react'
import { fetchCardAction, fetchCourseAction } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Pagination, Row } from "antd";
import { useEffect } from 'react';


const CourseList = () => {
    const card = useSelector((state) => state.booking.card);
    console.log(card);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCardAction())
    },[])
    return (card &&
        <div className="container mx-auto">
        <h2 className="py-20 ml-14">Các khoá học mới nhất</h2>
        <Row gutter={30}>
          {card?.map((item) => (
            <Col
              key={item.maKhoaHoc}
              className="flex justify-center align-middle"
              style={{ marginBottom: "20px" }}
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <Card
                hoverable
                style={{ width: "100%", height: "100%" }}
                cover={
                  <img
                    className="h-100 object-cover object-left-top"
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

export default CourseList