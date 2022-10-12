import React from "react";
import MarketingContainer from "./components/MarketingContainer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingContainer />
      </div>
    </BrowserRouter>
  );
};
