import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/usuarios", (req, res) => {


  console.log(req. body);
  res.send("ok, deu certo aqui");
  
});

app.get("/usuarios", (req, res) => {
  res.send("ok, deu certo");
});

app.listen(3000);

/*
Criar listagem de usuários

    -listagem de usuários
    -criar usuário
    -atualizar usuário
    -deletar usuário
*/
