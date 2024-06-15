import AddMember from './components/AddMember/AddMember';
import HomeComponent from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import logo from './logo.svg';
import {BrowserRouter , Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
            <Route path='/'>
                <Route index element={<HomeComponent />} />
                <Route path="home" element={<HomeComponent />} />
                <Route path='register' element={<Register/>} />
                <Route path='login' element={<Login/>} />
                <Route path="admin/" element={<PrivateRoute />}>
                  <Route path="add-member" element={<AddMember/>} />
                </Route>
            </Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
