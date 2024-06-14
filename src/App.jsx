import "./App.css";
import ChatbotPage from "./pages/ChatbotPage";
import DebugPage from "./pages/DebugPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './localization'; 

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
