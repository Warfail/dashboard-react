import React, {createContext, useContext, useState} from "react";

const StateContext = createContext ();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    this.state.first
    

    
    return (
        <StateContext.Provider
        value={{test: 'test'}}
        >
            {children}
        </StateContext.Provider>
    )
}