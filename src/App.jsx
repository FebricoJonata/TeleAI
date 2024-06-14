import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import ChatbotPage from "./pages/chatbot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatbotPage />} />
          {/* <Route path="/MyShop" element={<MyShop />} />
          <Route path="/detail/:gameId" element={<GameDetail />} />
          <Route path="/UploadItems" element={<UploadItems />} />
          <Route path="/Library" element={<LibraryPage />} /> */}
          <Route path="/debug" element={<DebugPage />} />
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
