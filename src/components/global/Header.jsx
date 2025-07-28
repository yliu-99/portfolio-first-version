import "./header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex space-between">
            <div className="header-gradient"></div>
          <nav className="main-menu">
            <ul>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/design">Design</a>
              </li>
              <li>
                <a href="/"><div className="logo"><img src="src\assets\logo\logo-full.png" alt="yuhan liu's logo, y and l combined together to look like an hourglass" /></div>Yuhan Liu</a>
              </li>
              <li>
                <a href="/video">Video</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
