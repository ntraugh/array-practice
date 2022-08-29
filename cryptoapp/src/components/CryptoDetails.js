import React, { useState } from 'react'
import HTMLReactParser from "html-react-parser"
// need to bring in useParams because we will show the page that is specific to that query parameter
import { useParams } from "react-router-dom"
import millify from "millify"
import { Col, Row, Typography, Select} from "antd"
import { MoneyCollectOutlined, NumberOutlined, DollarCircleOutlined, CheckOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, ThunderboltOutlined} from "@ant-design/icons"

import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography
const { Option } = Select


const CryptoDetails = () => {
  const { coinId } = useParams()
  const [timePeriod, setTimePeriod] = useState("7d")
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)

  const time = ['3h', '24h', '7d', '30d', '3m', '1y',  '3y', '5y'];

  // destructure our coins information so we don't have to type data?.data?. a million times
  const cryptoDetails = data?.data?.coin

  // create object of stats and genericStats we can map through
  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: 'Url', value: <a href={`${cryptoDetails?.websiteUrl}`}>{cryptoDetails?.websiteUrl}</a>, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];
 
  if(isFetching) return "Loading..."
  
  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title level={2} className="coin-name">{cryptoDetails.name} ({cryptoDetails.symbol})</Title>
        <p>{cryptoDetails.name} live price in US dollars</p>
      </Col>
      <Select defaultValue="7d" className='select-timeperiod' placeholder="Select time" onChange={(value) => setTimePeriod(value)}>
        {time.map((option) => <Option key={option}>{option}</Option>)}
      </Select>
      <Col className='stats-container'>
        <Col className='coin-value-statistics'>
          <Col className='coin-value-statistics-heading'>
            <Title level={3} className="coin-details-heading">
              {cryptoDetails.name} value statistics.
            </Title>
            <p>
              An overview showing statistics
            </p>
          </Col>
          {stats.map(({ icon, title, value}) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
            </Col>
          ))}
        </Col>
        <Col className='other-stats-info'>
          <Col className='coin-value-statistics-heading'>
            <Title level={3} className="coin-details-heading">
              {cryptoDetails.name} generic statistics.
            </Title>
            <p>
              An overview showing statistics
            </p>
          </Col>
          {genericStats.map(({ icon, title, value}) => (
            <Col className='coin-stats'>
              <Col className='coin-stats-name'>
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className='stats'>{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
    </Col>
  )
}

export default CryptoDetails