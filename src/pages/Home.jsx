import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import EventTabs from "../components/EventTabs";
import EventList from "../components/EventList";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <EventTabs />
      <EventList/>
    </div>
  );
}

export default Home;
