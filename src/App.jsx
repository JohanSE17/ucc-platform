import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ResearchPage from "./pages/ResearchPage";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/research" element={<ResearchPage />} />
    </Routes>
  </Router>
);

export default App;