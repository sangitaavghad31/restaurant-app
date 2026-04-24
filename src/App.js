import React from "react";
import Header from "./components/header/Header";
import Summary from "./components/Summary";
import Meals from "./components/Meals";

function App() {
  let lists = [
    {
      name: "Paneer Button Masala(medium spicy)",
      description: "A mild creamy curry made with onion, tomatoes, cashews, cream and button",
      price: 285
    },{
      name: "Butter Dal Kichdi",
      description: "Made with rice and yello lentils loaded with butter",
      price: 225
    },
    {
      name: "Dal Khichdi Tadka",
      description: "Dal Khichdi Tadka",
      price: 20
    },
    {
      name: "pannr angara masala",
      description: "Paneer Marinted with chili flackes, garlic and rosated in tandoor. serve in the red gravy",
      price: 30
    }
  ]
  return (
    <div>
      <Header/>
      <div className="Summary-main-container">
        <Summary/>
        <Meals meals={lists}/>
      </div>
    </div>
  );
}

export default App;
