import Header from "./components/Header/Header.js";
import IndexRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";

import "./App.css";




const App = () => {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <IndexRoutes />
        </BrowserRouter>
      </div>
  );
}

export default App;
