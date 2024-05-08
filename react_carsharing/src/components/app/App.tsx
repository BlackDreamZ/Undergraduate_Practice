import './App.css';
import { Fragment } from "react";
// @ts-ignore
import Header from "../appHeader/Header.tsx";
// @ts-ignore
import Home from "../appHome/Home.tsx";

const App: React.FC = () => {
  return (
      <Fragment>
        <Header />
        <Home />
      </Fragment>
  );
}

export default App;