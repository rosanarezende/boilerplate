import { useState, useEffect } from "react";
import { useFetch1, useFetch2 } from "hooks";
import { ProductList } from "components/molecules";

// sem custom hook
export const Fetch = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3005/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Sem custom hook</h3>
      <ProductList products={products} />
    </section>
  );
};

// com custom hook
export const Fetch1 = () => {
  const products = useFetch1("http://localhost:3005/products");

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook bem simples</h3>
      <ProductList products={products} />
    </section>
  );
};

// com custom hook, mas fazendo tratamento de erro e usando loading
export const Fetch2 = () => {
  const [data, error, loading] = useFetch2("http://localhost:3005/products");

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook + loading + error</h3>
      <ProductList products={data} loading={loading} error={error} />
    </section>
  );
};

// usando o mesmo hook acima e o refetch
export const Fetch3 = () => {
  const [data, error, loading, refetch] = useFetch2(
    "http://localhost:3005/products"
  );

  // Uso o refetch, por exemplo, para após deletar um produto, atualizar a lista
  const handleDelete = (product) => {
    fetch(`http://localhost:3005/products/${product.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then(() => refetch());
  };

  return (
    <section className="flex-column flex-center gap-16">
      <h3>Com custom hook mais reaproveitável</h3>
      <ProductList
        products={data}
        loading={loading}
        error={error}
        deleteProduct={handleDelete}
      />
    </section>
  );
};
