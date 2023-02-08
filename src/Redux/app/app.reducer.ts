import { Product } from "../../utils/types";
import { AppAction } from "./app.action";
import * as types from './app.types';


//initalstate type interface
export interface IAppstate{
    loading:boolean,
    error:boolean,
    data : Product[],
}

const initialstate = {
    loading: false,
    error: false,
    data: [],
}



export const AppReducer = (state:IAppstate = initialstate,action: AppAction) =>{
    const { type } = action;

    switch(type){

        case types.PRODUCT_REQUEST : {
            return {...state,loading:true};
        }

        case types.PRODUCT_ERROR : {
            return {...state,loading:false,error:true};
        }

        case types.GET_PRODUCTS_SUCCESS : {
            return {
                ...state,
                loading:false,
                data : action.payload,
            }
        }        

        default : {
            return state;
        }
    }
}

