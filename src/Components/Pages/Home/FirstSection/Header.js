import React from "react";
import { Link } from "react-router-dom";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Popover } from "antd";

const Header = (props) => {
  const onClickCrescent = () => {
    window.location.href = "/";
  };

  // const content = <Input placeholder="input with clear icon" allowClear />;

  return (
    <div className="header-div">
      <div className="sub-header-div">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.909"
            height="29.909"
            viewBox="0 0 25.909 25.909"
            onClick={onClickCrescent}
          >
            <path
              id="Path_9340"
              data-name="Path 9340"
              d="M6993.517,2613.946a14.106,14.106,0,0,0,25.909,7.727,14.106,14.106,0,0,1-19.528-19.528A14.092,14.092,0,0,0,6993.517,2613.946ZM7013,2610.82l2.417-2.356-3.341-.485-1.493-3.027-1.494,3.027-3.341.485,2.418,2.356-.57,3.327,2.987-1.571,2.987,1.571Z"
              transform="translate(-6993.517 -2602.144)"
              fill="#94de1d"
            />
          </svg>

          <Link className="logo-item2" to="/">
            NSCIA
          </Link>
        </div>

        <ul className="nav-items">
          {/* <li>
            <Link to="/" className="item">
              Home
            </Link>
          </li> */}
          <li>
            <Link to="/" className="item">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="item">
              Governance
            </Link>
          </li>
          <li>
            <Link to="/" className="item">
              Discover
            </Link>
          </li>
          <li>
            <Link to="/" className="item">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/" className="item">
              Contact
            </Link>
          </li>
          {/* <li>
            <span>
              <Link to="/" className="item">
                More
              </Link>
              <CaretDownOutlined
                className="arrow-down"
                twoToneColor="#ffffff"
              />
            </span>
          </li> */}
          {/* <li>
            <Link to="/" className="item">
              <Popover placement="left" content={content}>
                <SearchOutlined className="search-icon" size="large" />
              </Popover>
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
