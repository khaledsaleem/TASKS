import PropTypes from "prop-types";
import "./ColMd.css";

const ColMd = ({ className = "", circleSec }) => {
  return (
    <div className={`col-md-61 ${className}`}>
      <div className="testimonials-card">
        <img
          className="circle-sec-icon"
          loading="lazy"
          alt=""
          src={circleSec}
        />
        <div className="card-content">
          <div className="paragraph-sec-3">
            <p className="slate-helps-you">{`Slate helps you see how many more days `}</p>
            <p className="slate-helps-you">{`you need to work to reach your financial `}</p>
            <p className="slate-helps-you">goal for the month and year.</p>
          </div>
          <div className="stars-sec-">
            <img className="icn-bxs-star-icon" alt="" src="/icn-bxsstar.svg" />
            <img
              className="icn-bxs-star-icon"
              alt=""
              src="/icn-bxsstar-1.svg"
            />
            <img
              className="icn-bxs-star-icon"
              alt=""
              src="/icn-bxsstar-2.svg"
            />
            <img
              className="icn-bxs-star-icon"
              alt=""
              src="/icn-bxsstar-3.svg"
            />
            <img className="icn-bxs-star-icon" alt="" src="/icn-bxstar.svg" />
          </div>
          <div className="frame-1-sec-4">
            <b className="h5-user-title">Regina Miles</b>
            <b className="h66">Designer</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ColMd.propTypes = {
  className: PropTypes.string,
  circleSec: PropTypes.string,
};

export default ColMd;
