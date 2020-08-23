import { useState } from "react";

export const useForm = (InitialValues: Form) => {
  const [form, setForm] = useState(InitialValues);

  const onChange = (name: string, value: string) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(InitialValues);
  };

  return { form, onChange, resetForm };
};

export interface Form {
  name?: string;
  email?: string;
  password: string;
  role?: string;
  description?: string;
  nickname?: string;
}
