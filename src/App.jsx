import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNav from "./Components/MyNav";

import Logo from "./Components/img/logo.png";
import Avatar from "./Components/img/avatar.png";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <div style={{ backgroundColor: "#0F0F0F", minHeight: "100vh", color: "white" }}>
      <MyNav img={<img src={Logo} alt="Netflix Logo" height="40" />} imgProfile={<img src={Avatar} alt="Avatar" style={{ width: "30px" }} />} />;
      <MyFooter />
    </div>
  );
}

export default App;
