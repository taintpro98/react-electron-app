import axios from "axios";

export const baseURL = 'http://localhost:7000';

export const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});