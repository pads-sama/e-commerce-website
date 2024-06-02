import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/shop" index element={<Shop />}></Route>
        <Route path="/about" index element={<About />}></Route>
        <Route path="/contact" index element={<Contact />}></Route>
        <Route path="/login" index element={<Login />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
