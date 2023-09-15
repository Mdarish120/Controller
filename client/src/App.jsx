import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/home";
import Contact from "./component/contact";
import Success from "./component/Succes";
import Page from "./component/PageNot";

function App() {


  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/contact"  element={<Contact/>}/>
    <Route path="/"  element={<Home/>}/>
    <Route path="/success"  element={<Success/>}/>
    <Route   path="*" element={<Page/>}/>
   </Routes>

   </BrowserRouter>
    </>
  )
}

export default App
