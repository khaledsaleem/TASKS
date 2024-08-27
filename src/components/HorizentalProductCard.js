import { useMemo } from "react";
import PropTypes from "prop-types";
import "./HorizentalProductCard.css";

const HorizentalProductCard = ({
  className = "",
  productCover233Sec,
  linkProductCategory,
  propDisplay,
  propMinWidth,
  h5ProductTitle1Sec,
}) => {
  const linkProductCategoryStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div className={`horizental-product-card ${className}`}>
      <div className="fixed-width">
        <img
          className="product-cover-233-sec-icon"
          alt=""
          src={productCover233Sec}
        />
        <div className="tag-sec-">
          <b className="sale">Sale</b>
        </div>
        <div className="action-button-set-wrapper">
          <div className="action-button-set">
            <img className="like-icon" alt="" src="/like.svg" />
            <img className="like-icon" alt="" src="/basket.svg" />
            <img className="like-icon" alt="" src="/like.svg" />
          </div>
        </div>
      </div>
      <div className="frame-1-sec-parent">
        <div className="frame-1-sec-2">
          <div className="link-product-category-container">
            <b
              className="link-product-category1"
              style={linkProductCategoryStyle}
            >
              {linkProductCategory}
            </b>
          </div>
          <div className="icon-emojione-star-group">
            <img
              className="icon-emojione-star1"
              alt=""
              src="/icon-emojionestar.svg"
            />
            <div className="small4">4.9</div>
          </div>
        </div>
        <b className="h5-product-title-1-sec-">{h5ProductTitle1Sec}</b>
        <div className="paragraph-product-description-container1">
          <p className="we-focus-on1">{`We focus on ergonomics and `}</p>
          <p className="we-focus-on1">{`meeting you where you work. It's `}</p>
          <p className="we-focus-on1">only a keystroke away.</p>
        </div>
        <div className="sales-sec-1">
          <img className="frame-icon" alt="" src="/frame.svg" />
          <b className="h63">15 Sales</b>
        </div>
        <div className="prices-sec-1">
          <b className="h5-price2">$16.48</b>
          <b className="h5-price3">$6.48</b>
        </div>
        <div className="frame-1-sec-3">
          <div className="icon-akar-icons-calendar-parent">
            <img
              className="icon-emojione-star1"
              alt=""
              src="/icon-akariconscalendar.svg"
            />
            <div className="small5">22h...</div>
          </div>
          <div className="icon-akar-icons-calendar-parent">
            <img
              className="icon-emojione-star1"
              alt=""
              src="/icon-carbonchartareasmooth.svg"
            />
            <div className="small6">64 Lessons</div>
          </div>
          <div className="icon-akar-icons-calendar-parent">
            <img
              className="icon-ant-design-area-chart-out1"
              alt=""
              src="/icon-antdesignareachartoutlined.svg"
            />
            <div className="small7">Progress</div>
          </div>
        </div>
        <div className="button-sm-sec-1">
          <a href="#" className="h64">Learn More</a>
          <img
            className="icn-arrow-right-icn-xs2"
            alt=""
            src="/icn-arrowright-icnxs-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

HorizentalProductCard.propTypes = {
  className: PropTypes.string,
  productCover233Sec: PropTypes.string,
  linkProductCategory: PropTypes.string,
  h5ProductTitle1Sec: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default HorizentalProductCard;
