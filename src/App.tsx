import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Results from "./components/Results";
import NavBar from "./components/NavBar";
function App() {
  return <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Results />} />
      </Routes>
    </Router>
  </>
}

export default App
