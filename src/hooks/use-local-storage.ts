
type UseLocalStorageHook = {
    putData: <T = any>(key: string, data: T) => unknown
    getData: <T = any>(key: string) => T | null
    removeData: (key: string) => unknown
    cleanData: () => unknown
}


const useLocalStorage = (): UseLocalStorageHook => {

    const keyPrefix = "pierre_landing_"


    const putData = <T = any>(key: string, data: T) => {
        const value = typeof data === "string" ? data : JSON.stringify(data)
        localStorage.setItem(`${keyPrefix}${key}`, value)
    }

    const getData = <T = any | null>(key: string): T | null => {
        const value = localStorage.getItem(`${keyPrefix}${key}`)
        return value ? JSON.parse(value) as T : null
    }

    const removeData = (key: string) => {
        localStorage.removeItem(`${keyPrefix}${key}`)
    }

    const cleanData = () => {
        const keys = Object.keys(localStorage)
        const landingKeys = keys.filter(x=>x.includes(keyPrefix))
         for(const k  of landingKeys){
             localStorage.removeItem(k)
         }
    }
    return {
        putData,
        getData,
        removeData,
        cleanData
    }
}

export default useLocalStorage