import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { login } from "../service/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-1/2 w-2/4 bg-gray-400/60 rounded-xl">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h3 className="text-2xl font-semibold py-4">Faça seu login:</h3>
        <div className="flex flex-col items-center space-y-4">
          <Input
            placeholder="E-mail"
            id="email"
            type="email"
            event={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            id="password"
            type="password"
            event={(e) => setPassword(e.target.value)}
          />
          <Button onClick={() => handleLogin()} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
