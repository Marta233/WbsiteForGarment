import React, { useState } from "react";
import "./about.css";
import img1 from "../../assets/abut.png";
import img2 from "../../assets/icone.png";
function About() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const handleSeeMoreClick = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    setButtonVisible(false);
  };
  console.log("showParagraph:", showParagraph); // Add this line for debugging

  return (
    <>
      <div className="aboutmaincontainer">
        <div className="page-heading about-heading header-text">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>about</h4>
                  <h2>our company</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="AboutMainContaint">
          <h2>Our History </h2>
          <div className="mainpara">
            <div className="col-lg-6 col-12 mb-3">
              <p>
                ASBM Industry PLC, owned and established as business firm by
                visionary young & dynamic Ethiopian entrepreneurs family in the
                year of 2006. Backed on the earlier rooted family business
                experience in various line of operation and reviewing the
                recurrent Ethiopian business dynamism tailored with courageous
                business environment, the company has strategically affix its
                platform and involved on textile industry
              </p>
            </div>
            <div className="see-more-container">
              {buttonVisible && (
                <button
                  onClick={handleSeeMoreClick}
                  id="see-more-btn"
                  color="black"
                >
                  {" "}
                  See More
                </button>
              )}
            </div>
            <div
              className={
                showParagraph ? "ParagraphMain" : "ParagraphMain hidden"
              }
            >
              <div>
                <p className="paragraphbottom1">
                  Our business strategy has been establishing and producing all
                  set of textile input within the company parameter starting
                  from spinning to stiching step in order to create sustainable,
                  quality and competitive market supply.
                </p>
              </div>

              <div>
                <p className="paragraphbottom2">
                  With our corporate philosophy in mind, Always striving for the
                  best quality product we remain committed to provide a better
                  life for everyone. As a manufacturer, we operate well by the
                  virtue of sound management and strict production policies. An
                  as a corporate citizen, we fulfill our obligation by providing
                  high value-added quality products and service at reasonable
                  prices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="aboutVision1">
          <div className="col-lg-6 col-12">
            <img src={img1} className="aboutImg1" />
          </div>
          <div className=" Vision">
            <h2>Our Mission</h2>
            <p>
              To be a major competitor in the sector by creating productive and
              well-trained human resources along with corporate social
              responsibility
            </p>
          </div>
        </div>
        <div className="aboutVision2 ">
          <div className="Vision">
            <h2>Our Vission</h2>
            <p>
              To be a leading supplier on Textile sector to satisfy the ever
              growing domestic & foreign demand through quality products at
              competitive price
            </p>
          </div>
          <div className="col-lg-6 col-12">
            <img src={img1} className="aboutImg2" />
          </div>
        </div>

        <div className="MainLeadership">
          <h2>Our Leadership</h2>
          <div className="Leaders">
            <div>
              <img src={img2} />
              <h4>Ato Melaku Welde</h4>
              <div className="aboutleader">Chief Executive Officer</div>
              <span>+251954445344</span>
            </div>
            <div>
              <img src={img2} />
              <h4>Ato Melaku Welde</h4>
              <div className="aboutleader">CO-FOUNDER</div>
              <span>+2519434343</span>
            </div>
            <div>
              <img src={img2} />
              <h4>Ato Melaku Welde</h4>
              <div className="aboutleader">CO-FOUNDER</div>
              <span>+251945454535</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
