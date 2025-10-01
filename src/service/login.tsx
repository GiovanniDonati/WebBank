export const login = (email: string, password: string) => {
  if (email != "giovanni@donati" || password != "admin") {
    return alert("E-mail ou senha incorretos!");
  }
  return alert("Login realizado com sucesso!");
};
