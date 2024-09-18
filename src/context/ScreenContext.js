import {createContext, useContext, useState} from "react";
const ScreenContext = createContext(window.innerWidth)

export const ScreenProvider = ({children}) => {
    const [width, setWidth] = useState(window.innerWidth);

    return(
        <ScreenContext.Provider value = {width}>
            {children}
        </ScreenContext.Provider>
    )
}

export const useScreenContext = () => useContext(ScreenContext)