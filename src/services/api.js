import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-nicholas.onrender.com",
});
