import { useMemo } from "react";
import PropTypes from "prop-types";
import "./InfoWrapper.css";

const InfoWrapper = ({
  className = "",
  linkProductCategory,
  propTextDecoration,
}) => {
  const smallStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={`info-wrapper ${className}`}>
      <div className="frame-1-sec-">
        <div className="link-product-category-wrapper">
          <b className="link-product-category">{linkProductCategory}</b>
        </div>
        <div className="icon-emojione-star-parent">
          <img
            className="icon-emojione-star"
            alt=""
            src="/icon-emojionestar.svg"
          />
          <div className="small">4.9</div>
        </div>
      </div>
      <b className="h5-product-title-sec-">Every Client Matters</b>
      <div className="paragraph-product-description-container">
        <p className="we-focus-on">{`We focus on ergonomics and `}</p>
        <p className="we-focus-on">{`meeting you where you work. It's `}</p>
        <p className="we-focus-on">only a keystroke away.</p>
      </div>
      <div className="sales-sec-">
        <img
          className="discount-badge-icon"
          loading="lazy"
          alt=""
          src="/frame.svg"
        />
        <b className="link-product-category">15 Sales</b>
      </div>
      <div className="prices-sec-">
        <b className="h5-price">$16.48</b>
        <b className="h5-price1">$6.48</b>
      </div>
      <div className="frame-1-sec-1">
        <div className="delivery-info">
          <img
            className="icon-emojione-star"
            alt=""
            src="/icon-akariconscalendar.svg"
          />
          <div className="small">22h...</div>
        </div>
        <div className="chart-info">
          <img
            className="icon-emojione-star"
            alt=""
            src="/icon-carbonchartareasmooth.svg"
          />
          <div className="small">64 Lessons</div>
        </div>
        <div className="growth-info">
          <img
            className="icon-ant-design-area-chart-out"
            alt=""
            src="/icon-antdesignareachartoutlined.svg"
          />
          <a className="small3" style={smallStyle}>
            Progress
          </a>
        </div>
      </div>
      <div className="button-sm-sec-">
        <a className="h62">Learn More</a>
        <img
          className="icn-arrow-right-icn-xs1"
          alt=""
          src="/icn-arrowright-icnxs-1.svg"
        />
      </div>
    </div>
  );
};

InfoWrapper.propTypes = {
  className: PropTypes.string,
  linkProductCategory: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default InfoWrapper;
