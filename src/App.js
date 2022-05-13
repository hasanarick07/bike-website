import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Bikes from "./Component/Bikes/Bikes";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Home from "./Component/Home/Home";
import Inventory from "./Component/Inventory/Inventory";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Footer from "./Component/Shared/Footer/Footer";
import Header from "./Component/Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/bikes" element={<Bikes></Bikes>}></Route>
        <Route path="/bikes/:id" element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <Footer />
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default App;
