import React from "react";
import { NavBar } from "./components";
import {
  Landing,
  ClassesSection,
  TeamSection,
  ContactUsSection,
} from "./sections";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Landing />
        <ClassesSection />
        <TeamSection />
        <ContactUsSection />
      </main>
    </div>
  );
};

export default App;
