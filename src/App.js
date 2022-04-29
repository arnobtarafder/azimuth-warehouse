import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './components/Authentication/Signin/Signin';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="App">

      <NavigationBar />
      <h1>Hello </h1>

      <Routes>
        <Route path='/authentication' element={<Signin />}></Route>
      </Routes>


    </div>
  );
}

export default App;
