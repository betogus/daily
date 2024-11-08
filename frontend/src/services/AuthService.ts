import { User } from "@/models/User";
import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8080/auth";

class AuthService {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = BASE_URL;
  }

  async login(user: User): Promise<AxiosResponse<any> | undefined> {
    try {
      const response: AxiosResponse<any> = await axios.post(
        this.baseUrl + "/login",
        user
      );
      return response;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        console.error("Login fallido: Credenciales incorrectas");
      } else {
        console.error("Error inesperado al hacer la solicitud POST: ", error);
      }
    }
  }

  async signup(user: User): Promise<AxiosResponse<any> | undefined> {
    try {
      const response: AxiosResponse<any> = await axios.post(
        this.baseUrl + "/register",
        user
      );
      return response;
    } catch (error: any) {
      console.error("Error inesperado al hacer la solicitud POST: ", error);
    }
  }
}

export default new AuthService();
