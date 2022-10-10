import { ImageList, imageListClasses } from '@mui/material'
import { Link } from 'react-router-dom'
import { Col,Row,Card } from 'antd'
import React from 'react'
import { useState,useEffect } from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { ConsoleSqlOutlined } from '@ant-design/icons'
import millify from 'millify'
import Loader from './Loader'

const Cryptocurrencies = ({simplified}) => {

    const count = simplified ? 10 : 100
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count)

    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    console.log(cryptos)



    useEffect(() => {


      const filteredData = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

      setCryptos(filteredData)

      console.log(setSearchTerm)

      

    }, [cryptoList,searchTerm])

    if(isFetching || cryptos === undefined) return <Loader />

    

    if(cryptos !== undefined) return (
    <>

      {!simplified && (
        <div className="search-crypto">
          <input placeholder='Search Cryptocurrency' onChange={e => setSearchTerm(e.target.value)} />
        </div>
      )}
      <Row gutter={[32,32]} className="crypto-card-container">

        {cryptos?.map(currency => (

          <Col xs={24} sm={12} ig={6} className="crypto-card" key={currency.uuid}>
            
            <Link to={`/crypto/${currency.uuid}`} >
              
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className='crypto-image' src={currency.iconUrl}/>}
                hoverable
              >

                <p>Price:{currency.price}</p>
                <p>Market Cap:{millify(currency.marketCap)}</p>
                <p>Daily Change:{millify(currency.change)}</p>

              </Card>
            
            </Link>
          
          </Col>
            

        ))}

      </Row>
    </>
  )

  

}

export default Cryptocurrencies