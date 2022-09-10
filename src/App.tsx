import React from "react";
import { NavBar, Footer } from "./components";
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
      <Footer />
    </div>
  );
};

export default App;
