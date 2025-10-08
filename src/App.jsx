import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNav from "./Components/MyNav";

import Logo from "./Components/img/logo.png";
import Avatar from "./Components/img/avatar.png";
import MyFooter from "./Components/MyFooter";
import MyNav2 from "./Components/MyNav2";
import { BrowserRouter, Routes, Route } from "react-router";
import TVShow from "./pages/TVShow";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#0F0F0F", minHeight: "100vh", color: "white" }}>
        <MyNav img={<img src={Logo} alt="Netflix Logo" height="40" />} imgProfile={<img src={Avatar} alt="Avatar" style={{ width: "30px" }} />} />;
        <MyNav2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-show" element={<TVShow />} />
          {/* <Route path="/movie-details/:id" element={<MovieDetails />} /> */}
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
