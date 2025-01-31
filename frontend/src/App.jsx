import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";
import AboutPage from "./components/AboutPage";
import FeaturesPage from "./components/FeaturePage";
import ContactPage from "./components/ContactPage";
import ContextFnc from "./Context";
function App() {
  const { authUser } = useAuthStore();
  return (
    <BrowserRouter>
    <ContextFnc>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/about" element={authUser ? <AboutPage /> : <Navigate to="/login" />} />
        <Route path="/features" element={authUser ? <FeaturesPage /> : <Navigate to="/login" />} />
        <Route path="/contact" element={authUser ? <ContactPage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
      </Routes>
      <Toaster/>
      </ContextFnc>
    </BrowserRouter>
  );
}

export default App;
