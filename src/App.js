import {Routes, Route} from 'react-router-dom';
import Experience from './containers/Experience';
import Home from "./containers/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;
