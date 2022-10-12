import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingContainer from "./components/MarketingContainer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingContainer />
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};
