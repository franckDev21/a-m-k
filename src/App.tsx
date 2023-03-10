import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { PAGES } from "./config/routes";
import Subscription from "./pages/Subscription";
import Test from "./pages/Test";

function App() {
  return (
    <Routes>
      <Route path={PAGES.index} element={<Home />} />
      <Route path={PAGES.offer(':offreIds',':type')} element={<Subscription />} />
      <Route path={PAGES.test(':offreId',':type')} element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
