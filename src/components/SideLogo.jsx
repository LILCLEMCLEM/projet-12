import "../styles/side_logo.css";

function SideLogo({ source }) {
  return (
    <div className="img_container">
      <img src={source} alt="logo_"></img>
    </div>
  );
}

export default SideLogo;
