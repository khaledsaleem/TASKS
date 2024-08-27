import ColMd1 from "./ColMd1";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`container-wrapper ${className}`}>
      <div className="container2">
        <div className="row4">
          <div className="main-content1">
            <b className="h6-section-tag-sec-2">Team</b>
            <h2 className="h3-section-title-sec-">Get Quality Education</h2>
            <div className="paragraph-sec-5">
              <p className="problems-trying-to4">{`Problems trying to resolve the conflict between `}</p>
              <p className="problems-trying-to4">{`the two major realms of Classical physics: Newtonian mechanics `}</p>
            </div>
          </div>
        </div>
        <div className="row5">
          <ColMd1 fixedHeightSec="/fixedheight-sec@2x.png" />
          <ColMd1 fixedHeightSec="/fixedheight-sec-1@2x.png" />
          <ColMd1 fixedHeightSec="/fixedheight-sec-2@2x.png" />
          <ColMd1 fixedHeightSec="/fixedheight-sec-3@2x.png" />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
