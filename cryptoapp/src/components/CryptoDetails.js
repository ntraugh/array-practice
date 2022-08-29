import React, { useState } from 'react'
import HTMLReactParser from "html-react-parser"
// need to bring in useParams because we will show the page that is specific to that query parameter
import { useParams } from "react-router-dom"
import millify from "millify"
import { Col, Row, Typography, Select} from "antd"
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined} from "@ant-design/icons"

import { useGetCryptoDetailsQuery } from '../services/cryptoApi'

const { Title, Text } = Typography
const { Option } = Select


const CryptoDetails = () => {
  const { coinId } = useParams()
  const [timePeriod, setTimePeriod] = useState("7d")
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)

  console.log(data)
  
  return (
    <div>CryptoDetails {coinId}</div>
  )
}

export default CryptoDetails