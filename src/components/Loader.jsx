import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="loader">
        <LoadingOutlined style={{ fontSize: 100 }} spin />;
    </div>
  )
}

export default Loader