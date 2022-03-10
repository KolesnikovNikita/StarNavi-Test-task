import axios from "axios";

export default axios.create({
  baseURL: "https://demo7919674.mockable.io/",
  headers: {
    "Content-type": "application/json"
  }
});
