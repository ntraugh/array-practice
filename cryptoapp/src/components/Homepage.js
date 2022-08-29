import React from 'react'
import millify from "millify"
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from "react-router-dom"
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery()
  
  // destructured stats from our API call (data.data). we could also grab "coins" from this call as well
  const { stats } = data.data


  if(isFetching) return "Loading..."

  return (
    <>
      <Title level={2} className="heading">
        Global Stats
      </Title>
      <Row>
        {/* because globalStats points to the stats object in our API we can just grab the total from it.  or total24hVolume, totalCoins,totalExchanges, etc */}
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={stats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={stats.totalExchanges}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={stats.totalMarketCap}/></Col>
        <Col span={12}><Statistic title="Total 24hr Volume" value={stats.total24hVolume}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={stats.totalMarkets}/></Col>
         
          
        
      </Row>
    </>
  )
}

export default Homepage