import { useState } from "react";
export const FormHook = () => {
  const [form, setForm] = useState({});

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  return {
    ...form,
    form,
    onChange,
  };
};
