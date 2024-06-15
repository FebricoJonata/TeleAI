import "./App.css";
import ChatbotPage from "./pages/ChatbotPage";
import DebugPage from "./pages/DebugPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './localization'; 
import RegisterPage from "./pages/RegisterPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<ChatbotPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/debug" element={<DebugPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
