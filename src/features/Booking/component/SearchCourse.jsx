import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCardAction } from '../redux/action';

const SearchCourse = () => {
  const search = useSelector((state) => state.booking.search);
  // console.log(search);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchCardAction(name))
  },[name])
  const param = useParams()
  var name = param.tenKhoaHoc

  return (
    <div></div>
  )
}

export default SearchCourse