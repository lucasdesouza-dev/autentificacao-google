import { useState } from "react";
import { GoogleLogo } from "phosphor-react";

import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "../../services/firebase";

import "./styles.scss";
import { async } from "@firebase/util";
export default function Index() {
  const [user, setUser] = useState<User>({} as User);

  async function handGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((results) => {
        const resultado = results.user;
        setUser(resultado);
      })
      .catch((error) => {
        console.log(console.error);
      });
  }

  return (
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="fotodo usuario" />}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>
      <span>
        Utilizando autentificacao social, por exemplo autentificação com o
        Google voce <br />
        facilita a vida do usuário permitindo utilizar sua aplicacao sem fazer
        cadastro
      </span>
      <button type="button" className="button" onClick={handGoogleSignIn}>
        <GoogleLogo />
        Entrar com Google
      </button>
    </div>
  );
}
