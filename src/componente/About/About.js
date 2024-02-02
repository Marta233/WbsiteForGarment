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
                Mele Textile PLC, founded in 2022 by a visionary and
                dynamic Ethiopian entrepreneurial family, stands at the forefront
                of innovation and excellence in the textile industry.
                From its modest origins with just 2 sewing machines and
                3 employees, the company has flourished into a powerhouse
                with 20 cutting-edge sewing machines and a skilled
                workforce of 23. From its inception,
                the company has strategically positioned itself within the textile sector,
                showcasing a keen understanding of market dynamics and consumer preferences.
                With a commitment to quality and innovation,

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

                  Distinguished for producing top-notch T-shirts, dresses, and
                  a variety of other textile products, Mele Textile PLC sets itself
                  apart through a commitment to excellence. Beyond simply adopting the
                  latest technologies in textile manufacturing, the
                  company has cultivated a collaborative and forward-thinking work culture.
                </p>
              </div>

              <div>
                <p className="paragraphbottom2">
                  Mele Textile PLC's growth is a testament to its commitment
                  to quality and excellence, and as it continues to expand,
                  it remains dedicated to making a lasting impact on the
                  textile sector while contributing to the economic growth
                  of Ethiopia.
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
            To drive financial growth, enhance production through machinery expansion, and actively contribute 
            to our community by creating employment opportunities for the unemployed.
              
            </p>
          </div>
        </div>
        <div className="aboutVision2 ">
          <div className="Vision">
            <h2>Our Vission</h2>
            <p>
            To assert a global presence by excelling in both quality and quantity, 
              setting benchmarks that transcend international standards.
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
