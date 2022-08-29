import React, {useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card} from "antd"
import moment from "moment"
import { useGetCryptoNewsQuery } from '../services/cryptoNews'

const { Text, Title} = Typography
const { Option } = Select

const News = ({simplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: "Cryptocurrency", count: simplified ? 5 : 12})
  const [readMore, setReadMore] = useState(false)

  if(!cryptoNews?.value) return "Loading..."

  const demoImage = "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"

  return (
    <>
     {!simplified && ( <h1 style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "fontSize": '4rem'}}>News</h1>)}
      <Row gutter={[24, 24]}>
        {/* need to map over the VALUES of cryptoNews to get our images and links and everything else important */}
        {cryptoNews.value.map((article, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
              <a href={article.url} target="_blank" rel="noreferrer">
                <div className='news-image-container'>
                  <Title className='news-title' level={4}>{article.name}</Title>
                  <img src={article?.image?.thumbnail?.contentUrl || demoImage} alt="article" />
                </div>
                <p>{article.description > 100 ? `${article.description.substring(0,150)}...` : article.description} </p>
                <div className='provider-container'>
                  <Avatar src={article.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" size={50}/> 
                  <Text>{moment(article.datePublished).startOf("ss").fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
   </>

  )
}

export default News