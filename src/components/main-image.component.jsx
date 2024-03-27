import { FaArrowDown } from "react-icons/fa6";
import Icons from "./icons";
import Offer from "./offer.component";
import "./main-image.styles.css";

const MainImageComponent = () => {
  return (
    <div className="parent-container">
      <Offer />
      <Icons />
      <div className="main-image-container">
        <div className="more-trips-container">
          {/* <div className="arrow-container">
            <FaArrowDown className="arrow" />
          </div> */}
          {/* <h2>Mình xin cám ơn mọi người đã xem :))</h2> */}
        </div>
      </div>
    </div>
  );
};

export default MainImageComponent;
