import InfoWrapper from "./InfoWrapper";
import HorizentalProductCard from "./HorizentalProductCard";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper ${className}`}>
      <div className="frame-group">
        <div className="row-wrapper">
          <div className="row1">
            <div className="thumb-concept">
              <div className="frame">
                <div className="frame1" />
                <img
                  className="rectangle-icon"
                  alt=""
                  src="/rectangle@2x.png"
                />
              </div>
              <div className="vector-parent">
                <img className="vector-icon" alt="" src="/vector.svg" />
                <img
                  className="placeholder-icon"
                  loading="lazy"
                  alt=""
                  src="/placeholder@2x.png"
                />
              </div>
            </div>
            <div className="content-container">
              <div className="fixed-width-fixed-height-sec-parent">
                <div className="fixed-width-fixed-height-sec-2" />
                <h1 className="h2-section-title-1-sec-container">
                  <p className="video-in-live">{`Video in Live `}</p>
                  <p className="video-in-live">Action</p>
                </h1>
                <div className="paragraph-sec-1">
                  <p className="video-in-live">{`Problems trying to resolve the conflict between `}</p>
                  <p className="video-in-live">{`the two major realms of Classical physics: `}</p>
                  <p className="video-in-live">{`Newtonian mechanics `}</p>
                </div>
                <div className="content-footer">
                  <a className="h65">Learn More</a>
                  <div className="icon-block-footer">
                    <img
                      className="icon-arrow-next1"
                      alt=""
                      src="/icon-arrownext.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="h6-section-tag-sec-parent">
            <b className="h6-section-tag-sec-">Practice Advice</b>
            {/* <h1 className="h2-section-title-3-sec-">Approdable Packages</h1> */}
            <div className="paragraph-sec-1">
              <p className="video-in-live">{`Problems trying to resolve the conflict between `}</p>
              <p className="video-in-live">{`the two major realms of Classical physics: Newtonian mechanics `}</p>
            </div>
          </div>
          <div className="carousel">
            <div className="horizental-product-card1">
              <div className="card-wrapper">
                <img
                  className="product-cover-231-sec-icon"
                  alt=""
                  src="/productcover231-sec@2x.png"
                />
                <div className="tag-container">
                  <div className="tag-sec-1">
                    <b className="sale1">Sale</b>
                  </div>
                  <div className="button-block">
                    <div className="like-parent">
                      <img
                        className="like-icon2"
                        loading="lazy"
                        alt=""
                        src="/like.svg"
                      />
                      <img
                        className="like-icon2"
                        loading="lazy"
                        alt=""
                        src="/basket.svg"
                      />
                    </div>
                  </div>
                </div>
                <img className="like-icon3" alt="" src="/like.svg" />
              </div>
              <InfoWrapper linkProductCategory="Training Courses" />
            </div>
            <HorizentalProductCard
              productCover233Sec="/productcover233-sec@2x.png"
              linkProductCategory="2,769 online courses	"
              h5ProductTitle1Sec="Watch our Courses"
            />
            <HorizentalProductCard
              productCover233Sec="/productcover232-sec@2x.png"
              linkProductCategory="Lifetime access"
              propDisplay="inline-block"
              propMinWidth="117px"
              h5ProductTitle1Sec="Our Experts Teacher"
            />
            <div className="horizental-product-card2">
              <div className="frame-container">
                <div className="product-cover-230-sec-parent">
                  <img
                    className="product-cover-230-sec-icon"
                    alt=""
                    src="/productcover230-sec@2x.png"
                  />
                  <img className="like-icon4" alt="" src="/like.svg" />
                  <img className="basket-icon2" alt="" src="/basket.svg" />
                  <img className="like-icon5" alt="" src="/like.svg" />
                </div>
                <div className="tag-sec-2">
                  <b className="sale1">Sale</b>
                </div>
              </div>
              <InfoWrapper
                linkProductCategory="training Courses"
                propTextDecoration="unset"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
