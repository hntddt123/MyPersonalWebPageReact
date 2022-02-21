import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
  return (
    <nav className="navbar navbar-custom">
      <div className="container-fluid">
        <ul className="nav navbar-nav pull-left">
          <li style={{ color: 'white' }}>Nientai Ho</li>
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
  );
}

export default NavBar;