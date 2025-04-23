import React, {useContext, useReducer} from "react"

import {AppContext, INITIAL_STATE, AppContextState} from "./AppContext"
import {AppReducer} from "./AppReducer"
import {Breakpoint, useMediaQuery, useTheme} from "@mui/material"

type AppProviderProps = {
    children: React.ReactNode | React.ReactNode[]
}

const AppProvider = ({children}: AppProviderProps) => {
    const [{geoData, breakPoint, menu, px}, dispatch] = useReducer(AppReducer, INITIAL_STATE)

    const toggleMenu = (payload?: boolean) => {
        dispatch({type: "setMenuOpened", payload})
    };
    const useWidth = (): Breakpoint => {
        const theme = useTheme();
        const keys = [...theme.breakpoints.keys].reverse();
        return (
            keys.reduce<Breakpoint | null>((output, key) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const matches = useMediaQuery(theme.breakpoints.up(key));
                return !output && matches ? key : output;
            }, null) || "xs"
        );
    };

    React.useEffect(() => {
        fetch("https://ipapi.co/json/", {method: "get"}).then(async (r) => {
            const rawData: any = await r.json()
            dispatch({
                type: "setGeoData", payload: {
                    city: rawData.city,
                    country: rawData.country,
                    countryCode: rawData.country_code,
                    countryName: rawData.country_name,
                    ip: rawData.version,
                    version: rawData.version
                }
            })
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    const width = useWidth()
    React.useEffect(() => {
        dispatch({type: "setBreakPoint", payload: width})
    }, [width])

    return (
        <AppContext.Provider
            value={{
                px,
                geoData,
                breakPoint,
                menu,
                toggleMenu,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = (): AppContextState => useContext(AppContext)

export default AppProvider

