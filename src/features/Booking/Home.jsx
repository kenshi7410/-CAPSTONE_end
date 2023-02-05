import { Button, Carousel } from 'antd'
import React from 'react'
import CourseList from './component/CourseList'


const Home = () => {

  return (
    <div>

      <Carousel autoplay>
        <div>
          <h3><img src="https://repository-images.githubusercontent.com/126577260/3c924980-61ac-11e9-8e4e-6e50e0cec366" alt="js" className='w-full h-full object-cover' /></h3>
        </div>
        <div>
        <h3><img src="https://dz2cdn1.dzone.com/storage/temp/14227893-1607949811370.png" alt="node js" className='w-full h-full object-cover' /></h3>
        </div>
      </Carousel>

      <CourseList />

    </div>
  )
}

export default Home