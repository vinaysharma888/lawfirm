
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from "./components/userinterface/screens/Home";

import ChatBot from "./components/userinterface/usercomponents/ChatBot";
import Appointment from "./components/userinterface/usercomponents/Appointment";

function App() {
  return (
    <div>
       <Router>
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<ChatBot />} path="/chatbot" />
          <Route element={<Appointment />} path="/appointment" />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
