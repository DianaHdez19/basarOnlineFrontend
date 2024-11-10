import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

function DetalleProducto() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/items/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  const handlePurchase = () => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/addSale?productId=${product.id}`, {
      method: 'POST',
    })
    .then(response => response.json())
    .then(success => {
      if (success) {
        setPurchaseSuccess(true);
      } else {
        alert("Error al realizar la compra");
      }
    });
  };

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="container py-5">
      <div className="card shadow-lg p-4 mb-5 rounded-lg">
        <div className="row">
          <div className="col-md-6">
            <img src={product.images[0]} alt={product.title} className="img-fluid rounded-lg shadow-sm" />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">{product.title}</h2>
            <p className="lead">{product.description}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Marca:</strong> {product.brand}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Categoría:</strong> {product.category}</p>
            <div className="mt-4">
              <Link to="/" className="btn btn-outline-secondary btn-lg rounded-pill">Volver al Buscador</Link>
              {!purchaseSuccess ? (
                <button onClick={handlePurchase} className="btn btn-success btn-lg rounded-pill ms-3">
                  Comprar
                </button>
              ) : (
                <div className="alert alert-success mt-4">
                  <h3>¡Compra realizada con éxito!</h3>
                  <button onClick={() => navigate('/')} className="btn btn-primary btn-lg rounded-pill">
                    Regresar al buscador
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
