import React from 'react'
import './contact.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
    <div className="contact-us-container">
      <div className="contact-map">
        <MapContainer
          center={mapPosition}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={mapPosition}>
            <Popup>Your garment store is here</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Your Garment Store</p>
        <p>Address: 123 Fashion Street, City</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Email: info@yourgarmentstore.com</p>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Send us a Message</h2>
          <label>Name:</label>
          <input type="text" name="name" ref={register({ required: true })} />
          {errors.name && <span>Name is required</span>}

          <label>Email:</label>
          <input
            type="text"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <span>Valid email is required</span>}

          <label>Message:</label>
          <textarea name="message" ref={register({ required: true })} />
          {errors.message && <span>Message is required</span>}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
        </>
    )
}
export default ContactUs
