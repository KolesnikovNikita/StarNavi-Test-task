import axios from "./axios";
import { AxiosPromise } from "axios";
import {Square} from "../types/Square";


export const queryOptions = (): AxiosPromise<Square[]> => {
  return axios.get("/");
};
