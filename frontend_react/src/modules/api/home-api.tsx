import axios, { AxiosResponse } from "axios";
export class HomeApi {

  getBackendConnection = async() => {
    return await axios.get("/main");
  };

  async getName(name: string) {
    return await axios.post("/user", { name: name });
  }

}
