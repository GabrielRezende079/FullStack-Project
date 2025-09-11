import express from "express";

const app = express();
const users = [];
app.use(express.json());

app.post("/usuarios", (req, res) => {


  res.send("ok, deu certo aqui");
  //console.log(req. body);

  users.push(req.body);
  
});

app.get("/usuarios", (req, res) => {
  res.json(users);
});

app.listen(3000);



/*
Criar listagem de usuários

    -listagem de usuários
    -criar usuário
    -atualizar usuário
    -deletar usuário
*/
