import footerCss from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={footerCss.footer}>
      <div className={footerCss.icon}>
        <Link to={"https://facebook.com"} target="_blank">
          <span className="mx-1 text-white">
            <FaFacebookF />
          </span>
        </Link>
        <Link to={"https://www.linkedin.com"} target="_blank">
          <span className="mx-1 text-white">
            <FaLinkedinIn />
          </span>
        </Link>
        <Link to={"https://www.youtube.com"} target="_blank">
          <span className="mx-1 text-white">
            <FaYoutube />
          </span>
        </Link>
        <Link to={"http://www.ymail.com"} target="_blank">
          <span className="mx-1 text-white">
            <FaYahoo />
          </span>
        </Link>
        <Link to={"https://www.gmail.com"} target="_blank">
          <span className="mx-1 text-white">
            <CgMail />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
