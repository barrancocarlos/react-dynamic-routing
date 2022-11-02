import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Static from "./pages/Static";
import Directory from "./pages/Directory";
import State from "./pages/State";
import NoPage from "./pages/NoPage";

function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          <Route path="static" element={<Static />} />          
          <Route path="directory" element={<Directory />} /> 
          <Route path="directory/:stateslug" element={<State />} />            
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
