// composant react : capitaliser le nom du composant 
// fonction  exportée JS/TS qui renvoie du HTM
// nom du composant devient une balise


import './assets/css/reset.css';
import "./assets/css/style.css";
import { RouterProvider } from "react-router-dom";
import router from "./service/router";
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;