import React, { useContext, createContext, useState, Dispatch, SetStateAction } from "react";
import { DEFAULT_ARRAY_LENGTH, generateArray } from "../utils/helpers";

export interface IFC_ProviderProps {
    children?: any
}

export type ArrayContextData = number[]
type ArrayContextValue = {
    array: ArrayContextData;
    setArray: Dispatch<SetStateAction<ArrayContextData>>;
}

export const ArrayContext = createContext<ArrayContextValue | undefined>(undefined)

const ArrayProvider = (props: IFC_ProviderProps) => {
    const [array, setArray] = useState(generateArray(DEFAULT_ARRAY_LENGTH))

    return (
        <ArrayContext.Provider value={{ array, setArray }}>
            {props.children}
        </ArrayContext.Provider>
    )
}

// https://www.typescriptlang.org/play?ssl=26&ssc=1&pln=32&pc=1#code/JYWwDg9gTgLgBAJQKYEMDGMA0cDecAiwAzmCjGgBbYDKSM1MZSAghsBAHbYCuRSDTHnwDCnGEgAe8AL5wAZlAgg4AIiioMKgLAAoXZMiw4wDuKhz0SOAEkACooBuwACZIo9iGCK5dcP3EpgABtndQ4AfgAuOBQOAE8Abl1pXV0YOLArZjAwUVNJekZxOABeXGMiAFkkDm4AeUyOaIAjCAgg1A4EiuoXJAaalraO2LgUvR10zLhs3LECgDUUIO4rMpxffyIipGjZvPEpAXEknX84PkKmaMISMkoAHlor8VYYdg4H-fmjnYA+P6naSnfQSQzwNCcbYzHIHAqlRAaGAAOjQ6iYcKkX1hPxgSxWVgAPnBuBxXHITEhnH8ABSk8mU5wAShBOgM0AhUPgsw8TlcUARNLAii80Tsjj67hFRCZpT+PjO-khHGhAG1toILnRjkgALoI3j8HY0vDEaq1AZNeTLPjYYi9VyW6IWIJ8MYs1KKvzqGDcKAcOA0zbnPzYub5KTI3mSuAOZarEo4PAa8TYS46sbSP7BkPnHDCzxEVEUYKhGrjXOhgD03wjKOj-OzXrgHp0wM9clJbE4JL4tcOMBpso2zeV0IwEnxqwNIlxNP7BSZOeAckDE6naxKZXpSApHCpspgFEUAHc4PuzwBRKCKKBB5vnFSXsFIDBUmIBnkS-kXJRIE8UG4VgmHAR5WOiGCgeoVgwBAWqcnWsbxkgKhLs2Pp+gG67IXAVZVueEBnhQKDeFMWQ4nWG45nhcDQHASAODUcAFnyVjOEoKAgSAdAUBAzjeHIdHNHQZj0RwaAoF43BBGQHzJJ6Y7wMIQTADU8BlEOcoKucikBDAk7LDOLAUQOmk0dhQQVHADL7s42AcHBlCvgA1uer5IEQRAoFAcQAITJEAA
export const useArray = () => {
    const ctxValue = useContext(ArrayContext)
    if (ctxValue === undefined) throw new Error(
        "Expected an AppProvider somewhere in the react tree to set context value")
    return ctxValue // now has type AppContextValue
    // or even provide domain methods for better encapsulation
}

export default ArrayProvider