import logo from "./logo.svg";
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Question from "./Pages/Question";
import { Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Question />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
