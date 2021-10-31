import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import FrontPage from "./components/Front Page/FrontPage";
import Services from "./components/Our Services/Services";
import WorkWith from "./components/Work With/WorkWith";

function App() {
  return (
    <div className="mainContainer">
      <FrontPage />
      <WorkWith />
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
