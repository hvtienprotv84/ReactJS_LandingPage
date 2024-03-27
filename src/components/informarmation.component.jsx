import GridCircles from "./grid.circles.component";
import ImageSlider from "./image-slider.component";
import "./information.component.styles.css";

const InformationComponent = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://hvtienprotv84.github.io/MyWebsite/';
  };
  return (
    <div className="information-container">
      <div className="title">
        <h1 style={{ color: "red" }}>
          Huỳnh Vĩnh Tiến <span style={{ color: "#0d9206" }}>Đang Học </span>
          <span style={{ color: "#0d9206" }}> <span2 style={{ color: "#00d8ff", fontWeight: "bold" }}>ReactJS</span2></span>
        </h1> 
      </div>
      <div className="body-text">
        Xin Chào Mọi Người! <br/>Mình Là <span className="myname" style={{ color: "red", fontWeight: "bold" }}>Huỳnh Vĩnh Tiến</span> <br/>Mình Đang Học <span2 style={{ color: "#00d8ff", fontWeight:"bold" }}>ReactJS</span2> và Đây Landing Page :)))
      </div>
      <GridCircles />
      <button className="btn" onClick={handleButtonClick}>Đến Website Chính Của Tui Nè :v</button>
      <ImageSlider />
    </div>
  );
};

export default InformationComponent;
