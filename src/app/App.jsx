import { HashRouter as Router } from "react-router-dom";

import AppBody from "./app-body/AppBody";
import AppFooter from "./app-footer/AppFooter";
import AppHeader from "./app-header/AppHeader";
import ScrollTop from "./components/scroll-top/ScrollTop";

import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Router>
        <AppHeader />
        <AppBody />
        <AppFooter />
        <ScrollTop />
      </Router>
    </div>
  );
}

export default App;
