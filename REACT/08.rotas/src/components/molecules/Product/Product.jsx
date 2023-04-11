import { useNavigate } from "react-router-dom";
import "./Product.css";

export function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div className="Product">
      <div className="card">
        <h4>{product.name}</h4>
        <p>
          {`Preço: R$ ${product.price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}`}
        </p>
        <img src={product.image} alt={product.description} />
      </div>
      <button onClick={() => navigate(`/product/${product.id}`)}>Detalhes</button>
    </div>
  );
}
