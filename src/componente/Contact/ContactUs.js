import React from 'react'
import './contact.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import iconSrc from './map-marker.png';
import L from 'leaflet';


import { useForm } from 'react-hook-form';
function ContactUs() {
  const { register, handleSubmit, errors } = useForm();
  const mapPosition = [51.505, -0.09]; // Replace with your coordinates
  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };
    return (
        <>
    <div className="page-heading contact-heading header-text">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-content">
              <h4>contact us</h4>
              <h2>let’s get in touch</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container'>
    <div className="row mb-4">
      <div className="col-12 col-sm-6 wow fadeInLeft">
        <form className="fables-contact-form">
          <div className="form-group">
            <input type="text" className="form-control rounded-0 p-3 mb-4" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-control rounded-0 p-3 mb-4" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control rounded-0 p-3 mb-4" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea className="form-control rounded-0 p-3 mb-4" placeholder="Message" rows="3"></textarea>
          </div>
          <button type="submit" className=" form-control btn fables-second-background-color rounded-0 text-white btn-block p-3 mb-4">
            Send
          </button>
        </form>
      </div>
      <div className="col-12 h-100 col-sm-6 wow fadeInRight">
      <MapContainer
  center={[31.248848, 29.966324]}
  zoom={12}
  style={{ width: '100%', height: '420px', position: 'relative' }}
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  <Marker position={[31.248848, 29.966324]} icon={L.icon({ iconUrl: iconSrc })} />
</MapContainer>

    </div>
    </div>
    </div>
    </>
  );
};

export default ContactUs
