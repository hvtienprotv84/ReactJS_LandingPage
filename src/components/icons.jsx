import { FaFacebookF, FaGithub, FaPhoneAlt, } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
// import { LuShare2 } from "react-icons/lu";

import "./icons.styles.css";

const Icons = () => {
  const handleButtonClick1 = () => {
    window.location.href = 'https://www.facebook.com/vinhtien.huynh.77/';
  };
  const handleButtonClick2 = () => {
    window.location.href = 'https://github.com/hvtienprotv84';
  };
  const handleButtonClick3 = () => {
    const userEmail = 'huynhvinhtien.84@gmail.com'; // Địa chỉ email của bạn
    const redirectURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(userEmail)}`;
    window.location.href = redirectURL;
  };
  return (
    <div className="icons-container">
      <div className="icon-circle-container" onClick={handleButtonClick1}>
        <FaFacebookF className="social-media-icons facebook" />
        <button className="icon-label" id="facebook">Facebook của tui</button>
      </div>
      <div className="icon-circle-container" onClick={handleButtonClick2}>
        <FaGithub className="social-media-icons github" />
        <button className="icon-label" id="github">Github của tui</button>
      </div>
      <div className="icon-circle-container">
        <FaPhoneAlt className="social-media-icons twitter" />
        <button className="icon-label" id="phone"> 093 110 3224</button>
      </div>
      <div className="icon-circle-container" onClick={handleButtonClick3}>
        <MdMarkEmailUnread  className="social-media-icons share" />
        <p className="icon-label" id="mail">Gmail của tui</p>
      </div>
    </div>
  );
};

export default Icons;
