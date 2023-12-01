import alter from "../assets/alter.png";
import swim from "../assets/swim.png";
import yoga from "../assets/Yoga.png";
import bicycle from "../assets/bicycle.png";
import "../styles/sidebar.css";
import SideLogo from "./SideLogo";
function SideBar() {
  return (
    <div className="sidebar_container">
      <SideLogo source={yoga} />
      <SideLogo source={swim} />
      <SideLogo source={bicycle} />
      <SideLogo source={alter} />
      <p className="copyright">Copyright, SportSee 2020</p>
    </div>
  );
}

export default SideBar;
