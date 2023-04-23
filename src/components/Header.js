import NavLinks from "./NavLinks";
import logo from "../images/icon.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Daniel' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
