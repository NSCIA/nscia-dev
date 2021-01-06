import React from "react";
import { Carousel } from "antd";
import slide2 from "../../../../assets/image/slide1New.jpg";
import slide1 from "../../../../assets/image/slide2New.jpg";
import slide3 from "../../../../assets/image/slide3New.jpg";
// import slide4 from '../../../../assets/image/slide4.png';
import Slide from "./Slide";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [slide2, slide1, slide3],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    // This will not run if we met the if condition above
    this.setState((prevState) => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };

  render() {
    return (
      <div className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: "transform ease-out 0.45s",
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide
              key={i}
              image={image}
              nameAr="المجلس الأعلى للشؤون الإسلامية في نيجيريا"
              title="Nigerian Supreme Council for Islamic Affairs (NSCIA)"
              subTitle="Preserving, protecting, promoting and advancing the interest of Islam and Muslims throughout Nigeria."
              widget=""
            />
          ))}
        </div>
        <div className="arrow-div">
          <RightArrow goToNextSlide={this.goToNextSlide} />
          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        </div>
      </div>
    );
  }
}

// const Slide = ({ image }) => {
//   const styles = {
//     backgroundImage: `url(${image})`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "50% 60%",
//   };
//   return <div className="slide" style={styles}></div>;
// };

// const LeftArrow = (props) => {
//   return (
//     <div className="backArrow arrow" onClick={props.goToPrevSlide}>
//       <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
//     </div>
//   );
// };

// const RightArrow = (props) => {
//   return (
//     <div className="nextArrow arrow" onClick={props.goToNextSlide}>
//       <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
//     </div>
//   );
// };

//   constructor(props) {
//     super(props);

//     this.state = {
//       imgArr: [slide1, slide2, slide3],
//       currentIndex: 0,
//     };
//   }

//   goToPrevSlide = () => {
//     if (this.state.currentIndex === 0) return;

//     this.setState((prevState) => ({
//       currentIndex: prevState.currentIndex - 1,
//     }));
//   };

//   goToNextSlide = () => {
//     // Exiting the method early if we are at the end of the images array.
//     // We also want to reset currentIndex and translateValue, so we return
//     // to the first image in the array.
//     if (this.state.currentIndex === this.state.imgArr.length - 0) {
//       return this.setState({
//         currentIndex: 0,
//       });
//     }

//     // This will not run if we met the if condition above
//     this.setState((prevState) => ({
//       currentIndex: prevState.currentIndex + 1,
//     }));
//     // console.log(this.state.currentIndex)
//   };

//   slideWidth = () => {
//     return document.querySelector(".slider-container").clientWidth;
//   };

//   render() {
//     const contentStyle = {
//       height: "800px",
//       color: "#fff",
//       lineHeight: "160px",
//       textAlign: "center",
//       background: "#364d79",
//     };
//     return (
//       <div className="slider-container">
//         <Carousel
//           autoplay
//           dots={false}
//           nextArrow={<RightArrow />}
//           prevArrow={<LeftArrow />}
//           className="slider-container-car"
//           // appendDots={

//           // }
//         >
//           <Slide
//             nameAr="المجلس الأعلى للشؤون الإسلامية في نيجيريا"
//             title="Nigerian Supreme Council for Islamic Aﬀairs (NSCIA)"
//             subTitle="Preserving, protecting, promoting and advancing the interest of Islam and Muslims throughout Nigeria."
//             widget=""
//             img={slide2}
//           />
//           <Slide
//             nameAr="المجلس الأعلى للشؤون الإسلامية في نيجيريا"
//             title="Nigerian Supreme Council for Islamic Aﬀairs (NSCIA)"
//             subTitle="Preserving, protecting, promoting and advancing the interest of Islam and Muslims throughout Nigeria."
//             widget=""
//             img={slide1}
//             // key={ + 1}
//           />
//           <Slide
//             nameAr="المجلس الأعلى للشؤون الإسلامية في نيجيريا"
//             title="Nigerian Supreme Council for Islamic Aﬀairs (NSCIA)"
//             subTitle="Preserving, protecting, promoting and advancing the interest of Islam and Muslims throughout Nigeria."
//             widget=""
//             img={slide3}
//           />

//           <div className="arrow-div">
//           <RightArrow goToNextSlide={this.goToNextSlide} />
//           <LeftArrow goToPrevSlide={this.goToPrevSlide} />
//         </div>
//         </Carousel>

//       </div>

//     );
//   }
// }

export default ImageSlider;

// <div className="slider-container">

//   {this.state.imgArr && this.state.imgArr.map((img, i) => (
// <div
// style={{
//   display: "flex",
//   top: "62px",
//   left: "0",
//   width: "100%",
//   height: "800px",
//   position: "absolute",
//   backgroundImage: "linear-gradient(to left, #ffffff 100%, rgba(4, 20, 1, 0.856) 100%), url(" + img + ")",
//   backgroundSize: "no-repeat",
//   backgroundBlendMode: ", difference, lighten",
//   transition: "transform ease-in .1s"
// }}
// className="slide-wrapper"
// key={i + 1}>

//     <Slide
//       nameAr="المجلس الأعلى للشؤون الإسلامية في نيجيريا"
//       title="Nigerian Supreme Council for Islamic Aﬀairs (NSCIA)"
//       subTitle="Preserving, protecting, promoting and advancing the interest of Islam and Muslims throughout Nigeria."
//       widget=""
//       img={img}
//       key={i + 1}
//     />
// </div>
//   ))}

//   <div className="arrow-div">
//     <RightArrow goToNextSlide={this.goToNextSlide} />
//     <LeftArrow goToPrevSlide={this.goToPrevSlide} />
//   </div>

// </div>
