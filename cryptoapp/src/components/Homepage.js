import React, { useState } from 'react'
import millify from "millify"
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from "react-router-dom"
import { useGetCryptosQuery } from '../services/cryptoApi'
import {Cryptocurrencies, News} from "../components"


const { Title } = Typography

const Homepage = () => {

  

  const { data, isFetching } = useGetCryptosQuery(10)
  
  // destructured stats from our API call (data.data). we could also grab "coins" from this call as well
  const stats = data?.data?.stats


  if(isFetching) return "Loading..."

  return (
    <>
      <Title level={2} className="heading">
        Global Stats
      </Title>
      <Row>
        {/* because globalStats points to the stats object in our API we can just grab the total from it.  or total24hVolume, totalCoins,totalExchanges, etc */}
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={stats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(stats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(stats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24hr Volume" value={millify(stats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(stats.totalMarkets)}/></Col>
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Top 10</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      {/* because simplified is true here, the homepage won't show the search option, but in our cryptocurrency file simplified is false so the search bar shows */}
      <Cryptocurrencies simplified/>
      <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage