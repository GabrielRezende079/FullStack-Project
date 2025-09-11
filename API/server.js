//express é um framework para nodejs que facilita a criação de servidores web
import express from "express";
//importar o prisma client
import { PrismaClient } from "./generated/prisma/index.js";

//importar o express
//criar o servidor
//criar uma rota
//fazer o servidor ouvir uma porta

//rodar o servidor node --watch server.js

//iniciar o express
const app = express();

//iniciar o prisma client
const prisma = new PrismaClient();


//configurar o express para entender JSON
app.use(express.json());

//criar uma rota para criar usuários
app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  });

  res.status(201).send(req.body).json({ message: "Usuário criado com sucesso" });
  users.push(req.body);
});

//criar uma rota para atualizar usuários
app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({

    //id do usuário que será atualizado
    where: { id: req.params.id },

    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  });

  res.status(201).send(req.body).json({ message: "Usuário atualizado com sucesso" });
  users.push(req.body);
});

//criar uma rota para listar usuários
app.get("/usuarios", async (req, res) => {

  //fazer a busca no banco de dados com filtros
  let users = [];
  if(req.query){
    users = await prisma.user.findMany({
      where: {
        name: { contains: req.query.name },
        age: { contains: req.query.age},
        email: { contains: req.query.email},
      }
    });

  } else{
    const users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

//criar uma rota para deletar usuários
app.delete("/usuarios/:id", async (req, res) => {

  await prisma.user.delete({
    where: { id: req.params.id },
  }); 

  res.status(204).json({ message: "Usuário deletado com sucesso" });
});



//fazer o servidor ouvir a porta 3000
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

/*
Criar listagem de usuários

    -listagem de usuários
    -criar usuário
    -atualizar usuário
    -deletar usuário
*/
