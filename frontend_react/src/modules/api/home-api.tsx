import axios, { AxiosResponse } from "axios";
import { resolve } from "node:path/win32";

export class HomeApi {

  // getBackendConnection = async() => {
  //   axios.get("/main").then(res => {
  //     // if (res !== undefined) {
  //     //   console.log(res)
  //     //   return res;
  //     // };
  //     return res; 
  //   });
  // };

  getBackendConnection = async() => {
    let a = '';
    const b = await axios.get("/main").then(res => {a = res.data.message})
    return a;
  };

}
