import { useState } from "react";
import { useCounter1, useCounter2 } from 'hooks'

// sem custom hook
export const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = () => setCount(count + 1);
  const increment2 = () => setCount2(count2 + 2);

  const decrement = () => setCount(count - 1);
  const decrement2 = () => setCount2(count2 - 2);

  return (
    <section className="flex-column flex-center gap-4">
      <h3>Contador SEM custom hook - de 2 em 2</h3>
      <div className="flex-center gap-16">
        <button className="p-8" onClick={decrement} >-</button>
        <span>{count}</span>
        <button className="p-8" onClick={increment}>+</button>
      </div>
      <div className="flex-center gap-16">
        <button className="p-8" onClick={decrement2} >-</button>
        <span>{count2}</span>
        <button className="p-8" onClick={increment2}>+</button>
      </div>
    </section>
  );
};

// com custom hook, mas com incremento variável
export const Counter1 = () => {
  const [count, increment, decrement] = useCounter1(); // valores padrão: valor inicial = 0, incremento = 1, decremento = 1
  const [count2, increment2, decrement2] = useCounter1(100, 2, 5);

return (
    <section className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de x em x</h3>
      <div className="flex-center gap-16">
        <button className="p-8" onClick={decrement} >-</button>
        <span>{count}</span>
        <button className="p-8" onClick={increment}>+</button>
    </div>
    <div className="flex-center gap-16">
        <button className="p-8" onClick={decrement2} >-</button>
        <span>{count2}</span>
        <button className="p-8" onClick={increment2}>+</button>
      </div>
    </section>
  );
};

// com custom hook, mas com incremento variável
export const Counter2 = () => {
  const [count, increment, decrement] = useCounter2(); // valor inicial padrão: 0

  return (
    <section className="flex-column flex-center gap-4">
      <h3>Contador COM custom hook - de x em x</h3>
      <div className="flex-center gap-16">
        {/* se não passo nada, usa o valor padrão 1 */}
        <button className="p-8" onClick={() => decrement()} >-</button>
        {/* se passo um valor, usa esse valor */}
        <button className="p-8" onClick={() => decrement(5)} >-5</button>

        <span>{count}</span>

        <button className="p-8" onClick={() => increment()}>+</button>
        <button className="p-8" onClick={() => increment(5)}>+5</button>
      </div>
    </section>
  );
}

