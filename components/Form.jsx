"use client";

import { useFormStore } from "../store/useFormStore";

export default function Form() {
  const name = useFormStore((state) => state.name);
  const email = useFormStore((state) => state.email);
  const error = useFormStore((state) => state.error);

  const setName = useFormStore((state) => state.setName);
  const setEmail = useFormStore((state) => state.setEmail);
  const setError = useFormStore((state) => state.setError);
  const reset = useFormStore((state) => state.reset);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("All fields are required");
    } else if (!email.includes("@")) {
      setError("Email is not valid");
    } else {
      setError("");
      alert(`Form submitted\nName: ${name}\nEmail: ${email}`);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form using Zustand</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Name:</label><br />
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="text"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}