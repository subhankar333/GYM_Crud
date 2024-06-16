import AddMember from './components/AddMember/AddMember';
import HomeComponent from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import logo from './logo.svg';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import AdminHome from './components/AdminHome/AdminHome';
import GetMembers from './components/GetMembers/GetMembers';
import EditMember from './components/EditMember/EditMember';
import Profile from './components/Profile/Profile';

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
                <Route path='user' element={<PrivateRoute/>} >
                  <Route path='profile' element={<Profile/>} />
                </Route>
            </Route>

            <Route path="admin/*" element={<PrivateRoute />}>
                  <Route index element={<AdminHome/>} />
                  <Route path="add-member" element={<AddMember/>} />
                  <Route path="get-members" element={<GetMembers/>} />
                  <Route path='edit/:memberId' element={<EditMember/>}/>
            </Route>
            
       </Routes>
    </BrowserRouter>
  );
}

export default App;
