
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Expense from "./components/Expense";
import Form from "./components/Form";
import UpdateForm from "./components/UpdateForm";


function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route  path="/"  element={<Expense/>} />
    <Route  path="/create"  element={<Form/>} />
    <Route  path="/update/:id"  element={<UpdateForm/>} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
