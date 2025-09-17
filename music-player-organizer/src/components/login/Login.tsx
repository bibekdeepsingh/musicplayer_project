import { useState } from "react";

interface InputField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

export default function Login() {
  const inputFields: InputField[] = [
    { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
    { id: "password", label: "Password", type: "password", placeholder: "Enter your password" },
  ];

  const [formValues, setFormValues] = useState<{ [key: string]: string }>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in with Email: ${formValues.email}`);
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field) => (
          <div key={field.id} className="form-group">
            <label htmlFor={field.id}>{field.label}</label>
            <input
              id={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={formValues[field.id]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
