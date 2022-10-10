import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, space, Space } from "antd"
import { 
  Navbar, 
  Homepage, 
  Exchanges, 
  Cryptocurrencies, 
  CryptoDetails, 
  News
} from './components';
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <dev className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exect path='/' element={<Homepage />} />
              <Route exect path='/exchanges' element={<Exchanges />} />
              <Route exect path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exect path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exect path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>
        <dev className='footer'>
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br/>
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </dev>
      </dev>
      {/*<Login />*/}
    </div>
  )
}

export default App