import { API_SERVICE } from "../axiosConfig"

export const productList = async()=>{
    const response = await API_SERVICE.get('products/')
    if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.data;
}