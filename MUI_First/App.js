import './App.css';
import {Route, Routes} from 'react-router-dom';
import Page1 from './page1';
import Tour from './pages2';





function App() {
  return (
  
    <div className="App">
      <header className="App-header">
          <Routes>
            <Route path="/" element={<Page1/>}/>
            <Route path="/page2" element={<Tour/>}/>

          </Routes>

          

        

      </header>
    </div>
  
    
  );
}

export default App;
