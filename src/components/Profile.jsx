import myWebPic from '../images/myWebPic.jpg';

function Profile() {
  return (
    <div className='bg'>
      <div className='overlay'>
        <div className='container'>
          {/* Top Section */}
          {/* First Row */}
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h4 style={{ color: 'white', paddingTop: 20 }}>
                Nien-Tai Ho
              </h4>
            </div>
          </div>
          {/* Second Row */}
          <div className='row'>
            <div className='col-md-12 text-center'>
              <img className='img-fluid' src={myWebPic} alt='MyPic' style={{ borderRadius: 200 }} />
              <h4 style={{ color: 'white', paddingTop: 20 }}>
                <blockquote>Software dev in a world of wonder. Fun Fact, I have photic sneeze reflex</blockquote>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
