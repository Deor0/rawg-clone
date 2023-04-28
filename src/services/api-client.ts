import axios from "axios";

export interface FetchResponse<T> {
  cout: number;
  results: T[];
}


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5b06e2cfcc0c428c9cadde4dba707dd2",
  },
});
