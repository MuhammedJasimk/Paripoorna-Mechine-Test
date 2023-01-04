import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./page/Landing/page";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Test />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
