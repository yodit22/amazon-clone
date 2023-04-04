import axios from "axios";
const instance = axios.create({
  baseURL: " https://us-central1-clone-87f1d.cloudfunctions.net/api", //The API (cloud function)
  // URL
});

export default instance;
