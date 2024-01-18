import React from 'react'
import './about.css';
import img1 from "../../assets/abut.png"

function About() {
  return (
    <>
      <div className="page-heading about-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-content">
                <h4>about us</h4>
                <h2>our company</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='AboutMainContaint'>
        <h2>Our History </h2>
        <div className='ParagraphMain'>
          <div className='col-lg-6 col-12 mb-3'>
            <p>ASBM Industry PLC, owned and established as business firm by visionary young & dynamic Ethiopian entrepreneurs family in the year of 2006. Backed on the earlier rooted family business experience in various line of operation and reviewing the recurrent Ethiopian business dynamism tailored with courageous business environment, the company has strategically affix its platform and involved on textile industry</p>
            <p className='paragraphbottom1'>Our business strategy has been establishing and producing all set of textile input within the company parameter starting from spinning to stiching step in order to create sustainable, quality and competitive market supply.</p>
          </div>
          <div className='col-lg-6 col-12 mb-3'>
            <p className='paragraphbottom2'>With our corporate philosophy in mind, Always striving for the best quality product we remain committed to provide a better life for everyone. As a manufacturer, we operate well by the virtue of sound management and strict production policies. An as a corporate citizen, we fulfill our obligation by providing high value-added quality products and service at reasonable prices.</p>
          </div>
        </div>
      </div>
      <div className='aboutVision '>
    <div className='col-lg-6 col-12 mb-3'>
        <img src={img1} className='aboutImg1' />
    </div>
    <div className='col-lg-6 col-12 mb-3 Vision'>
        <h2>OUR MISSION</h2>
        <p>To be a major competitor in the sector by creating productive and well-trained human resources along with corporate social responsibility</p>
    </div>
</div>
<div className='aboutVision '>
    <div className='col-lg-6 col-12 mb-3'>
        <img src={img1} className='aboutImg1' />
    </div>
    <div className='col-lg-6 col-12 mb-3 Vision'>
        <h2>OUR MISSION</h2>
        <p>To be a major competitor in the sector by creating productive and well-trained human resources along with corporate social responsibility</p>
    </div>
</div>


    </>
  )
}

export default About
