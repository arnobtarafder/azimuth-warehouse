import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignUp/SignUp';
import Home from './components/Home/Home/Home';

import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">

      <NavigationBar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
      </Routes>


    </div>
  );
}

export default App;
