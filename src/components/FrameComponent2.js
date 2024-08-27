import Card from "./Card";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`school-sound-inner ${className}`}>
      <div className="content-block-parent">
        <div className="content-block">
          <div className="block-content">
            <div className="fixed-width-fixed-height-sec-1" />
            <h1 className="h2-section-title-4-sec-">Approdable Packages</h1>
            <br></br>
            <div className="paragraph-sec-">
              <p className="problems-trying-to">{`Problems trying to resolve the conflict between `}</p>
              <p className="problems-trying-to">{`the two major realms of Classical physics: `}</p>
              <p className="problems-trying-to">{`Newtonian mechanics `}</p>
            </div>
            <div className="h6-parent">
              <a href="#" className="h6">Learn More</a>
              <div className="icon-arrow-next-wrapper">
                <img
                  className="icon-arrow-next"
                  loading="lazy"
                  alt=""
                  src="/icon-arrownext.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero">
          <Card
            iconCoolIconN2="/icon-cooliconn2.svg"
            h5FeatureTitleSec="Certified Teacher"
          />
          <Card
            iconCoolIconN2="/icon-cooliconn5.svg"
            h5FeatureTitleSec="Expert instruction"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
