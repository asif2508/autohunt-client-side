import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import Inventory from './components/Inventory/Inventory';
import Blogs from './components/Blogs/Blogs';
import InventoryDetails from './components/InventoryDetails/InventoryDetails';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddItem from './components/AddItem/AddItem';
import MyItems from './components/MyItems/MyItems';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';



function App() {
  return (
    <div className="App">
      <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manageinventories' element={
          <RequiredAuth>
            <ManageInventories></ManageInventories>
          </RequiredAuth>
        }></Route>
        <Route path='/additem' element={
          <RequiredAuth>
            <AddItem></AddItem>
          </RequiredAuth>
         }></Route>
        <Route path='/inventory/:id' element={
          <RequiredAuth>
            <Inventory></Inventory>
          </RequiredAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs> }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      </div>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
