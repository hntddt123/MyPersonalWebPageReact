function AboutMe() {
  return (
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
  );
}

export default AboutMe;