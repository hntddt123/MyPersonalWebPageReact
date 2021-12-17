import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import myWebPic from './images/myWebPic.jpg';
import { Dropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      {/* Header design from here */}
      <nav className="navbar navbar-custom">
        <div className="container-fluid">
          <ul className="nav navbar-nav pull-left">
            <li><a>Nientai Ho</a></li>
          </ul>
          {/*  Dropdown menu  */}
          <ul className="nav navbar-nav pull-right">
            <li className="nav-item dropdown pull-right" >
              <Dropdown>
                <Dropdown.Toggle variant="dark">
                  <FontAwesomeIcon icon={faBars} />
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" className='text-center'>
                  <Dropdown.Item href="https://www.facebook.com/nientaiho"><FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' }} /></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="https://twitter.com/NientaiHo"><FontAwesomeIcon icon={faTwitter} style={{ color: '#0084b4' }} /></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="https://www.linkedin.com/in/nientaiho"><FontAwesomeIcon icon={faLinkedin} style={{ color: '#0084b4' }} /></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="https://nientaigames.blogspot.com/"><FontAwesomeIcon icon={faGamepad} /> GameBlog</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </nav>
      <div className="bg">
        <div className="overlay">
          <div className="container">
            {/* Top Section */}
            {/* First Row */}
            <div className="row">
              <div className="col-md-12 text-center">
                <h4 style={{ color: 'white' }}><blockquote>Love the world of cutting edge technology in a world of wonder</blockquote></h4>
              </div>
            </div>
            {/* Second Row */}
            <div className="row">
              <div className="col-md-4">
              </div>
              <div className="col-md-4">
                <img className='img-fluid' src={myWebPic} alt="MyPic" style={{ borderRadius: 200 }} />
              </div>
              <div className="col-md-4">
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  AboutMe Section */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 id="AboutMe">👨‍💻 About Me</h3>
            <p>
              I am software developer and I like to know the logic behind the tech.
            </p>
            <p>
              75% of me is made out of code
            </p>
            <h3>🔬Skills</h3>
            <h4>C++</h4>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
              </div>
            </div>
            <h4>Java</h4>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                aria-valuemin="0" aria-valuemax="100" style={{ width: '75%' }}>
              </div>
            </div>
            <h4>Javascript</h4>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
              </div>
            </div>
            <h4>English</h4>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
              </div>
            </div>
            <h4>Chinese</h4>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }}>
              </div>
            </div>
            <h4>Taiwanese</h4>
            <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40"
                aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3>❤️ What I love to do</h3>
            <h4>📈 Finance</h4>
            <ul>
              <li><p>Stock Market</p></li>
            </ul>
            <h4>🎞 Movies & Animations</h4>
            <ul>
              <li><p>Cowboy Bebop</p></li>
              <li><p>Ghost in the Shell</p></li>
              <li><p>Planetes</p></li>
              <li><p>Studio Ghibli</p></li>
            </ul>
            <h4>🎮 Video Games</h4>
            <ul>
              <li><p>Half-Life series</p></li>
              <li><p>Metal Gear Solid series</p></li>
              <li><p>Check my blog for more at top right corner...</p></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>💪 Who Influenced Me</h3>
            <p>Yenchi Ho (A.K.A My brother)</p>
            <p>Steve Jobs</p>
            <p>Elon Musk</p>
          </div>
        </div>
      </div>

      {/*  Project Section-- > */}
      <div className="bg2">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3 id="Projects">🛠 Personal Projects</h3>
              <h4>Repair Report iOS app with Swift</h4>
              <p>Building a simple yet good looking repair form for mobile user to fill out the form quickly</p>
            </div>
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </div >
      {/* Contact Section */}
      <div className="bg1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 id="Contact">📇 Contact Info</h3>
              <h4><a href="mailto:nientaiho@gmail.com"><span className="glyphicon glyphicon-envelope">nientaiho@gmail.com</span></a></h4>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container">
        <Row className="row">
          <Col className="text-center">
            <h5>&copy; Copyright 2021, Nientai Ho</h5>
          </Col>
          <Col className=" text-center">
            <a href="#" className="btn btn-success"><FontAwesomeIcon icon={faArrowUp} style={{ color: '#FFFFFF' }} /></a>
          </Col>
          <Col className=" text-center">
            <h5>Dream is your future reality</h5>
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default App;
