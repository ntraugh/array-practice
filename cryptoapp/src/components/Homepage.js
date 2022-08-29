import React from 'react'
import millify from "millify"
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from "react-router-dom"
import { useGetCryptosQuery } from '../services/cryptoApi'

const { Title } = Typography

const Homepage = () => {

  const { data, isFetching } = useGetCryptosQuery()
  
  // grabbing our data from the API calls.  we get data back from API calls then we go into the data object then get stats from there.
  const globalStats = data?.data?.stats


  if(isFetching) return "Loading..."

  return (
    <>
      <Title level={2} className="heading">
        Global Stats
      </Title>
      <Row>
        {/* because globalStats points to the stats object in our API we can just grab the total from it.  or total24hVolume, totalCoins,totalExchanges, etc */}
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={globalStats.totalExchanges}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={globalStats.totalMarketCap}/></Col>
        <Col span={12}><Statistic title="Total 24hr Volume" value={globalStats.total24hVolume}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={globalStats.totalMarkets}/></Col>
         
          
        
      </Row>
    </>
  )
}

export default Homepage