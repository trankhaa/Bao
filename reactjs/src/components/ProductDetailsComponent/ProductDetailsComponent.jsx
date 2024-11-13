import React from 'react'
import { Col, Row, Image } from 'antd'
import ImageProduct from '../../assets/images/mac5.webp'
import ImageProductSmall from '../../assets/images/mac5.webp'
import { WrapperStyleIColmage, WrapperStyleImageSmall, WrapperStyleNameProduct } from './style'

const ProductDetailsComponent = () => {
    return (
        <Row style={{ padding: '16px', backgroundColor: '#fff' }}>
            <Col span={10}>
                <Image src={ImageProduct} alt="image product" preview="false" />
                <Row style={{ paddingTop: '10px', justifyContent: 'space-between' }}>
                    <WrapperStyleIColmage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="image small" preview="false" />
                    </WrapperStyleIColmage>
                    <WrapperStyleIColmage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="image small" preview="false" />
                    </WrapperStyleIColmage>
                    <WrapperStyleIColmage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="image small" preview="false" />
                    </WrapperStyleIColmage>
                    <WrapperStyleIColmage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="image small" preview="false" />
                    </WrapperStyleIColmage>
                    <WrapperStyleIColmage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="image small" preview="false" />
                    </WrapperStyleIColmage>
                    <WrapperStyleIColmage span={4}>
                        <WrapperStyleImageSmall src={ImageProductSmall} alt="image small" preview="false" />
                    </WrapperStyleIColmage>
                </Row>
            </Col>
            <Col span={14}>
                <WrapperStyleNameProduct>
                    Macbook Air 2020 13" M1 8/256GB Silver - USED 98.5%
                </WrapperStyleNameProduct>
            </Col>
        </Row>
    )
}

export default ProductDetailsComponent