import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AttractionsContextProvider } from './context/attractionContext'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AttractionsContextProvider>
      <App />
      </AttractionsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);