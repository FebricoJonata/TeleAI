import "./App.css";
import ChatbotPage from "./pages/ChatbotPage";
import DebugPage from "./pages/DebugPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './localization'; 
import RegisterPage from "./pages/RegisterPage";
import { userLoginSession } from "./services/localStorage";
import BaseProtectedRoute from "./components/BaseProtectedRoute";
import AllSentiments from "./pages/AllSentiments";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* MARK: Authorized */}
          <Route path="/chat" element={
            // <BaseProtectedRoute allow={userLoginSession.isAuthorized()} redirectPath="/login"><ChatbotPage /></BaseProtectedRoute>
            <ChatbotPage />
          }/>
          <Route path="/all-sentiments" element={<AllSentiments/>}/>

          {/* MARK: Unauthorized */}
          <Route path="/login" element={
            <BaseProtectedRoute allow={!userLoginSession.isAuthorized()} redirectPath="/chat"><LoginPage /></BaseProtectedRoute>
          }/>
          <Route path="/register" element={
            <BaseProtectedRoute allow={!userLoginSession.isAuthorized()} redirectPath="/chat"><RegisterPage /></BaseProtectedRoute>
          }/>

          {/* MARK: Common Routes */}
          <Route path="/debug" element={<DebugPage />} />
          <Route path="/" element={userLoginSession.isAuthorized() ? 
            <Navigate to='/chat' />
            : <Navigate to='/login' />
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
