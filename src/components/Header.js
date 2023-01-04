import Nav from './Nav.js';
import Logo from './Logo.png';

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <nav className="navigation">
          <Nav />
        </nav>
      </header>
    </>
  );
}

export default Header;
