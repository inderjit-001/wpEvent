import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import EventTabs from "../components/EventTabs";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <EventTabs />
    </div>
  );
}

export default Home;
