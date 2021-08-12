import { auth } from "./../services/firebase";
import { useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <img src="" alt="logo" />
        FireChat
      </div>
      <div className="logout me-2" onClick={handleLogout}>
        log out
      </div>
    </nav>
  );
};

export default NavBar;
