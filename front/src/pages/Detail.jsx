import React, { useContext, useEffect } from 'react'
import {Helmet} from "react-helmet";
import axios from "axios"
import { ProductsContext } from '../context/ProductsContext';
import { useParams } from 'react-router-dom';
import "./style.css"
const Detail = () => {
  const {data,setData,filter,setFilterData,sortData,setSortData}=useContext(ProductsContext)
  const {detailid}=useParams()

  const getAllData = async()=>{
      const res = await axios("http://localhost:5000/aranoza/"+detailid)
      setData(res?.data)
      setFilterData(res?.data)
      console.log(res?.data);
  }
  useEffect(()=>{
      getAllData()
  },[])
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='detail'>
              <img className='detailimage' src={data.image} alt="" />
              <p className='detailtitle'>{data.title}</p>
              <p className='detailprice'>{data.price}</p>
            </div>

    </div>
  )
}

export default Detail