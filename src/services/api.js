import axios from "axios";

export const api = axios.create({
  baseURL: "food-explorer-nicholas.railway.internal",
});
