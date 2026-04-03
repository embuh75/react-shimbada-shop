import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
