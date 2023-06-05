
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from "./components/userinterface/screens/Home";
import Menu from "./components/userinterface/usercomponents/Menu";


function App() {
  return (
    <div>
       <Router>
        <Routes>
          
          <Route element={<Home/>} path="/home" />
          <Route element={<Menu />} path="/menu" />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
