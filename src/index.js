import React from 'react';
import { nanoid } from "nanoid";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const DATA = [
  { id: `todo-${nanoid()}`, name: "" },

];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App tasks={DATA} />, document.getElementById("root"));




