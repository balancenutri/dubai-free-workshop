import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Congrats from "./page/Congrats";
import Test from "./page/Test";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        {/* <Route path="/congrats" element={<Congrats />} /> */}
      </Routes>
    </Router>
  )
}