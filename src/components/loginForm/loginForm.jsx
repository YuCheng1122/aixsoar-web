"use client";

// import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  // const [state, formAction] = useFormState(login, undefined);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    console.log("Login form submitted");
    setError(""); // Clear any previous errors
    // You can add client-side validation here if needed
  };
  
// formAction
  return (
    <form className={styles.form} action={handleSubmit}> 
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
