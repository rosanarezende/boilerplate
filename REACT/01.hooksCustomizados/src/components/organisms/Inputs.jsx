import { useState } from "react";
import { useInput } from "hooks";

// sem custom hook
export const InputExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    //  console.log nos campos do form
    console.log("enviei o form", { name, email });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const alteraEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <section>
      <h3>Form sem custom hook: um state para cada campo</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={alteraEmail}
        />
        <button type="submit">Enviar</button>
      </form>
      {name} - {email}
    </section>
  );
};


// com custom hook
export const InputExample1 = () => {
  const [name, onChangeName, resetName] = useInput1("");
  const [email, onChangeEmail, resetEmail] = useInput1("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);

    resetName();
    resetEmail();
  };

  return (
    <section>
      <h3>Input com custom hook simples</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="email" value={email} onChange={onChangeEmail} />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

