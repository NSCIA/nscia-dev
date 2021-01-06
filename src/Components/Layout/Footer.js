import { FacebookOutlined,InstagramOutlined, YoutubeOutlined, TwitterOutlined, MailOutlined } from "@ant-design/icons";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="sub-footer">
        <div className="f-sec">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.909"
            height="25.909"
            viewBox="0 0 25.909 25.909"
          >
            <path
              id="Path_9340"
              data-name="Path 9340"
              d="M6993.517,2613.946a14.106,14.106,0,0,0,25.909,7.727,14.106,14.106,0,0,1-19.528-19.528A14.092,14.092,0,0,0,6993.517,2613.946ZM7013,2610.82l2.417-2.356-3.341-.485-1.493-3.027-1.494,3.027-3.341.485,2.418,2.356-.57,3.327,2.987-1.571,2.987,1.571Z"
              transform="translate(-6993.517 -2602.144)"
              fill="#94de1d"
            />
          </svg>
          <h2>NSCIA</h2>
        </div>
        <div className="s-sec">
          <h2>CONTACT US</h2>
          <hr />
          <br />

          <ul>
            <li>Beside National Mosque,</li>
            <li>6th Street, Central Business</li>
            <li>District Central Business Dis</li>
            <li>Abuja, Federal Capital Territory</li>
          </ul>
          <p>Tel: +234 (0)813 931 0727</p>
        </div>
        <div className="t-sec">
          <h2> LINKS</h2>
          <hr />
          <br />

          <ul>
            <li>Latest News</li>
            <li>Publications</li>
            <li>Donate</li>
            <li>Careers</li>
            <li>Programs & Events</li>
          </ul>
        </div>
        <div className="fth-sec">
          <h2>Connect With Us</h2>
          <hr />
          <br />

          <ul>
            <li><FacebookOutlined className="ft-itm" /></li>
            <li><TwitterOutlined  className="ft-itm"/></li>
            <li><InstagramOutlined className="ft-itm" /></li>
            <li><MailOutlined className="ft-itm" /></li>
            <li><YoutubeOutlined  className="ft-itm"/></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <hr/>
        <p>©2020 All Rights Reserved | Nigerian Supreme Council for Islamic Affairs.</p>
      </div>
    </div>
  );
}

export default Footer;
