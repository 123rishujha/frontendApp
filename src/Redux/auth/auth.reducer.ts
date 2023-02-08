import { AuthAction } from './auth.action';
import * as types from './auth.types';


export interface AuthState {
    loading: boolean;
    error: boolean;
    isAuth: boolean;
    token: string;
}


const initialState = {
    loading: false,
    error: false,
    isAuth: false,
    token: '',
}



export const authReducer = (state:AuthState = initialState, action:AuthAction): AuthState =>{
    const {type} = action;

    switch(type){

        case types.USER_LOGIN_REQUEST : {
            return {...state,loading:true};
        }

        case types.USER_LOGIN_ERROR : {
            return {...state,loading:false,error:true};
        }

        case types.USER_LOGIN_SUCCESS : {
            return {
                ...state,
                loading: false,
                isAuth: true,
                token: action.payload,
            }
        }

        default : {
            return state;
        }
    }

}