import React from 'react'
import SmallCards from '../Utils/SmallCards'
import LargeNewsCard from '../Utils/LargeNewsCard'
import LecturesCard from '../Utils/LecturesCard'

import MaskGroup from '../../assets/image/MaskGroup.png'
import MaskGroup2 from '../../assets/image/MaskGroup2.png'
import towers from '../../assets/image/towers.png'
import lecture1 from '../../assets/image/lecture1.png'
import program from '../../assets/image/program.png'

function NewsAndLectures() {
  const smallCardProps = {
    img: MaskGroup,
    headline: "NSCIA Research, Innovation Unit Seeks Partnership With Daily Trust",
  }
  const smallCardProps2 = {
    img: MaskGroup2,
    headline: "NSCIA Declares Nationwide Prayers against Pandemic",
  }
  const largeCardProps = {
    img: towers,
    headline: "How CBN’s non-interest intervention credits will deepen financial inclusion in Nigeria — NSCIA"
  }
  const lectureCardProps = {
    width: "55%",
    img: lecture1,
    title: "Repositioning the Muslim Family for National Development",
    opacity: "0.8"

  }
  const lectureCardProps2 = {
    width: "25%",
    img: program,
    title: "PRograms & Events",
    opacity: "1"
  }
  return (
    <div className="news-and-lectures">
      <div className="news">
      <SmallCards smallCardProps={smallCardProps}/>
      <SmallCards smallCardProps={smallCardProps2}/>
      <LargeNewsCard largeCardProps={largeCardProps} />
      </div>

      <div className="lectures">
        <p className="lecture-title">Lectures</p>
        <div className="lecture-cards"> 
          <LecturesCard lectureCardProps={lectureCardProps} />
          <LecturesCard lectureCardProps={lectureCardProps2} />
        </div>

      </div>
    </div>
  )
}

export default NewsAndLectures
