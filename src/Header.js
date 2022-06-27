import UserInfo from "./components/UserInfo";
import Navigation from "./components/Navigation";

function Header() {
  return (
    <header>
      <img
        src="https://classes.codingbootcamp.cz/assets/classes/workouts/aperture.png"
        alt="Aperture science"
        className="logo"
      />

      <UserInfo />

    
    </header>
  );
}

export default Header;
