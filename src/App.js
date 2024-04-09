import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Week1 from "./pages/Week1";
import Week2 from "./pages/Week2";
import Week3 from "./pages/Week3";
import Week4 from "./pages/Week4";
import Week5 from "./pages/Week5";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/week1" element={<Week1 />} />
        <Route path="/week1" element={<Week2 />} />
        <Route path="/week1" element={<Week3 />} />
        <Route path="/week1" element={<Week4 />} />
        <Route path="/week1" element={<Week5 />} />
      </Routes>
      </Layout>
  );
}

export default App;