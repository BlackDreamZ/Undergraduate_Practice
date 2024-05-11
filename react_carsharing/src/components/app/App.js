import './App.css';
import { Fragment } from "react";
// @ts-ignore
import Header from "../appHeader/Header.tsx";
// @ts-ignore
import Home from "../appHome/Home.tsx";
import React from 'react';
var App = function () {
    return (React.createElement(Fragment, null,
        React.createElement(Header, null),
        React.createElement(Home, null)));
};
export default App;
