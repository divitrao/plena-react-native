import { API_SERVICE } from "../axiosConfig"

export const productList = async(skip:number)=>{
    const response = await API_SERVICE.get(`products/?skip=${skip}&limit=20`)
    if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.data;
}