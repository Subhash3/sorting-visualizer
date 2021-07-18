import React, { useContext, createContext, useState } from "react";

type IFC_ArrayContextData = [number[], React.Dispatch<React.SetStateAction<number[]>>]
const ArrayContextDefaultValue: IFC_ArrayContextData = [
    [],
    () => null
]

const ArrayContext = createContext<IFC_ArrayContextData>(ArrayContextDefaultValue)

export const useArray = () => {
    return useContext(ArrayContext)
}

const ArrayProvider = (props: React.PropsWithChildren<{}>) => {
    const [array, setArray] = useState(ArrayContextDefaultValue[0])

    return (
        <ArrayContext.Provider value={[array, setArray]}>
            {props.children}
        </ArrayContext.Provider>
    )
}

export default ArrayProvider