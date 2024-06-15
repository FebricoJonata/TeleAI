import "./App.css";
import ChatbotPage from "./pages/ChatbotPage";
import DebugPage from "./pages/DebugPage";
import LoginPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './localization'; 
import AllSentiments from "./pages/AllSentiments";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatbotPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Debug" element={<DebugPage />} />
          <Route path="/AllSentiments" element={<AllSentiments/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
