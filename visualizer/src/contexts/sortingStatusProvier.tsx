import React, { createContext, useContext, useState } from "react";
import { IFC_ProviderProps } from "./barsInfoProvider";

export type IFC_SortingStatusContextData = Boolean

export interface IFC_SortingStatusContextValue {
    sortingStatus: IFC_SortingStatusContextData,
    setSortingStatus: React.Dispatch<React.SetStateAction<IFC_SortingStatusContextData>>
}

export const SortingStatusContext = createContext<IFC_SortingStatusContextValue | undefined>(undefined)

const SortingStatusProvider = (props: IFC_ProviderProps) => {
    const [sortingStatus, setSortingStatus] = useState<IFC_SortingStatusContextData>(false)

    return (
        <SortingStatusContext.Provider value={{ sortingStatus, setSortingStatus }}>
            {props.children}
        </SortingStatusContext.Provider>
    )
}

export const useSortingStatus = () => {
    const ctxValue = useContext(SortingStatusContext)
    if (ctxValue === undefined) throw new Error(
        "Expected an AppProvider somewhere in the react tree to set context value")
    return ctxValue // now has type AppContextValue
    // or even provide domain methods for better encapsulation
}

export default SortingStatusProvider

