import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Privancy } from "./components/privancy/Privancy";
import { Page } from "./components/simple page/Page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/privancy"  element={<Privancy />} />
          <Route path="/app"  element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
