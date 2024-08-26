"use client";

import Link from "next/link";
import styles from "./registerForm.module.css";
import { useState } from "react";

const RegisterForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating form submission
    console.log("Register form submitted");
    setError(""); // Clear any previous errors
    // You can add client-side validation here if needed
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button type="submit">Register</button>
      {error && <p className={styles.error}>{error}</p>}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
// "use client";

// // import { register } from "@/lib/action";
// // import { useFormState } from "react-dom";q
// // import { useRouter } from "next/navigation";
// import Link from "next/link";
// import styles from "./registerForm.module.css";
// import { useEffect } from "react";

// const RegisterForm = () => {
//   // const [state, formAction] = useFormState(register, undefined);
//   // const router = useRouter();
//   //   useEffect(() => {
//   //   state?.success && router.push("/login");
//   // }, [state?.success, router]);
//   const [error, setError] = useState("");
//   const handleSubmit = (e) => {
//   e.preventDefault();
//   // Simulating form submission
//   console.log("Register form submitted");
//   setError(""); // Clear any previous errors
//   // You can add client-side validation here if needed
// };


// //formAction
//   return (
//     <form className={styles.form} action={handleSubmit}>
//       <input type="text" placeholder="username" name="username" />
//       <input type="email" placeholder="email" name="email" />
//       <input type="password" placeholder="password" name="password" />
//       <input
//         type="password"
//         placeholder="password again"
//         name="passwordRepeat"
//       />
//       <button>Register</button>
//       {state?.error}
//       <Link href="/login">
//         Have an account? <b>Login</b>
//       </Link>
//     </form>
//   );
// };

// export default RegisterForm;
