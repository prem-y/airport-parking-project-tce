import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Layout from "./component/Layout";
import Login from "./pages/Login";
import AirportAvailability from './pages/AirportAvailability';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Homepage />} />
            <Route path="results" element={<AirportAvailability />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
