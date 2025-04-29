import { Route, Routes } from "react-router-dom";

//Pages
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUpPage from "./pages/auth/signup/SignUpPage";
import NotificationPage from "./pages/notification/NotificationPage";
import ProfilePage from "./pages/profile/ProfilePage";

//components
import Sidebar from "./components/common/Sidebar";
import RightPanel from "./components/common/RightPanel";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      {/* Common component,bc it's not wrapped with Routes */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
      <RightPanel />
      <Toaster />
    </div>
  );
}

export default App;
