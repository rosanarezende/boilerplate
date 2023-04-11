import { useState } from "react";
import { useForm } from "hooks";

/// sem custom hook =>  um state para cada campo
// ver o arquivo Inputs.jsx

// sem custom hook =>  um state para o form inteiro
// também tem exemplo de como usar o localStorage
export const FormExample = () => {
  const [formValues, setFormValues] = useState({ nome: "", mail: "" });

  // Exemplo de como buscar dados do localStorage
  // esse exemplo pode ser melhor implementado com useEffect
  const meuForm = localStorage.getItem("meu-formulario-lindo");
  const meuFormObj = JSON.parse(meuForm);
  console.log(meuFormObj);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    // Exemplo de como salvar no localStorage
    const formValuesString = JSON.stringify(formValues);
    localStorage.setItem("meu-formulario-lindo", formValuesString);

    setFormValues({ nome: "", mail: "" });
  };

  const changeForm = (event) => {
    const { name, value } = event.target;
    console.log(formValues);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <section>
      <h3>Form sem custom hook: um state para o formulário inteiro</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={formValues.name}
          name="nome"
          onChange={changeForm}
        />
        <input
          type="email"
          placeholder="Email"
          value={formValues.email}
          name="mail"
          onChange={changeForm}
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

// com custom hook
export const FormExample1 = () => {
  const [form, onChange, resetForm] = useForm({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);

    resetForm();
  };

  return (
    <section>
      <h3>Form com custom hook</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="Email"
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};


// com custom hook e maps
export const FormExample2 = () => {
  const [form, onChange, resetForm] = useForm({
    name: "",
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);

    resetForm();
  };

  const inputs = [
    { name: "name", type: "text", placeholder: "Nome" },
    { name: "email", type: "email", placeholder: "Email" },
  ];
  return (
    <section>
      <h3>Form com custom hook + maps</h3>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <input
            key={input.name}
            type={input.type}
            name={input.name}
            value={form[input.name]}
            onChange={onChange}
            placeholder={input.placeholder}
          />
        ))}
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
