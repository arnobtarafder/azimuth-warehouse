import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignUp/SignUp';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';
import AddItem from './components/Inventory/AddItem/AddItem';
import Inventories from './components/Inventory/Inventories/Inventories';
import InventoryItem from './components/Inventory/InventoryItem/InventoryItem';
import ManageInventory from './components/Inventory/ManageInventory/ManageInventory';
import MyInventory from './components/Inventory/MyInventory/MyInventory';

import NavigationBar from './components/NavigationBar/NavigationBar';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">

      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/inventories' element={<Inventories />}></Route>
        <Route path='/inventory/:id' element={<InventoryItem />}></Route>
        <Route path='/addItem' element={<AddItem />}></Route>
        <Route path='/manageInventory' element={<ManageInventory />}></Route>
        <Route path='/MyInventory' element={<MyInventory />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      {/* <Footer /> */}

    </div>
  );
}

export default App;
