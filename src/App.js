import { upload } from "@testing-library/user-event/dist/upload";
import Home from "./Pages/Home";
import {  Routes, Route } from 'react-router-dom';
import Upload from "./Pages/musicUpload";
import Login from "./Pages/login";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state) => state.loginReducer.success);
  return (
      <Routes>
        {loggedIn?  <Route path="/" element={
              <ProtectedRoute><Home /></ProtectedRoute>} /> 
              : <Route path="/" element={
                <Home />} />} 
           
          
 
      <Route path="/upload" element={<ProtectedRoute><Upload/></ProtectedRoute> }/>
      <Route path='/login' element={<Login/>}/>

      </Routes>
  );
}

export default App;
