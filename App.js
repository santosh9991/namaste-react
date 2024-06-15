import ReactDOM from "react-dom/client";
import React from "react";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import "./index.css";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
