import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contect";
import Headerh from "./component/Headerh";

function App() {
  return (
    <>
      <Headerh />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
