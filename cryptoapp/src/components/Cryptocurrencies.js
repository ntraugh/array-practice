import React, { useEffect, useState } from 'react'
import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input} from "antd"

import { useGetCryptosQuery } from "../services/cryptoApi"

// passed our simplified prop into our cryptocurrencies component to display only 10 items on the homepage
const Cryptocurrencies = ({simplified}) => {
  // if simplified is true we show 10, if it's false we show 100
  const count = simplified ? 10 : 100

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count)

  // setting our initial state value to the data we get back from the coins
  const [cryptos, setCryptos] = useState([])

  const [searchTerm, setSearchTerm] = useState("")

  // anytime our cryptosList or searchTerm changes we will run this useEffect
  useEffect(() => {

    // filtering our our data where the searchTerm includes the coin name. use exact match by making both terms lowercase()
    const filtered = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

    setCryptos(filtered)
  }, [cryptosList, searchTerm])

  if(isFetching) return "Loading..."
  return (
    <>
      {!simplified && (
        <div className='search-crypto'>
          <Input placeholder='Search Cryptos' onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.id}`}>
              <Card title={`${crypto.rank}. ${crypto.name}`} extra={<img className='crypto-image' src={crypto.iconUrl} />} hoverable>
                <p>Price: {millify(crypto.price)}</p>
                <p>Market Cap: {millify(crypto.marketCap)}</p>
                <p>Daily Change: {millify(crypto.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies