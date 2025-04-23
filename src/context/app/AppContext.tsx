import { createContext } from "react"
import { Breakpoint } from "@mui/material"
import {AppMenuItem} from "@/types/menu";


export type MenuState = {
  open: boolean
  items: Array<AppMenuItem>
}

export type GeoData = {
  "ip": string,
  "version": string,
  "city": string,
  "country": string,
  "countryName": string,
  "countryCode": string,
}
export interface AppContextState {
  menu: MenuState
  breakPoint: Breakpoint
  px:  any
  toggleMenu: (value?: boolean) => void,
  geoData: GeoData | null
}

export const INITIAL_STATE: AppContextState = {
  menu: {
     open: false,
      items: [  {id: "home", label: "Inicio", path: "/home/" },
        {id: "us", label: "Nosotros", path: "/home#us" },
        {id: "courses", label: "Cursos", path: "/home/#courses" },
        {id: "teachers", label: "Docentes", path: "/home/#teachers" },
        // {id: "contact", label: "CONTACTO", path: "/#contact" },

      ]
  },
  px: {xs: 1, md:6, lg:10},
  breakPoint: "lg",
  geoData: null,
  

} as AppContextState

export const AppContext = createContext<AppContextState>(INITIAL_STATE)
