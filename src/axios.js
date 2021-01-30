import axios from "axios";

// in this we are saving base url of page for api
export default axios.create({
  baseURL: "https://dry-citadel-19835.herokuapp.com",
  // baseURL: "http://localhost:8000",
});