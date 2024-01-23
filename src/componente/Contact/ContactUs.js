import React from "react";
import "./contact.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import redMarkerIcon from "./red.png"; // No need for directory changes
import { useForm } from "react-hook-form";
const libraries = ["places"];
function ContactUs() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  const mapContainerStyle = {
    flex: "1", // Use flex property to take up remaining space
    minHeight: "400px", // Set a minimum height for the map
  };

  const homeLocation = {
    lat: 9.041884, // replace with the actual latitude of your home
    lng: 38.713022, // replace with the actual longitude of your home
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBe9CvucIPIOfiTIeIVplMIprvRIehgNic",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  const zoom = 16;
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
      <div className="container contact_us">
        <div className="row">
          <div className="col-12 col-sm-6  col-lg-6  wow fadeInLeft">
            <form className="fables-contact-form">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 mb-4"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control rounded-0 p-3 mb-4"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control rounded-0 p-3 mb-4"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control rounded-0 p-3 mb-4"
                  placeholder="Message"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className=" form-control btn fables-second-background-color rounded-0 text-white btn-block p-3 mb-4"
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center justify-content-center">
            <div style={{ flex: "1", minHeight: "400px" }}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={zoom}
                center={homeLocation}
              >
                <Marker
                  position={homeLocation}
                  icon={{
                    url: redMarkerIcon,
                    scaledSize: new window.google.maps.Size(100, 100),
                  }}
                />
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
