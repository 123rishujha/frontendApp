import axios,{Axios, AxiosResponse} from "axios"
import { Product } from "../../utils/types";

export const getProductsAPI = async (getproductsParam?: { params: {category: string[]} } ) =>{
    try{
        let res: AxiosResponse<Product[]> =  await axios.get(`http://localhost:8080/products`,getproductsParam);
        return res.data;
    }
    catch(e){
        console.log("getProductAPI Error",e); 
    }
};



export const updateProductAPI = async ( 
    id:number,
    payload:{title:string,price:number}
 ) =>{
    try{
        let response:AxiosResponse<Product> = await axios.patch(`http://localhost:8080/products/${id}`,payload);
        return response.data;
    }
    catch(e){
        console.log("Update Product error",e);
    }
}


