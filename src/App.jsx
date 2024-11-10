import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './assets/styles.css';
import BusquedaResult from './pages/BusquedaResult';
import DetalleProducto from './pages/DetalleProducto';
import ComprasRegistradas from './pages/ComprasRegistradas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<BusquedaResult />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
        <Route path="/sales" element={<ComprasRegistradas />} />
      </Routes>
    </Router>
  );
}

export default App;