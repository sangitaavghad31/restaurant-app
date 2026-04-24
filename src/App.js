import React from "react";
import Header from "./components/header/Header";
import Summary from "./components/Summary";

function App() {
  return (
    <div>
      <Header/>
      <div className="Summary-main-container">
        <Summary/>
      </div>
    </div>
  );
}

export default App;
