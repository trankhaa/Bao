import React from 'react'
import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import CardComponent from '../../components/CardComponent/CardComponent'
import { Col, Pagination, Row } from 'antd'
import { WrapperNavBar, WrapperProducts } from './style'

const TypeProductPage = () => {
  const onChange = (page) => { console.log("Page changed to:", page); };
  return (
    <div style={{ padding: '0 120px', background: '#efefef' }}>
      <Row style={{ flexWrap: 'nowrap', paddingTop: '10px' }}>
        <WrapperNavBar span={6} style={{ background: '#fff', marginRight: '10px', padding: '10px', borderRadius: '6px' }}>
          <NavBarComponent />
        </WrapperNavBar>
        <Col span={20}>
          <WrapperProducts >
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <Pagination showQuickJumper defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: 'center', marginTop: '10px' }} />
        </Col>
      </Row>
    </div>
  )
}

export default TypeProductPage