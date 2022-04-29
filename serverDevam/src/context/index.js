import React, { useContext, useReducer, createContext } from "react";

const AppContext = createContext();


const initialState = {
    employees: [],
    employee: {} //// nesne(object)
}

const reducer = (state, action) => {

    switch (action.type) {
        case "FETCH_EMPLOYEES":
            return { ...state, employees: action.payload }

        case "FETCH_EMPLOYEE_ID":
            return { ...state, book: action.payload };

        default:
            return state;
    }
}

const AppProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}


export default {AppProvider,AppContext,useContext}
