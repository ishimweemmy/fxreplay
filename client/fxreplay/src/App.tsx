import { Route } from "react-router-dom";
import AppWrapper from "./components/global/AppWrapper";
import Register from "./pages/Register";
import Home from "./pages/Home";
import TestWidget from "./pages/Test";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test-trade" element={<TestWidget />} />
      </AppWrapper>
    </Provider>
  );
}

export default App;
