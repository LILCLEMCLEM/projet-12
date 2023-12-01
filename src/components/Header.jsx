import Logo from "../assets/logo.png";
import "../styles/header.css";
function Header() {
  return (
    <div className="header_container">
      <img src={Logo} alt="logo img"></img>
      <p>Accueil</p>
      <p>Profil</p>
      <p>Réglages</p>
      <p>Communauté</p>
    </div>
  );
}

export default Header;
