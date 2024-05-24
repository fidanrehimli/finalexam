import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useContext } from 'react'
import "./style.css"
import { ProductsContext } from '../../context/ProductsContext'
import { useNavigate } from 'react-router-dom'
const Awasome = () => {
    const navigate = useNavigate()
    const {data,setData,filter,setFilterData,sortData,setSortData}=useContext(ProductsContext)
    const getAllData = async()=>{
        const res = await axios("http://localhost:5000/aranoza")
        setData(res?.data)
        setFilterData(res?.data)
        console.log(res?.data);
    }
    useEffect(()=>{
        getAllData()
    },[])
  return (
      <div>
    <div className='awesome'>

        <div className='shopawesome'>
            <h1 className='awesometext'>Awesome</h1>
            <h3 className='shopetext'>Shop</h3>
        </div>

        <div className='next'>
            <h3>NEXT</h3>
            <h3>Previous</h3>
        </div>
    </div>
    <div className='crad'>

            {data.slice(0,4).map((elem)=>(
                <div key={elem._id}>
                <img className='cradimage' src={elem.image} alt="" />
                <h1 className='cradtitle'>{elem.title}</h1>
                <p className='cradprice'>${elem.price}</p>
                <button className='detailbtn' onClick={()=>navigate(`/${elem._id}`)}>Detail</button>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Awasome