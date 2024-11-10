import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

function BusquedaResult() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/items?q=${query}`)
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [query]);

  return (
    <div className="container py-5">
      <h2 className="display-4 mb-4 text-center">Resultados para: <span className="text-info">{query}</span></h2>
      <p className="text-center">{products.length} resultados encontrados</p>

      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card shadow-lg rounded-lg">
              <img src={product.thumbnail} alt={product.title} className="card-img-top rounded-top" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p><strong>Categoría:</strong> {product.category}</p>
                <p><strong>Rating:</strong> {product.rating}</p>
                <p className="price text-success"><strong>${product.price}</strong></p>
                <Link to={`/item/${product.id}`} className="btn btn-gradient btn-lg w-100 rounded-pill mt-2">Ver Detalle</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="btn btn-outline-secondary mt-4 w-100 rounded-pill">Volver al Buscador</Link>
    </div>
  );
}

export default BusquedaResult;
