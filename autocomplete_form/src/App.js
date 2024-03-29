
import './App.css';
import Myautocomplete from './form';
import VideoCanvas from './video';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Myautocomplete/>}/>
        <Route path="page2" element={<VideoCanvas/>}/>

      </Routes>
    </div>
  );
}

export default App;
