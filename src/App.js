
import './App.css';

import { ToastContainer, toast } from 'react-toastify';

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
