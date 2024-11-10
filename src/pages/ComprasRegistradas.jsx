import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ComprasRegistradas() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/sales`)
      .then(response => response.json())
      .then(data => setSales(data));
  }, []);

  return (
    <div className="container py-5">
      <h2 className="display-4 mb-4 text-center">Compras Registradas</h2>
      {sales.length === 0 ? (
        <p className="text-center text-muted">No se han realizado compras aún.</p>
      ) : (
        <div className="row">
          {sales.map(sale => (
            <div key={sale.id} className="col-md-4 mb-4">
              <div className="card shadow-lg rounded-lg">
                <div className="card-body">
                  <h5 className="card-title">{sale.product.title}</h5>
                  <p><strong>Precio:</strong> ${sale.product.price}</p>
                  <p><strong>Fecha de compra:</strong> {new Date(sale.saleDate).toLocaleDateString()}</p>
                  <Link to="/" className="btn btn-primary btn-sm rounded-pill">Volver al Buscador</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ComprasRegistradas;
