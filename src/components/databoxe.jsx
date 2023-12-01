import energy from "../assets/energy.png";
import cheeseburger from "../assets/cheeseburger.png";
import apple from "../assets/apple.png";
import chicken from "../assets/chicken.png";

function Databoxes({ value, name, type }) {
  return (
    <div className="box_container">
      <img
        className={name}
        alt="logo"
        src={
          name === "energies"
            ? energy
            : name === "proteines"
            ? chicken
            : name === "glucides"
            ? apple
            : name === "cheeseburger"
            ? cheeseburger
            : null
        }
      ></img>

      <p>
        {value}
        {type === 0 ? "kCal" : "g"}
      </p>
    </div>
  );
}

export default Databoxes;
