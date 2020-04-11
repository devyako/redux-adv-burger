import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-f2b8c.firebaseio.com/",
});

export default instance;
