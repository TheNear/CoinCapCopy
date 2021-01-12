import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { URLS, URLSType } from "../assets/js/constants";
import { CurrencyRespone } from "../types/apiResponses";

export const test = "32";

class ApiService {
  private BASE_URL: string;

  private CURRENCY_URL: string

  private axiosOption: AxiosRequestConfig;

  constructor(URL: URLSType) {
    this.BASE_URL = URL.BASE;
    this.CURRENCY_URL = URL.CURRENCY;
    this.axiosOption = {
      baseURL: this.BASE_URL,
      timeout: 1500,
    };
  }

  static async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    const { data }: AxiosResponse<T> = await axios(url, options);
    return data;
  }

  public async getCurrencyList() {
    const { data } = await ApiService.get<CurrencyRespone>(this.CURRENCY_URL, this.axiosOption);
    return data;
  }
}

const api = new ApiService(URLS);

export { api };
