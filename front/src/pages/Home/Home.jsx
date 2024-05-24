import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../../layout/Header/Footer/Footer'
import Awasome from '../components/Awasome'
import BestSeller from '../components/BestSeller'
import Card from '../components/Card'
import Secondsection from '../components/Secondsection'
import Updated from '../components/Updated'

const Home = () => {
  return (
    <div>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Secondsection/>
            <Awasome/>
            <BestSeller/>
            <Updated/>
            <Card/>
            <Footer/>


    </div>
  )
}

export default Home
