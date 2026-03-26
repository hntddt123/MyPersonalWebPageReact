import Skills from './Skills';
import Hobby from './Hobby';
import Mentors from './Mentors';

function AboutMe() {
  return (
    <div className='bgDark'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <h3 className='text-center'>👨‍💻 About Me</h3>
            <hr />
            <p>
              Trip Border dev who likes to know the logic behind the scene.
              Borderless Adventures Awaits!
            </p>
            <Skills />
          </div>
          <div className='col-md-4'>
            <Hobby />
          </div>
          <div className='col-md-4'>
            <Mentors />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
