import "./footer.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_navbar ">
          <Link to="/">HOME</Link>

          <Link to="/privancy">PRIVACY</Link>

          <a href="mailto:pomofocus@gmail.com" target="_blank">
            CONTACT
          </a>

          <Link to="/app">SIMPLE PAGE</Link>
        </div>
        <div className="footer_icon ">
          <a href="https://www.facebook.com/pomofocus" target="_blank">
            <img src="https://pomofocus.io/icons/facebook.png" alt="facebook" />
          </a>
          <a to="https://twitter.com/pomofocus" target="_blank">
            <img src="https://pomofocus.io/icons/twitter.png" alt="twitter" />
          </a>
          <a href="https://climate.stripe.com/kfwPBZ" target="_blank">
            <img
              src="	https://pomofocus.io/icons/stripe-climate-badge.png"
              alt="facebook"
            />
          </a>
        </div>
        <div className="footer_yuya ">
          Made with 3 by
          <a href="https://uzu.works" target="_blank">
            Yuya Uzu
          </a>
        </div>
        <div className="footer__allrights ">
          &copy;Pomofocus 2021. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
