import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            veritatis illum autem dignissimos voluptate voluptatum totam
            provident reiciendis? Optio maxime maiores, quasi facilis magnam
            voluptatum distinctio harum eveniet sed reprehenderit pariatur omnis
            vel earum autem consectetur, nostrum aliquam consequuntur.
            Obcaecati, enim! Est explicabo magni qui voluptatibus culpa voluptas
            possimus quo.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" srcset="" />
            <img src={assets.twitter_icon} alt="" srcset="" />
            <img src={assets.linkedin_icon} alt="" srcset="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 991-668-6254</li>
            <li>contact@vinayak.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ tomato.com -All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
