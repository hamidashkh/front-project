import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import axios from 'axios'
import { useState,useEffect,CSSProperties } from 'react';
import ClimbingBoxLoader  from "react-spinners/ClimbingBoxLoader";
import Admin from './pages/Admin';
import ProfileCard from './components/ProfileCard';
import AddUser from './pages/AddUser';
import EditUser from './components/EditUser';
import AdminHome from './pages/AdminHome';

const override = {
  display: "block",
  margin: "0 auto",
  position:"absolute",
  top:"50%",
  left:"50%",
  transform:"translate(-50%,-50%)"
};

function App() {
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#0095ED");

  useEffect(() =>{
    const getUsers= async () =>{

     await axios
      .get('http://localhost:8000/data')
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
      setLoading(false)
    }
      getUsers();
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      {loading ? <ClimbingBoxLoader 
        color={color}
        loading={loading}
        cssOverride={override}
        size={30}
        
      /> : <Routes>
      <Route path='/' element={<Home userList={users} />}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/adminhome' element={<AdminHome/>}/>
      <Route path='/details/:userId' element={<ProfileCard/>}/>
      <Route path='/adduser' element={<AddUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
    </Routes>
      }
        
      </BrowserRouter>
    
    </div>
  );
}

export default App;
