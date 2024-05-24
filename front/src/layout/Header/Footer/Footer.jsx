import React from "react";
import "./footer.css";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";


const Footer = () => {
  return (
      <div>
    <div className="footer">
      <div className="product">
        <h1 className="foot">Top Products</h1>
        <p style={{ color: "grey", marginTop: "20px" }}>Managed Website</p>
        <p style={{ color: "grey" }}>Manage Reputation</p>
        <p style={{ color: "grey" }}>Power Tools</p>
        <p style={{ color: "grey" }}>Marketing Service</p>
      </div>

      <div className="quick">
        <h1 className="foot">Quick Links</h1>
        <p style={{ color: "grey", marginTop: "20px" }}>Jobs</p>
        <p style={{ color: "grey" }}>Brand Assets</p>
        <p style={{ color: "grey" }}>Investor Relations</p>
        <p style={{ color: "grey" }}>Terms of Service</p>
      </div>

      <div className="features">
        <h1 className="foot">Features</h1>
        <p style={{ color: "grey", marginTop: "20px" }}>Jobs</p>
        <p style={{ color: "grey" }}>Brand Assets</p>
        <p style={{ color: "grey" }}>Investor Relations</p>
        <p style={{ color: "grey" }}>Terms of Service</p>
      </div>

      <div className="resources">
        <h1 className="foot">Resources</h1>
        <p style={{ color: "grey", marginTop: "20px" }}>Guides</p>
        <p style={{ color: "grey" }}>Research</p>
        <p style={{ color: "grey" }}>Experts</p>
        <p style={{ color: "grey" }}>Agencies</p>
      </div>

      <div>
        <h1 className="foot">Newsletter</h1>
        <p style={{ color: "grey", marginTop: "20px" }}>
          Heaven fruitful doesn't over lesser in days.
        </p>
        <p style={{ color: "grey" }}>Appear creeping</p>
        <div className="inputbutton">
          <input
            style={{ marginTop: "30px", width: "200px", height: "30px" }}
            placeholder="Email Address"
          />
          <button
            style={{
              marginTop: "30px",
              width: "100px",
              height: "30px",
              color: "white",
              backgroundColor: "red",
              border: "none",
            }}
          >
            subscribe
          </button>
        </div>
      </div>
    </div>
<div className="end">
    <div>
    <h3 className="footerh3">Copyright ©2024 All rights reserved | This template is made with<CiHeart />by <span style={{color:"red"}}>Colorlib</span>
 </h3>
 </div>
 <div className="endicons">
 <FaFacebookF />
 <FaTwitter />
 <TbWorld />


 </div>
 </div>
    </div>
  );
};

export default Footer;
