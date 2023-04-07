import axios from "axios";


export const request = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: "bearer " + "d86cf21a980b50523230b3a496240363d7852d687e72988dcdcce50d0e3c2527b76b56f3b00936cf7e2a82e0fffdbfed780054db04def30680adf7539a27f25e8c43207324228dff1b4c295c5e0648298101dbbc5bc2284486a0645fa5aec7e85d96b4a4c66e1ee0f84c9faedc79bbc717bc3197736829992399d32790044ea1",
  },
});
