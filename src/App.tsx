import React from "react";
import { NavBar } from "./components";
import { Landing, ClassesSection } from "./sections";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Landing />
        <ClassesSection />
      </main>
    </div>
  );
};

export default App;
