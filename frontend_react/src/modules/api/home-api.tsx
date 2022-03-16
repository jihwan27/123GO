import axios, { AxiosResponse } from "axios";
export class HomeApi {

  getBackendConnection = async() => {
    return await axios.get("/api/main");
  };

  async getName(name: string) {
    return await axios.post("/api/user", { name: name });
  }

}
