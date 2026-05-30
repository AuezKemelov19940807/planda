import axios from "axios";

export const api = axios.create({
  baseURL: "https://planola-back.fly.dev",
  withCredentials: true,
});
