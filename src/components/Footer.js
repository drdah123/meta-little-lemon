import secondary from './secondary.png';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="one">
          <img src={secondary} alt="Secondary Logo" />
        </div>
        <div className="two">
          <ul>
            <h5>Navigation</h5>
            <li>
              <a id="nav" href="#">
                Home
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                About
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Menu
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Reservations
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Order Online
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul>
            <h5>Contact</h5>
            <li>
              <a id="nav" href="#">
                Phone Number
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Email
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Address
              </a>
            </li>
          </ul>
        </div>
        <div className="four">
          <ul>
            <h5>Social Media</h5>
            <li>
              <a id="nav" href="#">
                Facebook
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                LinkedIn
              </a>
            </li>
            <li>
              <a id="nav" href="#">
                Pinterest
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
