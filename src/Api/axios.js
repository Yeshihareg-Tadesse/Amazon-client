import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://127.0.1:500?clone-38286/us-central1/api",
  // baseURL:"https://amazon-deploy-tg0l.onrender.com/",


    baseURL:"https://amazon-api-deploy-3-itcb.onrender/",
  
});

export { axiosInstance };
