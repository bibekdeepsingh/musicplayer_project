import { SignIn } from "@clerk/clerk-react";
import "./Login.css";

export function Login() {
  return (
    <section className="login">
      <h2>Login</h2>

      <div className="clerk-container">
        <SignIn />
      </div>
    </section>
  );
}
