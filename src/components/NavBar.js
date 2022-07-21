import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function NavBar() {
  return (
    <nav className="nav navbar navbar-custom">
      <div>
        {/*  Dropdown menu  */}
        <Dropdown>
          <Dropdown.Toggle variant="dark">
            <FontAwesomeIcon icon={faBars} />
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ padding: 0 }} variant="dark" className="text-center">
            <Dropdown.Item href="https://www.facebook.com/nientaiho">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#3b5998' }} />
            </Dropdown.Item>
            <Dropdown.Divider style={{ margin: 0 }} />

            <Dropdown.Item href="https://twitter.com/NientaiHo">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#0084b4' }} />
            </Dropdown.Item>
            <Dropdown.Divider style={{ margin: 0 }} />

            <Dropdown.Item href="https://www.linkedin.com/in/nientaiho">
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0084b4' }} />
            </Dropdown.Item>
            <Dropdown.Divider style={{ margin: 0 }} />

            <Dropdown.Item href="https://nientaigames.blogspot.com/">
              <FontAwesomeIcon icon={faGamepad} />
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default NavBar;
