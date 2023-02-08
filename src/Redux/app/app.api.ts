import axios,{AxiosResponse} from "axios"
import { Product } from "../../utils/types";

export const getProductsAPI = async () =>{
    try{
        let res: AxiosResponse<Product[]> =  await axios.get(`http://localhost:8080/products`);
        return res.data;
    }
    catch(e){
        console.log("getProductAPI Error",e); 
    }
};



