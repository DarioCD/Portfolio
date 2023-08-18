import "./App.css";
import PortfolioApp from "./components/portfolioApp/PortfolioApp";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <PortfolioApp />
      </BrowserRouter>
    </>
  );
}

export default App;
