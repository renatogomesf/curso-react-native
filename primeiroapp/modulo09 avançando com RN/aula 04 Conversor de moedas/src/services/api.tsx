import axios from "axios";

// https://economia.awesomeapi.com.br/json/all

// rota para buscar BTC > BRL : all/BTC-BRL

export const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/",
});