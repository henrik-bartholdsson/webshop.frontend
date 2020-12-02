import React, { useState } from 'react'

export const AppContext = React.createContext();

export const AppStateProvider = (props) => {

    let appState = {
        userToken: "",
        userLogedIn: false,
        userName: "",
    }

    const [context, setContext] = useState(appState);
    return (<AppContext.Provider value={[context, setContext]}>
        {props.children}
    </AppContext.Provider>
    )
}

const AppContextProvider = AppContext.Provider
const AppContextConsumer = AppContext.Consumer

export { AppContextProvider, AppContextConsumer }