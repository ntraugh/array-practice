import React from 'react'
import millify from "millify"
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from "react-router-dom"

const { Title } = Typography

const Homepage = () => {
  return (
    <>
      <Title level={2} className="heading">
        Global Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="5"/>
        </Col>
      </Row>
    </>
  )
}

export default Homepage