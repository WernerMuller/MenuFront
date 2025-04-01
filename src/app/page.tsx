"use client";
import React from "react";
import Carousel from "../components/Home/Carousel";

const HomePage: React.FC = () => {
  return (
    <div>
      <Carousel />
      <section style={{ padding: "16px" }}>
        <h1>Welcome to MenuApp</h1>
        <p>
          Explore our features and manage your menus effortlessly. Use the
          navigation drawer to access different sections of the app.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
