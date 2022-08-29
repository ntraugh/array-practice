import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card} from "antd"
import moment from "moment"
import { useGetCryptoNewsQuery } from '../services/cryptoNews'

const { Text, Title} = Typography
const { Option } = Select

const News = ({simplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 5 : 12})
  
  if(!cryptoNews?.value) return "Loading..."

  return (
    <Row gutter={[24, 24]}>
      {/* need to map over the VALUES of cryptoNews to get our images and links and everything else important */}
      {cryptoNews.value.map((article, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className='news-card'>
            <a href={article.url} target="_blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{article.name}</Title>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News