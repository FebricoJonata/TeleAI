import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ChatbotPage from "./pages/chatbot";
import LoginPage from "./pages/login";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DebugPage from "./pages/DebugPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatbotPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Debug" element={<DebugPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
