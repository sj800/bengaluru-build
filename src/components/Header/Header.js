import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">Bengaluru Build</div>
        <nav className="header__nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#research">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

