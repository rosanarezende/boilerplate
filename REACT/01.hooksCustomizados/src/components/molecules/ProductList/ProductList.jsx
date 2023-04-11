export function ProductList({ products, loading, error, deleteProduct }) {
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar os produtos</div>;
  }

  if (!products?.length) {
    return <div>Nenhum produto encontrado</div>;
  }

  return (
    <div className="flex-center flex-wrap gap-16">
      {products?.map((product) => (
        <div className="flex-column flex-center gap-4 mb-16" key={product.id}>
          <div className="flex-column flex-center gap-4">
            <h4>{product.name}</h4>
            {/* converter product.price para real */}
            <p>Preço: R$ {product.price.toLocaleString("pt-BR", {minimumFractionDigits: 2})}</p>
            <img src={product.image} alt={product.description} />
          </div>
          <div className="mt-8 flex-center gap-4">
            {deleteProduct && (
              <button className="p-8" onClick={() => deleteProduct(product)}>
                Deletar
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
