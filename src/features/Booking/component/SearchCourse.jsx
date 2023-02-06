import { Col, Row, Card, Button } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCardAction } from '../redux/action';

const SearchCourse = () => {
  const search = useSelector((state) => state.booking.search);
  console.log(search);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchCardAction(name))
  },[name])
  const param = useParams()
  var name = param.tenKhoaHoc

  return (
    <div>
       <Row
      gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}
    >
      <Col className="gutter-row " span={6} key={search.tenKhoaHoc}>
      <Card
                hoverable
                style={{ width: "100%", height: "100%" }}
                cover={
                  <img
                    className="h-100 object-cover object-left-top"
                    style={{ height: "15rem" }}
                    alt={search.biDanh}
                    src={search.hinhAnh}
                  />
                }
              >
                <h1 className="text-3xl my-2 font-semibold h-20">
                  {search.tenKhoaHoc}
                </h1>
                {/* <p className="text-2xl my-2 h-36">
                                {item.moTa.substr(0, 100) + "..."}
                            </p> */}
                <Link to={`/search/${search.tenKhoaHoc}`}>
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
    </Row>
    </div>
  )
}

export default SearchCourse