
import Display from "./pages2";
import { Routes, Route } from "react-router-dom"
import { Home } from "./home";
import Login from "./login";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/page2" element={<Display />} />


        </Routes>
      
      </div>
    </div>
  );
}

export default App;



