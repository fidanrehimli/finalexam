import { useState } from "react";
import { createContext } from "react";

export const ProductsContext = createContext()

export const ProductsProvider=({children})=>{
    const [data,setData]=useState([])
    const [filter,setFilterData]=useState([])
    const [sortData,setSortData]=useState([])
    const [imageInp,setImageInp]=useState("")
    const [titleInp,setTitleInp] =useState("")
    const [priceInp,setPriceInp]=useState("")

    return(
        <ProductsContext.Provider
        value={{data,setData,filter,setFilterData,sortData,setSortData,imageInp,setImageInp,titleInp,setTitleInp,priceInp,setPriceInp}}
        >
            {children}
        </ProductsContext.Provider>
    )
}