
import './App.css';

import { ToastContainer } from 'react-toastify';

import Home from './components/Home';

function App() {
  return (
   <div>
    <Home/>
    <ToastContainer 
       autoClose={3000}
    />
   </div>
  );
}

export default App;
