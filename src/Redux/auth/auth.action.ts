import { LoginData } from '../../utils/types';
import { AppDispatch } from '../store';
import { userLoginAPI } from './auth.api';
import * as types from './auth.types';



export interface IUserLoginRequest {
    type : typeof types.USER_LOGIN_REQUEST;
}
 
export interface IUserLoginError {
    type: typeof types.USER_LOGIN_ERROR;
}

export interface IUserLoginsuccess {
    type: typeof types.USER_LOGIN_SUCCESS;
    payload: string;   
}


export type AuthAction = IUserLoginError | IUserLoginRequest | IUserLoginsuccess;


export const userLoginRequest = (): IUserLoginRequest =>{
    return {type: types.USER_LOGIN_REQUEST};
}

export const userLoginError = (): IUserLoginError =>{
      return {type: types.USER_LOGIN_ERROR};
}

export const userLoginSuccess = (token: string): IUserLoginsuccess =>{
    return {type: types.USER_LOGIN_SUCCESS,payload:token};
}


export const userLogin = (payload:LoginData): any => async (dispatch:AppDispatch) =>{
    dispatch(userLoginRequest());
    try{
        let data = await userLoginAPI(payload);
        if(data){
            dispatch(userLoginSuccess(data));
        }
    }
    catch(e){
        dispatch(userLoginError());
    }
}