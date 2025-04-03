import fs from 'fs';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { criar_tabelas } from './models/create_table.js';
import { insertDados } from './models/create_table.js';
import { resolve } from 'path';

// Determina o caminho absoluto para o arquivo do banco de dados
const DB_PATH = resolve('src/backend/database/database.sqlite');

// Cria uma nova instância do banco de dados SQLite
export const inicializeDatabase = async () => {
    const dbExists = fs.existsSync(DB_PATH);
  
    const db = await open({
      filename: DB_PATH,
      driver: sqlite3.Database
    });
  
    if (!dbExists) {
      await criar_tabelas(db);
      console.log('Banco de dados criado e tabelas inicializadas.');
      if(db){
        await insertDados(db)
        console.log("Tipos inseridos na basa de dados")
      }else{
        console.log("Falha ao inserir dados na tabela tipo")
      }
    } else {
      console.log('Conectado ao banco de dados existente.');
    }
  
    return db;
  
  };
  
  let dbConnection;
  
  export const startServer = async () => {
    dbConnection = await inicializeDatabase(); 
    console.log('Banco de dados aberto com sucesso.');
  };
  
  export const getDatabase = () => dbConnection;




