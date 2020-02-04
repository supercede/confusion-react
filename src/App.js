import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

const App = () => (
  <div className='App'>
    <Navbar dark color='primary'>
      <div className='container'>
        <NavbarBrand href=''>Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
  </div>
);

export default App;
