import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserFormPage from "./pages/UserFormPage";
import Navbar from "./components/blocks/Navbar";
import UserListPage from "./pages/UserListPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen gradient-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/form" element={<UserFormPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
