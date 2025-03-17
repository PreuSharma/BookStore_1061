import './App.css'
import RoutingModule from './Routing/RoutingModule';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <RoutingModule />
      <Toaster position="top-right" />
    </>
  )
}

export default App
