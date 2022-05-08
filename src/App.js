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
import PrivateAuth from './components/PrivateAuth/PrivateAuth';

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

        <Route path='/inventory/:id' element={<PrivateAuth>
          <InventoryItem />
        </PrivateAuth>}></Route>

        <Route path='/addItem' element={<PrivateAuth>
          <AddItem />
        </PrivateAuth>}></Route>

        <Route path='/manageInventory' element={<PrivateAuth>
          <ManageInventory />
        </PrivateAuth>}></Route>

        <Route path='/MyInventory' element={<PrivateAuth>
          <MyInventory />
        </PrivateAuth>}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
