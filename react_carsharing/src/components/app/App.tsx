import './App.css';
import { Fragment } from "react";
// @ts-ignore
import Header from "../appHeader/Header.tsx";
// @ts-ignore
import Home from "../appHome/Home.tsx";
import React from 'react';

const App: React.FC = () => {
  return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
  );
}

export default App;