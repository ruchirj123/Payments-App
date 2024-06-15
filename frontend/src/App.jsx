import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { SendMoney } from "./pages/SendMoney"
import { DashBoard } from "./pages/Dashboard";
import { Success } from "./pages/Success";

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/dashboard" element={<DashBoard/>} />
            <Route path="/send" element={<SendMoney/>} />
            <Route path="/success" element={<Success/>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
