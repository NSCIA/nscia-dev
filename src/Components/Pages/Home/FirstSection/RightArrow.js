import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons'


const  RightArrow = (props) => {
  return (
    // <div className="arrow-div-right">
      <div className="outer-circle-right" onClick={props.goToNextSlide} >
        <div className="inner-circle-right">
          {/* <CaretRightOutlined className="right-arrow" /> */}
          <i className="fas fa-caret-right right-arrow" ></i>
        </div>
      </div>
    // </div>
  )
}

export default RightArrow
