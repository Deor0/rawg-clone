import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  cout: number;
  next: string | null;
  results: T[];
}

const axoisInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5b06e2cfcc0c428c9cadde4dba707dd2",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axoisInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axoisInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
