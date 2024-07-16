import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Start from "./pages/Start";
import Home from "./pages/Home";
import Invalid from "./pages/Invalid";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Start />}></Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Home />}></Route>
            </Route>
            <Route path="/invalid" element={<Invalid />}></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
