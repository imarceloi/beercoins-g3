import axiosRequest from "../../config/axios";
import { AxiosResponse } from "axios";
import { IDeposit } from "../../interfaces/IDeposit";

export default class AccountsService {
  async getAccounts() {
    return new Promise<AxiosResponse<IAccount[]>>(
      (resolve, reject) => {
        axiosRequest
          .get("auth/accounts")
          .then((response) => {
            return resolve(response);
          })
          .catch((error) => reject(error));
      }
    );
  }

  async deposit(deposit: IDeposit) {
    return new Promise<AxiosResponse<IAccount>>(
      (resolve, reject) => {
        axiosRequest
          .post("auth/deposit", deposit)
          .then((response) => {
            return resolve(response);
          })
          .catch((error) => reject(error));
      }
    );
  }

  getAccountsMock(): Promise<IAccount[]> {
    return new Promise(resolve => {
        setTimeout(() => resolve(this.accountsMock), 1000);
    });
}

  accountsMock: IAccount[] = [
    {
      hash: "ba301165-0416-4226-8c00-9e90e66a8974",
      nome: "Malu",
      email: "maria@gmail.com",
      cnpj: "94.005.922/0001-35"
    },
    {
      hash: "4efa1979-3392-4c83-ad1a-15810bfbb1b8",
      nome: "Lucas",
      email: "lucas@mail.com",
      cnpj: "43.828.023/0001-00"
    },
    {
      hash: "1208b0f7-18b7-4f8d-8954-aa10f117a02c",
      nome: "Sabrina",
      email: "sabrina@mail.com",
      cnpj: "68.549.856/0001-54"
    }
  ]
}