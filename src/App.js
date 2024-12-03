import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainPage from "./pages/mainPage/MainPage";
import Navbar from "./widgets/navbar/Navbar";
import Cart from "./pages/cartPage/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="cart" element={<Cart />}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
