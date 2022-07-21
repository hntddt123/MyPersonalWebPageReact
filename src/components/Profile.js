import React from 'react';
import myWebPic from '../images/myWebPic.jpg';

function Profile() {
  return (
    <div className="bg">
      <div className="overlay">
        <div className="container">
          {/* Top Section */}
          {/* First Row */}
          <div className="row">
            <div className="col-md-12 text-center">
              <h4 style={{ color: 'white' }}>
                Nien-Tai Ho
              </h4>
            </div>
          </div>
          {/* Second Row */}
          <div className="row">
            <div className="col-md-12 text-center">
              <img className="img-fluid" src={myWebPic} alt="MyPic" style={{ borderRadius: 10 }} />
              <h4 style={{ color: 'white' }}>
                <blockquote>Love the world of cutting edge technology in a world of wonder</blockquote>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
