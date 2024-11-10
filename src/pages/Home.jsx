import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/items?search=${query}`);
  };

  return (
    <div className="container text-center py-5">
      <h1 className="display-4 mb-4 text-primary font-weight-bold">Bazar Online</h1>
      
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control form-control-lg rounded-pill shadow-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar productos..."
          style={{ maxWidth: '500px' }}
        />
      </div>

      <div className="mb-4">
        <button 
          onClick={handleSearch} 
          className="btn btn-gradient btn-lg px-5 py-3 rounded-pill shadow-md"
        >
          Buscar
        </button>
      </div>

      <div className="mt-5">
        <Link to="/sales">
          <button className="btn btn-info btn-lg px-5 py-3 rounded-pill shadow-md">Ver Compras Registradas</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
