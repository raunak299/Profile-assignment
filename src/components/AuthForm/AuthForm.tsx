import { useAuthFormApi } from "@/hooks";
import { Button } from "@/ui";
import { useEffect, useState } from "react";
import styles from "./AuthForm.module.css";
import AuthFormToggle from "./AuthFormToggle/AuthFormToggle";
import AuthFormError from "./AuthFormError/AuthFormError";
import { useRouter, useSearchParams } from "next/navigation";
import useAuthContext from "@/context/hooks/useAuthContext";

export enum AuthMode {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
}

export default function AuthForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.SIGN_IN);
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || '/userprofile';
  const router = useRouter();
  const {isLoggedIn} = useAuthContext();

  const { remoteDataState, handleSubmit,dummyAuthentication } = useAuthFormApi(
    email,
    password,
    authMode,
  );
  const loading = remoteDataState.status === "loading";
  const error = remoteDataState.status === "error";

  const submitFormBtnLabel =
    authMode === AuthMode.SIGN_IN ? "Sign In" : "Sign up";
  const authFormHeader = authMode === AuthMode.SIGN_IN ? "Sign In" : "Sign Up";

  const switchAuthStateHandler = () => {
    setAuthMode(
      authMode === AuthMode.SIGN_IN ? AuthMode.SIGN_UP : AuthMode.SIGN_IN
    );
  };

  useEffect(()=>{
     if(remoteDataState.status === 'success'){
      router.push(redirectTo);
     }
  },[remoteDataState]);

  useEffect(()=>{
    if(isLoggedIn){
      router.push(redirectTo);
    }
  },[isLoggedIn])


  return (
    <section className={styles.authFormRoot}>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <h1 className={styles.heading}>{authFormHeader}</h1>
        <div className={styles.authFormField}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className={styles.field}
          />
        </div>
        <div className={styles.authFormField}>
          <label className={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className={styles.field}
          />
        </div>
        {error && (
          <AuthFormError message={remoteDataState.message + ".. Try Later"} />
        )}
        <div className={styles.buttonSection}>
          <Button type="submit" label={submitFormBtnLabel} loading={loading} />
          <Button
            onClick={dummyAuthentication}
            disabled={loading}
            color="secondary"
            label={`Guest User`}
            loading={loading}
          />
        </div>
        <AuthFormToggle
          authMode={authMode}
          switchAuthStateHandler={switchAuthStateHandler}
        />
      </form>
    </section>
  );
}
