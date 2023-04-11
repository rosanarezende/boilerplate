import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formValue, setFormValue] = useState(initialValue);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const bindForm = (name) => ({
    value: formValue[name],
    onChange,
  });

  const resetForm = () => setFormValue(initialValue);

  return [formValue, bindForm, resetForm];
}
