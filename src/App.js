import { upload } from "@testing-library/user-event/dist/upload";
import Home from "./Pages/Home";
import {  Routes, Route } from 'react-router-dom';
import Upload from "./Pages/musicUpload";
import Login from "./Pages/login";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
      <Routes>
        
            <Route path="/" element={
              <ProtectedRoute>  <Home /></ProtectedRoute>
            
            } />
          
 
      <Route path="/upload" element={<ProtectedRoute><Upload/></ProtectedRoute> }/>
      <Route path='/login' element={<Login/>}/>

      </Routes>
  );
}

export default App;
