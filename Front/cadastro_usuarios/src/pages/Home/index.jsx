import React, { useState } from "react";
import Trash from "../../assets/lixeira.svg";
import "./style.css";

function Home() {
  const users = [
    {
      id: 1,
      name: "Gustavo",
      age: 22,
      email: "gugu@gmail.com",
    },
    {
      id: 2,
      name: "Maria",
      age: 30,
      email: "maria@gmail.com",
    },
    {
      id: 3,
      name: "João",
      age: 25,
      email: "joaozin@gmail.com",
    },
  ];

  return (
    <div className="home-container">
      <form>
        <h1> Cadastro de Usuarios</h1>
        <input name="nome" type="text" placeholder="Nome" />
        <input name="idade" type="number" placeholder="Idade" />
        <input name="email" type="email" placeholder="Email" />
        <button type="button">Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>
          <button type="button">
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
