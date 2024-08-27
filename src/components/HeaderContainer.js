import PropTypes from "prop-types";
import "./HeaderContainer.css";

const HeaderContainer = ({ className = "" }) => {
  return (
    <header className={`header-container ${className}`}>
      <div className="header-wrapper">
        <div className="brand-container">
          <div className="brand-wrapper">
            <a className="brandname">khaled kelani</a>
            <nav className="navigation-container">
              <nav className="navigation">
                <div className="a">
                  <a href="#" className="link">Home</a>
                </div>
                <div className="a1">
                  <a href="#" className="link1">Product</a>
                </div>
                <div className="a2">
                  <a href="#" className="link2">Pricing</a>
                </div>
                <div className="a3">
                  <a href="#" className="link3">Contact</a>
                </div>
              </nav>
            </nav>
          </div>
        </div>
        <div className="header-content">
          <div className="content-wrapper">
            <div className="a4">
              <a href="#" className="button-label">Login</a>
            </div>
          </div>
          <button className="buttonbtnprimary-color">
            <a className="building-superior-product">JOIN US</a>
            <div className="button-icon-container">
              <img
                className="icn-arrow-right-icn-xs"
                alt=""
                src="/icn-arrowright-icnxs.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

HeaderContainer.propTypes = {
  className: PropTypes.string,
};

export default HeaderContainer;
