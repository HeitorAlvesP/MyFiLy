import sqlite3 from 'sqlite3';

export async function criar_tabelas(db){
  await db.exec(`

      CREATE TABLE User (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL
      );

    `)
}

export async function insertDados(db) {
    await db.exec(`
        INSERT INTO User (nome, email, senha) VALUES ('Heitor', 'email@gmail.com', '1234');
      `)
  }