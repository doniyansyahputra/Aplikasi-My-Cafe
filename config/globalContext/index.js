
import React, { useState, useContext } from "react";
import axios from 'axios'
import * as globalConstant from "../globalConstant/index";
export const GlobalContext = React.createContext();

export const GlobalStateContext = () => {
    return useContext(GlobalContext);
  };

export const GlobalStateProvider = (props) => {

    const [dataOrderlist, setDataOrderlist] = useState([])

    const getRestClient = () => {
        let headers = {};
        // headers.Authorization = "Bearer " + securityGlobalContextRef.current.token;
        headers['Content-Type'] = 'application/json';
    
        const timeout = (1000 * globalConstant.REQUEST_TIMEOUT_130s);
        const axiosInstance = axios.create({
            headers,
            timeout: timeout,
            timeoutErrorMessage: globalConstant.ERROR_TIMEOUT
        });
    
        axiosInstance.interceptors.response.use(
            (response) =>
                new Promise((resolve) => {
                    resolve(response);
                }),
    
            (error) => {
                return new Promise((resolve, reject) => {
                    reject(error);
                });
            }
        )
        return axiosInstance;
    };

    return (
      <GlobalContext.Provider
      value={{
        dataOrderlist, 
        setDataOrderlist,
        getRestClient
    }}
      >
       {props.children}
      </GlobalContext.Provider>
  );
}