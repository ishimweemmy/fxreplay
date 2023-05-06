import { Route } from "react-router-dom";
import AppWrapper from "./components/global/AppWrapper";
import Register from "./pages/Register";
import Home from "./pages/Home";
import TestWidget from "./pages/Test";

function App() {
  return (
      <AppWrapper>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test-trade" element={<TestWidget />} />
      </AppWrapper>
  );
}

export default App;
