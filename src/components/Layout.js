import ColMd from "./ColMd";
import PropTypes from "prop-types";
import "./Layout.css";

const Layout = ({ className = "" }) => {
  return (
    <div className={`layout-5 ${className}`}>
      <div className="container1">
        <div className="row2">
          <div className="main-content">
            <b className="h6-section-tag-sec-1">Testimonials</b>
            <h1 className="h2-section-title-4-sec-1">Watch our Courses</h1>
            <div className="paragraph-sec-4">
              <p className="problems-trying-to3">{`Problems trying to resolve the conflict between `}</p>
              <p className="problems-trying-to3">{`the two major realms of Classical physics: Newtonian mechanics `}</p>
            </div>
          </div>
        </div>
        <div className="row3">
          <ColMd circleSec="/circle-sec@2x.png" />
          <ColMd circleSec="/circle-sec-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  className: PropTypes.string,
};

export default Layout;
