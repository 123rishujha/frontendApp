import { Product } from '../../utils/types';
import { AppDispatch } from '../store';
import { getProductsAPI, updateProductAPI } from './app.api';
import * as types from './app.types';

export interface IProductRequest{
    type: typeof types.PRODUCT_REQUEST;
}


export interface IProductError{
    type: typeof types.PRODUCT_ERROR;
}

export interface IGetProductSuccess{
    type: typeof types.GET_PRODUCTS_SUCCESS;
    payload: Product[];
}


export interface IUpdateProductSuccess {
    type: typeof types.UPDATE_PRODUCT_SUCCESS;
    payload: Product;
}


export type AppAction = IProductError | IProductRequest | IGetProductSuccess | IUpdateProductSuccess;




const productRequest = (): IProductRequest =>{
    return {type: types.PRODUCT_REQUEST};
}

const productError = (): IProductError =>{
    return {type: types.PRODUCT_ERROR};
}


//get product action wala function return action about
const getProductSuccess = (data: Product[]):IGetProductSuccess =>{
    return {type: types.GET_PRODUCTS_SUCCESS,payload: data};
};

//update product action wala function return action about
const updateProductSuccess = (payload:Product): IUpdateProductSuccess =>{
    return {type: types.UPDATE_PRODUCT_SUCCESS,payload}
}

//get product function dispatch wala it will call dispatch and take action function as parameters
export const getProducts = (getproductsParam?:{params: { category:string[] } }):any => async (dispatch:AppDispatch) => {
    dispatch(productRequest());
    try{
        let data = await getProductsAPI(getproductsParam);
        if(data){
            dispatch(getProductSuccess(data));
        }
    }   
    catch(e){
        dispatch(productError());
    } 
}


export const updateProduct = (id:number,payload:{title:string,price:number}):any => async(dispatch:AppDispatch) =>{
    dispatch(productRequest());
    try{
        let data  = await updateProductAPI(id,payload);
        if(data){
            dispatch(updateProductSuccess(data));
        }
    }
    catch(e){
        dispatch(productError());
    }
}

