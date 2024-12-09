import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainPage from "../pages/mainPage/MainPage";
import Navbar from "../widgets/navbar/Navbar";
import CartPage from "../pages/cartPage/CartPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="cart" element={<CartPage />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
