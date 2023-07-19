import Home from "./components/Home";
import SimpleSteps from "./components/Home/SimpleSteps";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<SimpleSteps />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
