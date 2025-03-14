import { AppContextState, GeoData } from "./AppContext"
import { Breakpoint } from "@mui/material"

type LayoutAction =
  | { type: "setMenuOpened"; payload: boolean | undefined }
  | { type: "setGeoData"; payload: GeoData }
  | { type: "setBreakPoint"; payload: Breakpoint }

export const AppReducer = (state: AppContextState, action: LayoutAction): AppContextState => {
  switch (action.type) {
    case "setMenuOpened":
      return {
        ...state,
           menu: {
              ...state.menu,
              open: action.payload === undefined ? !state.menu.open : action.payload,
           }
      }

    case "setBreakPoint":
      return {
        ...state,
        breakPoint: action.payload,
      }

      case "setGeoData":
          return {
              ...state,
              geoData: action.payload,
          }

      default:
      return state
  }
}
