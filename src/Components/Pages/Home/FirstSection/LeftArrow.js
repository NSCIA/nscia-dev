import React from 'react'
import { CaretLeftOutlined } from '@ant-design/icons'

const SlideArrow = (props) => {
  return (
    // <div className="arrow-div">
      <div className="outer-circle-left" onClick={props.goToPrevSlide} >
        <div className="inner-circle-left">
          {/* <CaretLeftOutlined className="left-arrow"/> */}
          <i class="fas fa-caret-left left-arrow"></i>
        </div>
      </div>
    // </div>
  )
}

export default SlideArrow
