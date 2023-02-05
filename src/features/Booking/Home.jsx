import { Button, Carousel } from 'antd'
import React from 'react'
import CourseList from './component/CourseList'


const Home = () => {

  return (
    <div>

      <Carousel autoplay >
        <div>
          <h3><img src="https://www.paragyte.com/img/JavaScript_Banner.png" alt="js" className='w-full h-auto object-cover' style={{height:"30rem"}} /></h3>
        </div>
        <div>
        <h3><img src="https://cdn.w3villa.com/production/assets/pages/node-js-1ef5e6a0fc92a100318db75b5399c44ffa3e36dce9d2a0ce17fe050e45f0bdfb.jpg" alt="node js" className='w-full h-auto object-cover' style={{height:"30rem"}} /></h3>
        </div>
      </Carousel>

      <CourseList />

    </div>
  )
}

export default Home