import { SignUp } from "@clerk/clerk-react";
import "./SignUp.css"; 

export function SignUpPage() {
  return (
    <section className="login">
      <h2>Sign Up</h2>

      <div className="clerk-container">
        <SignUp />
      </div>
    </section>
  );
}
