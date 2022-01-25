//in cmd: npm start

import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Counter from "./components/counter";

//1st parameter calls the Counter component from counter.jsx
//2nd parameter refers to the 'root' element in index.js
ReactDOM.render(<Counter />, document.getElementById('root')); 