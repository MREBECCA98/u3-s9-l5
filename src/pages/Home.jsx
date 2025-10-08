import Gallery from "../Components/Gallery";
import React from "react";

function Home() {
  return (
    <div>
      <Gallery saga="Twilight" />
      <Gallery saga="Shrek" />
      <Gallery saga="Batman" />
    </div>
  );
}

export default Home;
